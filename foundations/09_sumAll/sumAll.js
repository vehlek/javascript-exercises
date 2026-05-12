// check if the arguments are both positive numbers
// if false, return error

// check if argument one is greater than argument two
// if so, swap their values
// start a loop where i is equal to argument one's value
// continue the loop until i is greater than argument two's value
// within the loop, sum i
// return the sum

const sumAll = function(a, b) {
  // I'll keep this here, but as the solution shows, Number.isInteger()
  // renders typeof() redundant
  if (typeof(a) !== "number" || typeof(b) !== "number" ||
      !Number.isInteger(a) || !Number.isInteger(b) ||
      a < 0 || b < 0) {
    return "ERROR";
  }

  if (a > b) {
    [a, b] = [b, a];
  }

  let total = 0;
  for (let i = a; i <= b; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
