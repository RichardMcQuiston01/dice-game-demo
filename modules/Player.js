class Player {

  playerName = '';
  diceRemaining = 0;
  dieSides = 6;
  rolls = [];
  latestRoll = '';
  bankedScore = 0;
  rollsScore = 0;
  humanPlayer = false;

  constructor( args = {} ) {
    if( Object.keys( args ).length > 0 ) {
      for( const key of Object.keys( args ) ) {
        if( this[key] !== undefined ) {
          this[key] = args[key];
        }
      }
    }

    return this;
  }

  setPlayerName( name = '' ) {
    this.playerName = name;

    return this;
  }

  getPlayerName() {
    return this.playerName;
  }

  setDiceRemaining( d = 8 ) {
    this.diceRemaining = d;

    return this;
  }

  getDiceRemaining() {
    return this.diceRemaining;
  }

  setDieSides( d = 6 ) {
    this.dieSides = d;

    return this;
  }

  getDieSides() {
    return this.dieSides;
  }

  setRolls( rolls = [] ) {
    this.rolls = rolls;

    return this;
  }

  getRolls() {
    return this.rolls;
  }

  addRoll( roll ) {
    this.rolls = [ ...this.rolls, roll ];
  }

  setLatestRoll( roll = '' ) {
    this.latestRoll = roll;
  }

  getLatestRoll() {
    return this.latestRoll;
  }

  setBankedScore( bankedScore = 0 ) {
    this.bankedScore = bankedScore;

    return this;
  }

  getBankedScore() {
    return this.bankedScore;
  }

  setRollsScore( rollsScore = 0 ) {
    this.rollsScore = rollsScore;

    return this;
  }

  getRollsScore() {
    return this.rollsScore;
  }

  setHumanPlayer( b ) {
    this.humanPlayer = b;

    return this;
  }

  isHumanPlayer() {
    return this.humanPlayer;
  }

  rollDie() {
    return 1 + Math.floor( ( Math.random() * this.getDieSides() ) );
  }

  rollDice() {
    const latestRoll = new Array( this.getDiceRemaining() ).fill( 0 ).map( this.rollDie() ).sort().join( '' );

    this.setLatestRoll( latestRoll );

    return this;
  }

  getTokenValue( n = 0 ) {
    return getToken[n] || 0;
  }

  holdDice( dice ) {
    this.addRoll( dice );
    this.setLatestRoll( '' );
    this.setDiceRemaining( this.getDiceRemaining() - dice.length );

    return this;
  }
}