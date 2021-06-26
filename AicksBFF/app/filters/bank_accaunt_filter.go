package filters

type BankAccountFilter struct {
	Id         *string
	Value      *float64
	CurrencyId *float64
	UserId     *float64
}

type BankAccountFilterGql struct {
	Id         *string
	Value      *float64
	CurrencyId *float64
	UserId     *float64
}

func (b *BankAccountFilterGql) ToFilter() BankAccountFilter {
	return BankAccountFilter{
		Id:         b.Id,
		Value:      b.Value,
		CurrencyId: b.CurrencyId,
		UserId:     b.UserId,
	}
}
