var Character = require('./character');

function Monster() {
	Character.apply(this, arguments);
};

Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;

Monster.nameList = ["The Lor", "The Zlacoop", "The Jolbactope", "The Rethant", "The Ewbeep", "The Shugovlap", "The Shetin", "The Uphlo", "The Jargape", "The Kaggirk", "The Zin", "The Emant", "The Hattupy", "The Hewbacler", "The Squutikro", "The Stephlork", "The Uctikate", "The Hitodie", "The Bas", "The Tobbizas", "The Soychaznoflap", "The Backiafrap", "The Noffeywel", "The Mal", "The Thidda", "The Nimemmos", "The Phlarmemork", "The Doppimant", "The Tovlepark", "The Feep", "The Xuruidnas", "The Mozel", "The Nax", "The Forraocark", "The Chorpin", "The Cestor", "The Stobor", "The Aseihulark", "The Nebbudid", "The Tosos", "The Epralubbaut", "The Wathiknork", "The Girlirk", "The Chlex", "The Thibbap", "The Puvval", "The Mabbuckel", "The Jicant", "The Auzusriwat", "The Jarel", "The Dion", "The Xawmudlaut", "The Zirpoid", "The Dat", "The Gipernion", "The Chlaver", "The Liddoychner", "The Kybbat", "The Ano", "The Queggilasner", "The Aupeckonate", "The Tarboid", "The Phehurlat", "The Mochneep", "The Halbupoop", "The Vot", "The Fax", "The Icurlomape", "The Ctechat", "The Opat", "The Phroplenot", "The Kuwbasroige", "The Phuvreadaid", "The Phihugon", "The Ehid", "The Tuquan", "The Squekyckornot", "The Rant", "The Arnoaggelape", "The Tlexisark", "The Digront", "The Situozat", "The Srufichlape", "The Phactuglop", "The Uvnaejaccop", "The Jerrat", "The Unaggoshox", "The Squawap", "The Ferbond", "The Tlarbubap", "The Uywax", "The Aisquarid", "The Tore", "The Qual", "The Lichnin", "The Therbant", "The Choid", "The Phlie", "The Jadid", "The Drottel"];

Monster.prototype.baseAttributes = {health: 150, damage: 30};
Monster.prototype.getDamage = function() {
	if ( this.shouldUseSkill() ) {
		this.counter--;
	return this.damage*2;
	};

	return this.damage;
};

module.exports = Monster;
