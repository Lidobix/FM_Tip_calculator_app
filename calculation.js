import { pageElements } from './index.js';
import { generateError, deleteError } from './index.js';

export class Calculation {
  constructor() {
    // this.tip = ['', 0];
    this.tip = 0;
    this.peopleQty = 0;
    this.billAmount = 0;
    this.error = false;
    this.tipPerPers = 0;
    this.totalPerPers = 0;
    this.error = false;
  }
  updateResult() {
    // console.log('billAmount', this.billAmount);
    // console.log('tip', this.tip);
    // console.log('peopleQty', this.peopleQty);

    // this.peopleQty === 0 ? generateError() : deleteError();

    if (this.peopleQty == 0) {
      // console.log('0 people');
      generateError();
      this.tipPerPers = 0;
      this.totalPerPers = 0;
    } else {
      deleteError();

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
