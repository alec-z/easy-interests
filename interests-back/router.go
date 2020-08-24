	package main

import (
	"github.com/alec-z/interests-back/api"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func RouterInit() {
	// New Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.POST("/api/cal", api.Calculate)

	e.POST("/api/cal_item", api.CalculateItem)

	// Start server
	e.Logger.Info(e.Start(":3000"))
}