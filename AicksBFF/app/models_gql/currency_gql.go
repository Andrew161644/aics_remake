package models_gql

import (
	"aics_remake/app/models"
	"github.com/graph-gophers/graphql-go"
	"strconv"
)

type CurrencyGql struct {
	*models.Currency
}

func (b CurrencyGql) Id() graphql.ID {
	id := strconv.Itoa(b.Currency.ID)
	return graphql.ID(id)
}

func (b CurrencyGql) Name() string {
	return b.Currency.Name
}

func (b CurrencyGql) Description() string {
	return b.Currency.Description
}
