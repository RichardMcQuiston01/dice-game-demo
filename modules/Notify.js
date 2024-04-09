class Notify {

  destinationElementId = '';

  constructor( args = {} ) {
    if( args.destination !== undefined ) {
      this.setDestinationElementId( args.destination );
    } else {
      this.setDestinationElementId( '' );
    }

    return this;
  }

  setDestinationElementId( destination ) {
    this.destinationElementId = destination;

    return this;
  }

  getDestinationElementId() {
    return this.destinationElementId;
  }

  addNotificationToElement( str ) {
    try {
      console.log( typeof str );

      if( str.value !== undefined ) {
        str = str.value;
      }

      const destElement = this.getDestinationElementId();

      if( destElement !== '' ) {
        const element = document.getElementById( destElement );

        if( element !== undefined ) {
          element.value = element.value + str + "\n\n";
        } else {
          console.log( element );
        }

        return true;
      }
    } catch( e ) {
      console.error( e.toString() );
    }

    return false;
  }

}