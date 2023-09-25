import { classes, ids } from '../shared/constants.js';

export class Display {
  constructor() {
    this.peopleQty = document.getElementById(ids.peopleQty);
    this.resetButton = document.getElementById(ids.resetButton);
    this.billAmount = document.getElementById(ids.billAmount);
    this.customTip = document.getElementById(ids.customTip);
    this.peopleLegend = document.getElementById(ids.peopleLegend);
    this.tipAmount = document.getElementById(ids.tipAmount);
    this.totalAmount = document.getElementById(ids.totalAmount);
    this.tipButtons = [...document.getElementsByClassName(classes.tipSelector)];
    this.errorMessage = document.createElement('div');
    this.createErrorMessage();
  }

  createErrorMessage() {
    this.errorMessage.innerText = "Can't be zero";
    this.errorMessage.classList.add(classes.errorZeroPeople);
  }

  updateTips(idButton) {
    this.tipButtons.forEach((button) => {
      this.updateClasses(button, classes.notClickedTip, classes.clickedTip);
    });

    if (idButton) {
      this.updateClasses(
        document.getElementById(idButton),
        classes.clickedTip,
        classes.notClickedTip
      );
    }
  }

  generateError() {
    this.peopleLegend.appendChild(this.errorMessage);
    this.updateClasses(
      this.peopleQty,
      classes.inputError,
      classes.inputNoError
    );
  }

  deleteError() {
    if (this.peopleLegend.contains(this.errorMessage)) {
      this.peopleLegend.removeChild(this.errorMessage);
      this.updateClasses(
        this.peopleQty,
        classes.inputNoError,
        classes.inputError
      );
    }
  }

  updateResult(tip, total) {
    this.tipAmount.innerText = `$${tip}`;
    this.totalAmount.innerText = `$${total}`;
  }

  reset() {
    this.billAmount.value = '';
    this.peopleQty.value = '';
    this.customTip.value = '';
    this.updateTips();
  }

  updateClasses(element, classToAdd, classToRemove) {
    element.classList.add(classToAdd);
    element.classList.remove(classToRemove);
  }
}
