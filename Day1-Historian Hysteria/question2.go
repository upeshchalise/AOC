package main

import (
	"fmt"
	"math"
)

func calculateSecondQuestionSum(left, right []int) int64 {
	secondSum := int64(0)
	for _, value := range left {
		count := 0
		for _, v := range right {
			if v == value {
				count++
			}
		}
		secondSum += int64(math.Abs(float64(value * count)))
	}
	fmt.Println("secondSum", secondSum)
	return secondSum
}
