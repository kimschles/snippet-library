var object = {
  key1: 1,
  key2: 2,
  key3: 3,
  key4: 4
};

// loop through and object and return the values

function returnValues(obj) {
  let keyArr = Object.keys(obj);
  let values = [];
  for (var i = 0; i < keyArr.length; i++) {
    values.push(obj[keyArr[i]]);
  };
  return values;
};
