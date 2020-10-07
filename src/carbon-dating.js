const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if(typeof sampleActivity != 'string'){
    return false;
  }
  let arr = sampleActivity.split('');
  let havePoint = false;
  for(let i = 0; i<arr.length; i++){
    if(arr[i] == '.'){
      if(havePoint == false){
        havePoint = true;
      }
      else{
        arr.splice(i,1);
      }
    }
  }
  sampleActivity = arr.join('');

  if(isNaN(+ sampleActivity) || +sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0 ){
    return false;
  }
  return Math.floor(HALF_LIFE_PERIOD / 0.693 * Math.log(sampleActivity/MODERN_ACTIVITY) * -1 )+1;

};
