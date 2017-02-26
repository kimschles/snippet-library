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


//count the number of duplicate items in an array
function countItems(arr) {
  let counter = {};
  for (var i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]] += 1;
    } else {
      counter[arr[i]] = 1;
    };
  };
  return counter
};
