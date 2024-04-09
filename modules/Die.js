class Die {
  constructor(sides = 6,value = 1) {
    this.sides = sides;
    this.value = value;
    this.errors = [];
  }

  setSides(sides) { this.sides = sides; }
  getSides() { return this.sides; }
  setValue(value) { this.value = value; }
  getValue() { return this.value; }
  setErrors(errors) { this.errors = errors; }
  addError(error) { this.errors = [...this.errors, error]; }
  getErrors() { return this.errors; }

  getUnicode() {
    if (this.getSides() <= 6 ) {
      switch (this.getValue()) {
        case 1: return '&#9856;'; break;
        case 2: return '&#9857;'; break;
        case 3: return '&#9858;'; break;
        case 4: return '&#9859;'; break;
        case 5: return '&#9860;'; break;
        case 6: return '&#9861;'; break;
        default: return ''; break;
      }
    }
    return '';
  }

  checkSides() {
    const valid = [ 4, 6, 8, 10, 12, 20 ];
    return valid.includes(this.getSides());
  }

  checkValue() { return (this.getValue() < 1 || this.getValue() > this.getSides()); }
}