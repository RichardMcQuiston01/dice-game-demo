class GameMessage {

  messages = {};

  constructor() {
    this.loadGameMessagesFromJSON();
  }

  setGameMessages( messages ) {
    this.messages = messages;
  }

  getGameMessages() {
    return this.messages;
  }

  loadGameMessagesFromJSON( stringsJson ) {
    try {
      const parsed = JSON.parse( stringsJson );

      for( const key of Object.keys( parsed ) ) {
        this.messages[key] = parsed[key];
      }
    } catch( e ) {
      console.error( e.toString() );a
    }

    return this.getGameMessages();
  }

}