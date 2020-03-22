module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let turns = 7;

	for(let i = 3; i < disksNumber; i++){
		turns = turns*2 + 1;
	}
	let seconds = turns * 60 * 60 / turnsSpeed;
	return {turns: turns, seconds: seconds};
	
}