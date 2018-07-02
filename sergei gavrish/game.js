var random = require('./randomGenerators');

function Game(number) {
  this.fighters = [];
  this.numberOfFighters = number;
  this.allowedNames = [];
}

Game.prototype.fight = function () {
  var round = this.getFighters().splice(0,2);
  
  for (var i = 0; i < round.length; i++) {
    if(round[i].checkPotion()) {
      if(round.some(function(el) {
        return el.checkPotionStatus();
      })) break;
      round[i].useMagicPotion(random.number());  
    };
  };

  while (round[0].isAlive() && round[1].isAlive()) {
    round[0].attack(round[1]);
    round[1].attack(round[0]);
    console.log(round[1].getName() + ' ' + round[1].getLife());
    console.log(round[0].getName() + ' ' + round[0].getLife());
  };

  for(var i = 0; i < round.length; i++) {
    if(round[i].isAlive()) {
      console.log(round[i].getName() + ' survived the fight!')
      if(round[i].checkPotionStatus()) {
        round[i].potionIsOver();
      };
      round[i].restoreHealth();
      round[i].counter = 2;
      this.register(round[i]);
    };
  };

};

Game.prototype.getChampion = function() {
  if(this.getFighters().length === 1) {
    this.champion = this.getFighters()[0];
    return console.log(this.champion.class + ' ' + this.champion.getName() + ' survived');
  }

  else if(this.getFighters().length === 0) {
    return console.log('All fighters are dead');
  };
};

Game.prototype.register = function (character) {
  if(this.checkName(this.allowedNames, character.getName())) {
    if(!this.checkName(this.fighters, character.getName())) {
      this.fighters.push(character);
    } else{
      console.log(character.getName() + ' is already registered');
    };
  } else {
    console.log('Registration of ' + character.getName() + ' is not allowed');
  };
};

Game.prototype.checkName = function (arr, name) {
  return arr.some(function(el) {
    if(typeof el === 'string') return el.toLowerCase() === name.toLowerCase();
    return el.getName().toLowerCase() === name.toLowerCase();
  });
};

Game.prototype.getNumberOfFighters = function() {
  return this.numberOfFighters;
};

Game.prototype.getFighters = function() {
  return this.fighters;
};

Game.prototype.selectAllowedNames = function (arr, number) {
  for(var i = 0; i < number; i++) {
    var temp = arr[random.index(arr)];
    if(!this.checkName(this.allowedNames, temp)) this.allowedNames.push(temp);
  };
};

module.exports = Game;
