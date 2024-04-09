class Player {
  constructor(args = {}) {
    this.name = args.name || '';
    this.diceRemaining = args.diceRemaining || 0;
    this.dieSides = args.dieSides || 6;
    this.rolls = [];
    this.latestRoll = '';
    this.bankedScore = 0;
    this.rollsScore = 0;
    this.humanPlayer = args.humanPlayer || false;
  }

  setName(name = '') { this.name = name; }
  getName() { return this.name; }

  setDiceRemaining(d = 8) { this.diceRemaining = d; }
  getDiceRemaining() { return this.diceRemaining; }

  setDieSides(d = 6) { this.dieSides = d; }
  getDieSides() { return this.dieSides; }

  setRolls(rolls = []) { this.rolls = rolls; }
  getRolls() { return this.rolls; }
  addRoll(roll) { this.rolls = [...this.rolls, roll]; }

  setLatestRoll(roll = '') { this.latestRoll = roll; }
  getLatestRoll() { return this.latestRoll; }

  setBankedScore(bankedScore = 0) { this.bankedScore = 0; }
  getBankedScore() { return this.bankedScore; }

  setRollsScore(rollsScore = 0) { this.rollsScore = rollsScore; }
  getRollsScore() { return this.rollsScore; }

  setHumanPlayer(b) { this.humanPlayer = b; }
  isHuman() { return this.humanPlayer; }

  rollDie(d) { return 1 + Math.floor((Math.random() * this.getDieSides())); }
  rollDice(n = 8) { return new Array(n).fill(0).map(this.rollDie).sort().join(''); }
  getTokenValue(n = 0) { return getToken[n] || 0; }

  holdDice(dice) {
    this.addRoll(dice);
    this.setLatestRoll('');
    this.setDiceRemaining( this.getDiceRemaining() - dice.length );
  }
}