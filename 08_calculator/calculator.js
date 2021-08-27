
const add = function(...arr) {
	let numbers =[]
  let result = 0
  arr.forEach((a,i)=> {numbers[i] = a})
  numbers.forEach((a,i) =>{result += numbers[i]; console.log(numbers[i])})
  return result
};

const subtract = function(a,b) {
  let result = a-b
  console.log(result)
  return result  
};

const sum = function(numbers) {
  
  let result = 0
  
  numbers.forEach((a,i) => {result += numbers[i]}) 
  console.log(numbers)
  return result
};

const multiply = function(numbers) {
   let result = 1
   numbers.forEach((a,i) => {result  *= a})
   return result
};

const power = function(a,b) {
  let result = a**b
  return result
};

const factorial = function(x) {
	result = 1
  if(x>0){
    for(let i=0; i<x; i++){
      result *= (x-i) 
      console.log(x-i)
    }return result
  }else if(x==0){
    return result
  }else{
    return false
  }
};
console.log(factorial(0))
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
