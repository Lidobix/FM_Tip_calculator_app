import { Calculation } from './class/calculation.js';
import { Display } from './class/display.js';

const calculation = new Calculation();
const display = new Display();

export const inputs = {};
export const pageElements = {};

window.document.addEventListener('DOMContentLoaded', function () {
  reset();

  function reset() {
    display.reset();
    calculation.reset();
    update(true);
  }

  display.tipButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      calculation.tip = parseFloat(e.target.value);
      display.updateTips(e.target.id);
      update(false);
    });
  });

  // GESTION DES ENTREES DANS LES INPUTS:
  display.billAmount.addEventListener('input', (e) => {
    calculation.billAmount = e.target.value;
    update(false);
  });

  display.customTip.addEventListener('input', (e) => {
    calculation.tip = e.target.value;

    update(false);
  });

  display.peopleQty.addEventListener('input', (e) => {
    calculation.peopleQty = e.target.value;
    update(false);
  });

  display.customTip.addEventListener('click', function () {
    display.updateTips();
  });

  display.resetButton.addEventListener('click', () => {
    reset();
  });

  // DECLARATION DE FONCTIONS UTILITAIRES:

  function update(isReset) {
    !isReset && calculation.calculate();
    //  ? (resetButton.disabled = true) : (resetButton.disabled = false);
    display.resetButton.disabled = isReset;
    // console.log('calculation.error', calculation.error);
    // console.log('isReset', isReset);
    if (calculation.error && !isReset) {
      // console.log('ici');
      display.generateError();
    } else {
      // console.log('là');
      display.deleteError();
    }

    display.updateResult(calculation.tipPerPers, calculation.totalPerPers);
  }
});
