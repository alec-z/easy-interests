// NewtonIterate
/*
-----------------------------------------
作者  : Alec Zheng
日期  : 2020-05-25
版本  : 0.0.1
-----------------------------------------
	牛顿迭代求解非线性方程，比二分法收敛快。
理论:
	1.f(x)在区间[a, b]具有二阶连续导数；
	2.当xE[a, b], f'(x) != 0；
	3.当xE[a, b], f'(x)、f''（x)连续且不变号
    4.选取初值x0E[a,b],使f(x0)*f''(x0) > 0
-----------------------------------------
输入   :
	fn		f(x)函数，定义为等式左侧部分，右侧为0
	fn1		f'(x)函数
	a, b	求解的区间
	c		求解的初值
	maxStep 迭代步数的上限
	tol		误差上限
输出   :
	sol		解值
	solFlag 解值标志
 */
package util

import (
	"math"
)

func NewtonIterate(fn, fn1 func(float64) float64, a, b, c float64, maxStep int, tol float64) (res Result) {
	res.Success = true
	step := 0
	res.Tol = tol
	res.Steps = 0
	if fa := fn(a); math.Abs(fa) < tol {
		res.Sol = a
		return
	} else if fb := fn(b); math.Abs(fb) < tol {
		res.Sol = b
	 	return
	} else if fc := fn(c); math.Abs(fc) < tol {
		res.Sol = c
		return
	}
	currentTol := math.MaxFloat64
	sol := 0.0
	for ; step < maxStep; step++ {
		sol = c - fn(c)/ fn1(c)
		if currentTol = math.Abs(sol - c); currentTol < tol {
			res.Sol = sol
			res.Steps = step
			res.Tol = currentTol
			return
		}
		c = sol
	}
	res.Success = false
	res.Sol = sol
	res.Steps = maxStep
	res.Tol = currentTol
	return
}
