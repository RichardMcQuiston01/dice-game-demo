class Notify {
  constructor(args = {}) {
    this.destination = args.destination || '';
  }

  setDestination(destination) { this.destination = destination; }
  getDestination() { return this.destination; }

  notify(str) {
    if (str.value !== undefined) { str = str.value; }
    const d = this.getDestination();
    const el = document.getElementById(d);
    if (el !== undefined) {
      el.value = el.value + str + "\n\n";
    } else {
      console.log(el);
    }
  }
}