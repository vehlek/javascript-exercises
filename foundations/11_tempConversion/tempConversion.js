const convertToCelsius = function(fahr) {
  let celcius = ((fahr - 32) * 5/9);
  return Number(celcius.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let fahrenheit = (cel * 9/5 + 32);
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
