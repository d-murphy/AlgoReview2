let arr = [3,1,5,2,-1,10,13]

const bubbleSort = function(arr){
//  let copy = arr.map(el => el)
  let copy = [...arr]

  for(let i=0; i<copy.length; i++){
    for(let j=0; j<copy.length-i-1; j++){
      if(copy[j] > copy[j+1]){
        let temp = copy[j]
        copy[j] = copy[j+1]
        copy[j+1] = temp
      }
    }
  }
  return copy
}

const selectionSort = function(arr){
  let copy = [...arr]
  for(let i=0; i<copy.length; i++){
    let min = i; 
    for(let j=i+1; j<copy.length; j++){
      if(copy[j] < copy[min]){
        min = j;
      }
    }
    if(min != i){
      let tmp = copy[i]
      copy[i] = copy[min]
      copy[min] = tmp;
    }
  }
  return copy
}

const binSearch = function(arr, target){
  let start = 0;
  let end = arr.length -1;
  while(start <= end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid] == target){
      return mid
    } 
    else if(arr[mid]< target){
      start = mid+1;
    } else {
      end = mid-1;
    }
  }
  return -1
}

const quickSort = function(arr){
  if(arr.length <=1) return arr
  const pivot = arr[arr.length-1]
  const left = [];
  const right = []; 
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const merge = function(arr1,arr2){
  let sorted = []; 
  while(arr1.length && arr2.length){
    if(arr1[0] < arr2[0]){
      sorted.push(arr1.shift())
    } else {
      sorted.push(arr2.shift())
    }
  }
  return sorted.concat(arr1).concat(arr2)
}
const mergeSort = function(arr){
  if(arr.length <=1){
    return arr
  }
  let mid = Math.floor(arr.length /2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  console.log("left", left)
  console.log("right", right)
  console.log("test")
  return merge(left, right)
}

console.log(bubbleSort(arr))
console.log(arr)
console.log(selectionSort(arr))

let searchArr = bubbleSort(arr)
console.log(binSearch(searchArr, 13))
console.log(binSearch(searchArr,14))

console.log(quickSort(arr))
console.log(mergeSort(arr))

