package model

import (
	"github.com/alec-z/interests-back/util"
)

type ItemsInput struct {
	Amount float64 `json:"amount" form:"amount" query:"amount"`
	AnnualInterest float64 `json:"annualInterest" form:"annualInterest" query:"annualInterest"`
	Period int `json:"period" form:"period" query:"period"`

}


func (i *ItemsInput) GetItems() float64{
	return util.CalItemFromInterest(i.Amount, i.AnnualInterest / 100.0, i.Period)
}
