const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a = 0;
  let b = 0;

  towerOfHanoi(disksNumber);

  function towerOfHanoi (disksNumber) {
    if (disksNumber > 0) {
      towerOfHanoi(disksNumber - 1);
      a = 2 * a + 1;
    }
  }

  b = Math.floor(3600 * a / turnsSpeed);

  var ans = {turns: a, seconds: b};

  return ans;
};
