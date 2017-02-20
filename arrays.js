//remove an item from an array and return the original array 

function removeWithoutCopy (arr, item) {
  var i;
  var len;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
      i--;
      len--;
    }
  }
  return arr;
}

console.log(removeWithoutCopy([1,2,3,3,4], 3));
