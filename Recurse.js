const sArr = [1,2,3,4,5]

const rSum = function (position, arr){
  if(position == arr.length){
    return 0
  }
  return arr[position] + rSum(position+1, arr)
}

console.log(rSum(0, sArr))

const printCombos = function(finalN, currentString){
  if(currentString.length == finalN){
    console.log(currentString)
    return
  }
  printCombos(finalN, currentString + "0")
  printCombos(finalN, currentString + "1")
}

printCombos(3,"")
