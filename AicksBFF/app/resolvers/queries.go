package Resolvers

import (
	. "aics_remake/app/filters"
	"aics_remake/app/models"
	"aics_remake/app/models_gql"
)

func (r *Resolver) BankAccounts(args *struct{ Filter *BankAccountFilterGql }) *[]models_gql.BankAccountGql {
	if args.Filter != nil {

	}

	return &[]models_gql.BankAccountGql{
		{
			Title:    "First",
			Id:       "1",
			Value:    1.0,
			Currency: "$",
			UserName: "Andrew",
		},
		{
			Title:    "Second",
			Id:       "2",
			Value:    2.0,
			Currency: "$",
			UserName: "Andrew",
		},
	}
}

func (r *Resolver) GetCurrency() *[]models_gql.CurrencyGql {
	return &[]models_gql.CurrencyGql{
		{Currency: &models.Currency{
			ID:          1,
			Name:        "EUR",
			Description: "Euro",
		}},
		{Currency: &models.Currency{
			ID:          2,
			Name:        "USD",
			Description: "Dollars",
		}},
	}
}
