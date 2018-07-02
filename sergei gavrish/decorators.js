var Hero = require('./hero');
var Monster = require('./monster');

function Thief(health, damage) {
	classHealthGain = 1.15;
	classDamageGain = 1.25; 
	Hero.call(this, health * classHealthGain , damage * classDamageGain);
	this.class = 'Thief';
	this.counter = 3;
}

Thief.prototype = Object.create(Hero.prototype);

function Warrior(health, damage) {
	classHealthGain = 1.25;
	classDamageGain = 1.5; 
	Hero.call(this, health * classHealthGain , damage * classDamageGain);
	this.class = 'Warrior';
}

Warrior.prototype = Object.create(Hero.prototype);

function Mage(health, damage) {
	classHealthGain = 1.20;
	classDamageGain = 1; 
	Hero.call(this, health * classHealthGain , damage * classDamageGain);
	this.class = 'Mage';
}

Mage.prototype = Object.create(Hero.prototype);

function Goblin(health, damage) {
	classHealthGain = 1.15;
	classDamageGain = 1.25; 
	Hero.call(this, health * classHealthGain , damage * classDamageGain);
	this.class = 'Goblin';
}

Goblin.prototype = Object.create(Monster.prototype);

function Orcs(health, damage) {
	classHealthGain = 1.25;
	classDamageGain = 1.5; 
	Hero.call(this, health * classHealthGain , damage * classDamageGain);
	this.class = 'Crowd of Orcs';
}

Orcs.prototype = Object.create(Monster.prototype);

function Vampire(health, damage) {
	classHealthGain = 1.20;
	classDamageGain = 1; 
	Hero.call(this, health * classHealthGain , damage * classDamageGain);
	this.class = 'Vampire';
}

Vampire.prototype = Object.create(Monster.prototype);

module.exports.heroClasses = {
	Thief: Thief,
	Warrior: Warrior,
	Mage: Mage
};

module.exports.monsterClasses = {
	Goblin: Goblin,
	Orcs: Orcs,
	Vampire: Vampire
};
