const binSearch = function (arr, x){
  let start = 0; 
  let end = arr.length -1;
  while(start <= end){
    let mid = Math.floor((start + end)/2)
    console.log(start, end, mid)
    if(arr[mid]==x) return mid
    else if(arr[mid]<x){
      start = mid+1; 
    } else {
      end = mid-1;
    }
  }
  return -1
}


let arr = [0,2,3,6,7,9,22,25];
console.log(binSearch(arr, 3))
