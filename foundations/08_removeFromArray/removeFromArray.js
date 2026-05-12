const removeFromArray = function(arr) {
  let newArr = arr.slice();

  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === arguments[i]) {
        newArr.splice(j, 1);
        j--;
      }
    }
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
