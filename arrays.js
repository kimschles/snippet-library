//remove an item from an array and return the original array

function removeWithoutCopy (arr, item) {
  let i;
  let len;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
      i--;
      len--;q
    }
  }
  return arr;
}


//count the number of duplicate items in an array
function countItems(arr) {
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]] += 1;
    } else {
      counter[arr[i]] = 1;
    };
  };
  return counter
};

//Flatten a multidimensional array
//From: http://www.jstips.co/en/javascript/flattening-multidimensional-arrays-in-javascript/
let newArr = [].concat(...oldArrays);

// Find and replace multiple items in an array
function findAndReplace (arr, item1, item2) {
  let newArray = [];
  let index = arr.indexOf(item1);
  while (index != -1) {
    newArray.push(index)
    index = arr.indexOf(item1, index + 1)
  }
  for (var i = 0; i < newArray.length; i++){
    arr[newArray[i]] = item2
  }
  return arr
};
