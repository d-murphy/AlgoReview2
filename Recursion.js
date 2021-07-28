const factorial = function(n){
  if(n == 1) return 1
  return n * factorial(n-1)
}

const addParens = function(nToAdd, curr){
  if(curr==0) return "()"
  return addParens(nToAdd, curr-1)
}

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(10))