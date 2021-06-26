package Resolvers

import (
	"context"
	"github.com/gofrs/uuid"
	"time"
)

type Resolver struct {
	TestEvent  chan *Event
	Subscriber chan *Subscriber
}

type Event struct {
	id     string
	result string
}

func (ev *Event) Id() string {
	return ev.id
}

func (ev *Event) Result() string {
	return ev.result
}

func NewEvent(id string, result string) *Event {
	return &Event{id: id, result: result}
}

type Subscriber struct {
	stop   <-chan struct{}
	events chan<- *Event
}

func NewResolver() *Resolver {
	var r = Resolver{
		TestEvent:  make(chan *Event),
		Subscriber: make(chan *Subscriber),
	}

	go r.StartManagment()

	return &r
}

func (r *Resolver) StartManagment() {
	subscribers := map[string]*Subscriber{}
	unsubscribe := make(chan string)

	for {
		select {
		case id := <-unsubscribe:
			delete(subscribers, id)
		case s := <-r.Subscriber:
			myuuid, _ := uuid.NewV4()
			subscribers[myuuid.String()] = s
		case e := <-r.TestEvent:
			for id, s := range subscribers {
				go func(id string, s *Subscriber) {
					select {
					case <-s.stop:
						unsubscribe <- id
						return
					default:
					}
					select {
					case <-s.stop:
						unsubscribe <- id
					case s.events <- e:
					case <-time.After(time.Second):
					}
				}(id, s)
			}
		}
	}
}
func (r *Resolver) EventHandeled(ctx context.Context) <-chan *Event {
	ev := make(chan *Event)
	r.Subscriber <- &Subscriber{events: ev, stop: ctx.Done()}
	return ev
}
