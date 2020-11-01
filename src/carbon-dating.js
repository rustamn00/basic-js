const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);

  if(typeof sampleActivity != "") return false;

  let a = MODERN_ACTIVITY / num;
  let b = Math.LN2 / HALF_LIFE_PERIOD;
  let ans = Math.ceil(Math.log(a) / b);

  return ans;
};
