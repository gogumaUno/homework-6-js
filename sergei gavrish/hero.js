var Character = require('./character');

function Hero() {
	Character.apply(this, arguments);
};

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.nameList = ["Technical Whale", "Copper Dolphin", "Blazing Armadillo", "Iron Baboon", "Mad Chicken", "Queen Butterfly", "Ashen Mastiff", "Praying Moose", "Stubborn Buzzard", "Scowling Alligator", "Engineer Bee", "Phantom Chicken", "Rampant Osprey", "Cunning Doberman", "Devil Boss", "Black Jaws", "Black Arts", "Marionette Eel", "Rogue Crow", "Stubborn Hippo", "Punished Eagle", "Bastard Leopard", "Doom Flying", "Running Bull", "Horse Eater", "Rabid Coyote", "Assassin Mastodon", "Praying Leopard", "Charging Kid", "Purple Gazelle", "Platinum Centipede", "Pyro Werewolf", "Frigid Rhino", "Raging Tiger", "Vengeful Barracuda", "Survival Swallow", "Sentinel Wallaby", "Steel Jaws", "Riot Mosquito", "Striker Jackal", "Golden Wasp", "Silent Lion", "Assassin Canine", "Tactical Ox", "Sword Kangaroo", "Snatcher Shark", "Brown Coyote", "Blue Leech", "Resistance Doberman", "Coward Frog", "Metal Chick", "Crimson Butterfly", "Cunning Buzzard", "Biting Parrot", "Raging Pigeon", "Otaku Bison", "Jungle Ninja", "Doom Mongoose", "Alive Horse", "Iron Raptor", "White Ant", "Strange Little", "Crystal Beetle", "Rabid Tasmanian", "Survival Harrier", "Dirty Hippo", "Sinister Slug", "Ultra Wallaby", "Zebra Eater", "Engineer Mantis", "Cold Beetle", "Jungle Tasmanian", "Jungle Flying", "Ghost Swan", "Death Husky", "Evasion Peccay", "Sunny Spider", "Seething Dragon", "Blazing Lion", "Love Ox", "Decoy Cobra", "Smoking Bull", "Killer Tree", "Scowling Python", "Brutal Hippo", "Security Goat", "Cold Slug", "Yellow Ox", "Death Falcon", "Stone Pigeon", "Iron Tiger", "Rumble Salamander", "Hungry Gunner", "Jungle Deer", "Bloody Bison", "Hissing Bee", "Spunky Hornet", "Assassin Leopard", "Ghost Bluebird", "Striker Gator"];

Hero.prototype.baseAttributes = {health: 100, damage: 25};
Hero.prototype.setLife = function(dmg) {
	if ( this.shouldUseSkill() ) {
		this.counter--;   
	} else {
		this.health -= dmg;
	};
};

module.exports = Hero;
