function randomIndex(arr) {
	return Math.floor(Math.random()*(arr.length));	
};

function randomNumber() {
	return Math.round(Math.random());
};

module.exports = {
	index: randomIndex,
	number: randomNumber
};
