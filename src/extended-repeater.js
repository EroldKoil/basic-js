module.exports = function repeater(str, options) {
	let string = '';

	let repeatTimes = options.repeatTimes;  
	let separator = options.separator;
	let addition = options.addition ;
	let additionRepeatTimes = options.additionRepeatTimes;
	let additionSeparator = options.additionSeparator;
 
	 repeatTimes = repeatTimes == undefined?1:repeatTimes;  
	 separator = separator == null && separator != undefined?'null':separator == undefined?'+':separator.toString();    
	 additionRepeatTimes = additionRepeatTimes == undefined?1:additionRepeatTimes;
	 additionSeparator = additionSeparator == undefined?'': additionSeparator == null?'null':additionSeparator.toString();
	 addition = addition == null && options.additionRepeatTimes != undefined?'null': addition == undefined?'':addition.toString();
	
	str = str == null?'null':str.toString();
 
  
   for(let i = 0; i < repeatTimes; i++){
	   string += str;
	    
	   for(let j = 0; j < additionRepeatTimes ; j++){
		   string += addition;
		   if(additionRepeatTimes>1 && j<additionRepeatTimes-1){
			   string += additionSeparator;
		   }
	   }
	  if(repeatTimes>1 && i<repeatTimes-1){
		   string += separator;
	   } 
   }
   return string;
   
   
   
};
  