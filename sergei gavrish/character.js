var random = require('./randomGenerators');

function Character(health, damage){

	this.health = health;
	this.damage = damage;
	this.name = setName(this.constructor.nameList, random.index(this.constructor.nameList));
	this.maxHealth = health;
	this.magicPotion = this.setMagicPotion();

	var counter = 2;  

	function setName(obj, index) {
		return obj[index];
	}

	Object.defineProperty(this, 'counter', {
    get: function(){
		return counter;
	},
	set: function(num){
		counter = num;
	}
	});
};

Character.prototype.getName = function() {
	return this.name;
};

Character.prototype.setLife = function(dmg) {
	this.health -= dmg;
};

Character.prototype.getDamage = function() {
	return this.damage;
};

Character.prototype.attack = function(obj) {
	obj.setLife(this.getDamage());
};

Character.prototype.isAlive = function() {
	return this.health > 0;
};

Character.prototype.getLife = function() {
	return this.health;
};

Character.prototype.shouldUseSkill = function() {
	return (this.health < this.maxHealth/2 && this.counter > 0); 
};

Character.prototype.restoreHealth = function() {
	this.health = this.maxHealth;
};

Character.prototype.setMagicPotion = function() {
	return !!random.number();
};

Character.prototype.checkPotion = function() {
	return this.magicPotion;
};

Character.prototype.checkPotionStatus = function() {
	return this.magicPotionStatus;
};

Character.prototype.useMagicPotion = function(bln) {
	if(bln) {
		delete this.magicPotion;
		console.log(this.getName() + ' used magic potion');
		this.magicPotionStatus = true;
		this.setLife = function() {
			console.log('Aura of invulnerability reflects the damage');
		};
	};
};

Character.prototype.potionIsOver = function() {
	console.log('the potion effect disappeared');

	delete this.magicPotionStatus;
	delete this.setLife;
};

module.exports = Character;
