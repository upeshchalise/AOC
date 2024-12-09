// import { left, right } from "./soln";
const { left, right } = require("./soln");
function calculateSumOfRepeatedLeftHandNumbers(leftCol, rightCol) {
  let sum = 0;
  for (num of leftCol) {
    let count = 0;
    for (let i = 0; i < rightCol.length; i++) {
      if (rightCol[i] === num) {
        count++;
      }
    }
    sum += num * count;
  }
  return sum;
}

console.log(calculateSumOfRepeatedLeftHandNumbers(left, right));
