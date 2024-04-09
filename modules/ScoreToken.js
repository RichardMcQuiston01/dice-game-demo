class ScoreToken {
  scoringTokens = {};

  constructor( tokens ) {
    this.loadScoringTokens( tokens );

    return this;
  }

  getScoringTokens() {
    return this.scoringTokens;
  }

  getScoringTokenString( n =  '' ) {
    return ( this.scoringTokens[n] !== undefined ) ? this.scoringTokens[n] : '';
  }

  setScoringTokens( tokens = {} ) {
    this.scoringTokens = tokens;

    return this;
  }

  getScoringTokenValue( n = '' ) {
    return ( this.scoringTokens[n] !== undefined ) ? this.scoringTokens[n] : 0;
  }

  loadScoringTokens( tokensJSON ) {
    try {
      const tokens = JSON.parse( tokensJSON );

      for(const key of Object.keys(tokens)) {
        this.scoringTokens[key] = tokens[key];
      }
    } catch( e ) {
      console.error( e.toString() );
    }

    return this;
  }
}