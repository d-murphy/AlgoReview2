let arr = [50,2,5,1,0,-4,100,85]
arr = arr.sort((a,b)=> a-b)
console.log(arr)


const binSearch = function (arr, x){
  let start = 0, end = arr.length-1;
  while (start<=end){
        let mid=Math.floor((start + end)/2);
        console.log("mid", mid)
        if (arr[mid]===x) return true;
        else if (arr[mid] < x) 
             start = mid + 1;
        else
             end = mid - 1;
  }
  return false;
}

console.log("true search ", binSearch(arr, 5))
console.log("false search ", binSearch(arr, 99))

