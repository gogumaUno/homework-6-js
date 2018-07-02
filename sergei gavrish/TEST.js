var Game = require('./game');
var Hero = require('./hero');
var Monster = require('./monster');
var factory = require('./factory');
var random = require('./randomGenerators');

var game = new Game(10);

function startGame() {
	var allowedNamesFromList = game.numberOfFighters * 5;

	game.selectAllowedNames(Hero.nameList, allowedNamesFromList);
	game.selectAllowedNames(Monster.nameList, allowedNamesFromList);
	
	console.log('--------------------');
	console.log(game.allowedNames.length);
	console.log('--------------------');
	

	while(game.getNumberOfFighters() > game.getFighters().length) {
	game.register(factory(factory.options[random.index(factory.options)]));
	};

	console.log(game.getFighters());

	while(game.getFighters().length > 1) {
		game.fight();
	};

	console.log('--------------------');
	console.log('All fights are over');
	game.getChampion();
	console.log('--------------------');
};

startGame();
