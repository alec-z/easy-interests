package util

type Result struct {
	Success bool `json:"success"`
	SolStr string `json:"solStr"`
	Sol float64 `json:"sol"`
	Tol float64 `json:"tol"`
	Steps int `json:"steps"`
}