package api

import (
	"fmt"
	"github.com/alec-z/interests-back/model"
	"github.com/labstack/echo/v4"
	"math"
	"net/http"
)

func Calculate(c echo.Context)  (err error) {
	m := new(echo.Map)
	if err = c.Bind(m); err != nil {
		return
	}
	interestInput := new(model.InterestsInput)
	interestInput.BindFromMap(*m)
	sol := interestInput.GetInterests()
	aR := math.Pow(sol.Sol, 365)
	tmpSol := (math.Pow(aR, 1 / 12.0) - 1) * 12 * 100.0
	sol.SolStr = fmt.Sprintf("%.2f", tmpSol)+"%"
	return c.JSON(http.StatusOK, sol)
}

func CalculateItem(c echo.Context) (err error) {
	m := new(model.ItemsInput)
	if err = c.Bind(m); err != nil {
		return
	}
	res := fmt.Sprintf("%.2f", m.GetItems())
	return c.JSON(http.StatusOK, res)
}