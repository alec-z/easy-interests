package model

import (
	"github.com/alec-z/interests-back/util"
	"github.com/labstack/echo/v4"
	"math"
	"strconv"
	"time"

)

type InterestsInput struct {
	Incomes []PayItem
	Paybacks []PayItem
}

func (i *InterestsInput) BindFromMap(m echo.Map) {
	for _, v := range m["incomes"].([]interface{}) {
		vv := v.(map[string]interface{})
		amount, _ := strconv.ParseFloat(vv["amount"].(string), 64)
		i.Incomes = append(i.Incomes, PayItem{Date: vv["date"].(string), Amount: amount})
	}
	for _, v := range m["paybacks"].([]interface{}) {
		vv := v.(map[string]interface{})
		amount, _ := strconv.ParseFloat(vv["amount"].(string), 64)
		i.Paybacks = append(i.Paybacks, PayItem{Date: vv["date"].(string), Amount: amount})
	}
}

func (i *InterestsInput) GetInterests() (sol util.Result){
	equation := i.getEquation()
	fn := func(x float64) float64 {
		res := 0.0
		for k, v := range equation {
			res += math.Pow(x, float64(k)) * v
		}
		return res
	}
	fn1 := func(x float64) float64 {
		res := 0.0
		for k, v := range equation {
			if k != -1 {
				res += math.Pow(x, float64(k)-1) * v * float64(k)
			} else {
				res += math.Log(x) * v
			}
		}
		return res
	}
	sol = util.NewtonIterate(fn, fn1, 1, 500, 1,100, 1e-10)
	return
}

func (i * InterestsInput) getEquation() map[int]float64 {
		targetDate, _ := time.Parse("2006-01-02", i.Incomes[0].Date)
	res := make(map[int]float64)
	for _, v := range i.Incomes {
		t, _ := time.Parse("2006-01-02", v.Date)

		res[-int(math.Ceil(t.Sub(targetDate).Hours() / 24.0))] += -v.Amount
	}
	for _, v := range i.Paybacks {
		t, _ := time.Parse("2006-01-02", v.Date)
		res[-int(math.Ceil(t.Sub(targetDate).Hours() / 24.0))] += v.Amount
	}
	return res
}
