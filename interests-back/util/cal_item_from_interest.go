package util

import "math"

func CalItemFromInterest(amount, aR float64, period int) float64 {
	mR := aR / 12
	mRP1 := mR + 1
	return amount * (1 - 1 / mRP1) / (1 - math.Pow(1 / mRP1, float64(period))) * mRP1
}	