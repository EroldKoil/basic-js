module.exports = function createDreamTeam(members) {
	let name = [];
	
	if( !Array.isArray(members)){
		return false;
	}
	
	members.forEach(function(element){
		if(typeof(element)=='string'){
			element = element.replace(/ /g, '').split('').join('');
			name.push(element[0].toUpperCase());
		}
	});
	
	for(let i = 0; i < name.length - 1; i++){
		let min = i;
		for(let j = i+1; j < name.length; j++){
			if(name[j] < name[min]){
				min = j;
			}
		}
		if(min != i){
			let other = name[i];
			name[i] = name[min];
			name[min] = other;
		}
	}
	
	return name.join('');
};