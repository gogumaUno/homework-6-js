var classes = require('./decorators');
var heroClass = classes.heroClasses;
var monsterClass = classes.monsterClasses;
var Hero = require('./hero');
var Monster = require('./monster');

function characterFactory(cls) {
	return new cls(cls.prototype.baseAttributes.health, cls.prototype.baseAttributes.damage);
};

characterFactory.options = [heroClass.Thief, heroClass.Warrior, heroClass.Mage, monsterClass.Goblin, monsterClass.Orcs, monsterClass.Vampire];

module.exports = characterFactory;
