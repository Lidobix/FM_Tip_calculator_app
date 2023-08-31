export class Calculation {
  constructor() {
    this.tip = 0;
    this.peopleQty = 0;
    this.billAmount = 0;
    this.error = false;
    this.tipPerPers = 0;
    this.totalPerPers = 0;
    this.error = false;
  }
  calculate() {
    if (this.peopleQty == 0) {
      this.error = true;
      this.tipPerPers = 0;
      this.totalPerPers = 0;
    } else {
      this.error = false;
      this.tipPerPers =
        Math.floor(
          ((this.billAmount * this.tip * 0.01) / this.peopleQty) * 100
        ) / 100;

      this.totalPerPers =
        Math.floor(
          ((this.billAmount * (1 + this.tip * 0.01)) / this.peopleQty) * 100
        ) / 100;
    }
  }
}
