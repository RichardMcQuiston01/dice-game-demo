class Game {
  constructor( args = {} ) {
    this.dieSides = args.dieSides || 6;
    this.players = args.players || [];
    this.currentPlayer = -1;
    this.messages = args.messages || {};
    this.tokens = {};
  }

  setDieSides( n = 6 ) {
    this.dieSides = n;
  }

  getDieSides() {
    return this.dieSides;
  }

  setPlayers( players = [] ) {
    this.players = players;
  }

  getPlayers() {
    return this.players;
  }

  getPlayer( n ) {
    return this.players[n] || false;
  }

  getPlayersCount() {
    return this.getPlayers().length || 0;
  }

  addPlayer( player ) {
    this.players = [ ...this.players, player ];
  }

  setCurrentPlayer( index ) {
    this.currentPlayer = index;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  setMessages( messages ) {
    this.messages = messages;
  }

  getMessages() {
    return this.messages;
  }

  getMessage( key ) {
    return this.messages[key] || '';
  }

  getMessageFormatted( key, values ) {
    let messageString = this.getMessage( key );
    Object.keys( values ).forEach( ( key ) => {
      messageString = messageString.replace( key, values[key] );
    } );
    return messageString;
  }

  setTokens( tokens ) {
    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  getToken( n = 0 ) {
    return this.tokens[n] || '';
  }

  getTokenValue( n = 0 ) {
    return this.getToken[n] || 0;
  }

  pMessage( t, v ) {
    postMessage( { type: t, value: v } );
  }

  gMessage( v ) {
    this.pMessage( 'GAME_MESSAGE', v );
  }

  determineFirstPlayer() {
    this.gMessage( this.getMessage( 'INITAL_PLAYER' ) );

    let nPlayers = this.getPlayersCount();
    if( nPlayers === 1 ) {
      this.setCurrentPlayer( 0 );
      const name = this.getPlayer( 0 ).getName();
      this.gMessage( this.getMessageFormatted( 'PLAYER_TURN', { '%s': name } ) );
      return 0;
    } else if( nPlayers > 1 ) {
      const players = this.getPlayers();
      let playerRolls = new Array( nPlayers );
      for( let i = 0; i < nPlayers; i++ ) {
        let p = players[i];
        playerRolls[i] = p.rollDie();
      }
    }
    return -1;
  }

  nextPlayer() {
    let currentPlayer = this.getCurrentPlayer();
    let nextPlayer = currentPlayer + 1;
    let nPlayers = this.getPlayersCount();

    if( nPlayers > 1 && nextPlayer <= nPlayers ) {
      this.setCurrentPlayer( nextPlayer );
    }
    this.setCurrentPlayer( 0 );
  }

  scoreRoll( roll = '' ) {
    let score = 0;
    const tokens = this.getTokens();

    let i = 0;
    while( roll.length > 0 && i < tokens.length ) {
      tokens.forEach( ( token ) => {
        if( roll.includes( token ) ) {
          score += this.getTokenValue( token );
          roll = roll.replace( token, '' );
        }
      } );
      i++;
    }

    return score;
  }

  notification( dest, str ) {
    if( $( dest ) !== undefined ) {
      $( dest ).val( $( dest ).val() + str + "\n\n" );
    } else {
      console.log( str );
    }
  }

  dieSidesValid() {
    const valid = [ 4, 6, 8, 10, 12, 20 ];
    return valid.includes( this.getDieSides() );
  }

  newGame( players = [] ) {
    this.gMessage( this.getMessage( 'GAME_STARTED' ) );

    this.setDieSides();
    this.setPlayers( players );

    if( this.getPlayersCount() === 0 ) {
      this.gMessage( this.getMessage( 'GAME_ERROR_NO_PLAYERS' ) );
      return -1;
    }

    if( !this.dieSidesValid() ) {
      this.gMessage( this.getMessage( 'GAME_ERROR_INVALID_DICE' ) );
      return -1;
    }

    if( this.getTokens() === {} ) {
      this.gMessage( this.getMessage( 'GAME_ERROR_SCORING_RULES' ) );
      return -1;
    }

    return 1;
  }
}