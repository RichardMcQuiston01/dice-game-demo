class Die {
  dieSides = 6;
  dieValue = 1;

  constructor( sides = 6, value = 1 ) {
    this.dieSides = sides;
    this.dieValue = value;

    return this;
  }

  setDieSides( sides ) {
    this.dieSides = sides;

    return this;
  }

  getDieSides() {
    return this.dieSides;
  }

  setDieValue( value ) {
    this.dieValue = value;

    return this;
  }

  getDieValue() {
    return this.dieValue;
  }

  getUnicodeString() {
    if( this.getDieSides() <= 6 ) {
      switch( this.getDieValue() ) {
        case 2:
          return '&#9857;';
        case 3:
          return '&#9858;';
        case 4:
          return '&#9859;';
        case 5:
          return '&#9860;';
        case 6:
          return '&#9861;';
        default:
          return '&#9856;';
      }
    }
    return '';
  }

  checkSides() {
    const valid = [ 4, 6, 8, 10, 12, 20 ];
    return valid.includes( this.getDieSides() );
  }

  checkValue() {
    return ( this.getDieValue() < 1 || this.getDieValue() > this.getDieSides() );
  }
}