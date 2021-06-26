package main

import (
	"aics_remake/app/resolvers"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	"github.com/graph-gophers/graphql-transport-ws/graphqlws"
	"log"
	"net/http"
)

var httpPort = 8080

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", graphiql)

	s, err := graphql.ParseSchema(schema, Resolvers.NewResolver())
	if err != nil {
		panic(err)
	}
	graphQLHandler := graphqlws.NewHandlerFunc(s, &relay.Handler{Schema: s})
	router.HandleFunc("/graphql", graphQLHandler)
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}), handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}), handlers.AllowedOrigins([]string{"*"}))(router)))
}
