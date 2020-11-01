const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (String(str) == 'null') str = 'null';
  if (String(options.addition) == 'null') options.addition = 'null';
  if (options.separator == null) options.separator = '+';
  if (options.additionSeparator == null) options.additionSeparator = '|';
  if (options.addition == undefined) options.addition = '';
  
  let result = `${str}${options.addition}`;
  
  for (i = 1; i < options.repeatTimes; i++) {
    for (j = 1; j < options.additionRepeatTimes; j++) {
      result = `${result}${options.additionSeparator}${options.addition}`
    }
    result = `${result}${options.separator}${str}${options.addition}`;
  }
  
  for (j = 1; j < options.additionRepeatTimes; j++) {
    result = `${result}${options.additionSeparator}${options.addition}`
  }

  return result;
};
  