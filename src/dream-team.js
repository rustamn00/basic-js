const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members == null) return false;
  let a = [];

  for(let i = 0; i<members.length; i++){
    if(typeof members[i] != 'string'){}
    else{
      let word = members[i].toUpperCase().replace(/\s+/g, '');
      a.push(word[0]);
    }
  } 
  a.sort();
  return a.join('');

};
