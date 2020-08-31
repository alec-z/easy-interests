package model

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestUnmarshalPayItem(t *testing.T) {
	payItemJson := `{"date":"2010-10-20","amount":47000}`
	payItem := new(PayItem)
	if err := json.Unmarshal([]byte(payItemJson), payItem); err != nil {
		fmt.Print(err)
	}
	if payItem.Amount == 0 {
		t.Error("amount Unmarshal fail")
	}
	if payItem.Date == "" {
		t.Error("date unmarshal fail")
	}
}

func TestUnmarshalInterestInput(t *testing.T) {
	interestsInputJson := `{"incomes": [{"date":"2010-10-20","amount":47000}]}`
	interestsInput := new(InterestsInput)
	if err := json.Unmarshal([]byte(interestsInputJson), interestsInput); err != nil {
		fmt.Print(err)
	}
	if interestsInput.Incomes == nil || len(interestsInput.Incomes) == 0 {
		t.Error("amount Unmarshal fail")
	}
	if interestsInput.Paybacks != nil {
		t.Error("date unmarshal fail")
	}
}
