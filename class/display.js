export class Display {
  constructor() {
    this.peopleQty = document.getElementById('peopleQty');
    this.resetButton = document.getElementById('resetButton');
    this.billAmount = document.getElementById('billAmount');
    this.customTip = document.getElementById('customTip');
    this.peopleLegend = document.getElementById('peopleLegend');
    this.tipAmount = document.getElementById('tipAmount');
    this.totalAmount = document.getElementById('totalAmount');
    this.tipButtons = [...document.getElementsByClassName('tipSelector')];
    this.errorMessage = document.createElement('div');
    this.createErrorMessage();
  }

  createErrorMessage() {
    this.errorMessage.innerText = "Can't be zero";
    this.errorMessage.classList.add('errorZeroPeople');
  }

  updateTips(idButton) {
    this.tipButtons.forEach((button) => {
      this.updateClasses(button, 'notClickedTip', 'clickedTip');
    });

    if (idButton) {
      this.updateClasses(
        document.getElementById(idButton),
        'clickedTip',
        'notClickedTip'
      );
    }
  }

  generateError() {
    this.peopleLegend.appendChild(this.errorMessage);
    this.updateClasses(this.peopleQty, 'inputError', 'inputNoError');
  }

  deleteError() {
    if (this.peopleLegend.contains(this.errorMessage)) {
      this.peopleLegend.removeChild(this.errorMessage);
      this.updateClasses(this.peopleQty, 'inputNoError', 'inputError');
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
