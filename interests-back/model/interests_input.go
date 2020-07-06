package model

import (
	"github.com/alec-z/interests-back/util"
	"github.com/labstack/echo/v4"
	"math"
	"strconv"
	"time"

)

type InterestsInput struct {
	incomes []PayItem
	paybacks []PayItem
}

func (i *InterestsInput) BindFromMap(m echo.Map) {
	for _, v := range m["incomes"].([]interface{}) {
		vv := v.(map[string]interface{})
		amount, _ := strconv.ParseFloat(vv["amount"].(string), 64)
		i.incomes = append(i.incomes, PayItem{date: vv["date"].(string), amount: amount})
	}
	for _, v := range m["paybacks"].([]interface{}) {
		vv := v.(map[string]interface{})
		amount, _ := strconv.ParseFloat(vv["amount"].(string), 64)
		i.paybacks = append(i.paybacks, PayItem{date: vv["date"].(string), amount: amount})
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
	sol = util.NewtonIterate(fn, fn1, 1, 100, 1,100, 1e-10)
	return
}

func (i * InterestsInput) getEquation() map[int]float64 {
		targetDate, _ := time.Parse("2006-01-02", i.incomes[0].date)
	res := make(map[int]float64)
	for _, v := range i.incomes {
		t, _ := time.Parse("2006-01-02", v.date)

		res[-int(math.Ceil(t.Sub(targetDate).Hours() / 24.0))] += -v.amount
	}
	for _, v := range i.paybacks {
		t, _ := time.Parse("2006-01-02", v.date)
		res[-int(math.Ceil(t.Sub(targetDate).Hours() / 24.0))] += v.amount
	}
	return res
}