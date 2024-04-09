class ScoreToken {
  constructor() {
    this.tokens = {};
    this.loadTokens();
  }

  getTokens() { return this.tokens; }
  getToken(n = 0) { return this.tokens[n] || ''; }
  setTokens(tokens = {}) { this.tokens = tokens; }
  getTokenValue(n = 0) { return getToken[n] || 0; }

  loadTokens() {
    this.tokens = {
      '66666': 700,
      '44444': 500,
      '33333': 400,
      '22222': 200,
      '6666': 650,
      '4444': 450,
      '3333': 350,
      '2222': 250,
      '666': 600,
      '555': 500,
      '444': 400,
      '333': 300,
      '222': 200,
      '111': 1000,
      '1': 100,
      '5': 50,
      '2': 0,
      '3': 0,
      '4': 0,
      '6': 0,
    };
  }
}