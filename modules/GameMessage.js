class GameMessage {
  constructor() {
    this.messages = {};
    this.loadMessages();
  }

  setMessages(messages) { this.messages = messages; }
  getMessages() { return this.messages; }

  loadMessages() {
    this.messages = {
      GAME_ERROR_NO_PLAYERS: 'No Players Available',
      GAME_ERROR_INITIAL_PLAYER: 'Unable to Determine First Player',
      GAME_ERROR_SCORING_RULES: 'Scoring Rules Not Loaded',
      GAME_ERROR_INVALID_DICE: 'Valid Die Sides Are 4, 6, 8, 10, 12, or 20.',
      GAME_STARTED: 'Game Started',
      PLAYER_ROLL: 'Player %s Rolled %s worth %p points',
      PLAYER_TURN: "Player %s, It's Your Turn.",
      NO_DICE: 'No Dice Remaining to Roll.',
      INITAL_PLAYER: 'Determining First Player...',
    };
  }
}