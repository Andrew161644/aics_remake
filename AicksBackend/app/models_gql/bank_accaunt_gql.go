package models_gql

type BankAccountGql struct {
	Title      string  `json:"title"`
	Id         string  `json:"id"`
	Value      float64 `json:"value"`
	CurrencyId string  `json:"currencyId"`
	UserId     float64 `json:"userId"`
}

func (b BankAccountGql) GetTitle() string {
	return b.Title
}

func (b BankAccountGql) GetId() string {
	return b.Id
}

func (b BankAccountGql) GetValue() float64 {
	return b.Value
}
func (b BankAccountGql) GetCurrency() string {
	return b.CurrencyId
}
func (b BankAccountGql) GetUserId() float64 {
	return b.UserId
}
