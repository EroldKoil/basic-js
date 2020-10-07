const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCount = 0;
  if(matrix != undefined && matrix.length > 0){
    matrix.forEach(element => {
      if(element != undefined && element.length > 0){
        element.forEach(el => {
          if(el == '^^'){
            catCount ++;
          }
        });
      }
    });
  }
  else{
    return 0;
  }
  return catCount;
};
