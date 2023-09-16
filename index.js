import { Calculation } from './calculation.js';

const calculation = new Calculation();

export const inputs = {};
export const pageElements = {};

const errorElement = document.createElement('div');
errorElement.innerText = "Can't be zero";
errorElement.classList.add('errorZeroPeople');

window.document.addEventListener('DOMContentLoaded', function () {
  // DECLARATION DES CONSTANTES:

  const peopleQty = document.getElementById('peopleQty');
  const resetButton = document.getElementById('resetButton');
  const billAmount = document.getElementById('billAmount');
  const customTip = document.getElementById('customTip');
  const peopleLegend = document.getElementById('peopleLegend');
  const tipAmount = document.getElementById('tipAmount');
  const totalAmount = document.getElementById('totalAmount');
  const tipButtons = [...document.getElementsByClassName('tip')];
  reset();
  // styleLegend: window.getComputedStyle(peopleLegend),

  // (function reset() {
  //   tipAmount.innerText = calculation.reset().initTip;
  //   totalAmount.innerText = calculation.reset().initTotal;
  // })();
  function reset() {
    billAmount.value = '';
    peopleQty.value = '';
    customTip.value = '';

    calculation.reset();

    clickDesign();
    update(true);
  }

  // GESTION DES ENTREES DANS LES INPUTS:
  billAmount.addEventListener('input', (e) => {
    calculation.billAmount = e.target.value;
    update();
  });

  customTip.addEventListener('input', (e) => {
    calculation.tip = e.target.value;
    update();
  });

  peopleQty.addEventListener('input', (e) => {
    calculation.peopleQty = e.target.value;
    update();
  });

  // GESTION DES CLICS:
  customTip.addEventListener('click', function () {
    clickDesign();
  });

  // [...tipButtons].forEach((button) => {
  tipButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      calculation.tip = parseFloat(e.target.value);
      clickDesign(e.target.id);
      update();
    });
  });

  resetButton.addEventListener('click', () => {
    reset();
  });

  // DECLARATION DE FONCTIONS UTILITAIRES:

  function update(isReset) {
    !isReset && calculation.calculate();
    //  ? (resetButton.disabled = true) : (resetButton.disabled = false);
    resetButton.disabled = isReset;

    if (calculation.error && !isReset) {
      peopleLegend.appendChild(errorElement);
      peopleQty.classList.add('errorZeroPeopleInput');
    } else {
      if (peopleLegend.contains(errorElement)) {
        peopleLegend.removeChild(errorElement);
        peopleQty.classList.remove('errorZeroPeopleInput');
      }
    }

    tipAmount.innerText = `$${calculation.tipPerPers}`;
    totalAmount.innerText = `$${calculation.totalPerPers}`;
  }

  function clickDesign(idButton) {
    tipButtons.forEach((button) => {
      button.classList.remove('clickedTip');
      button.classList.add('notClickedTip');
    });

    if (idButton) {
      document.getElementById(idButton).classList.remove('notClickedTip');
      document.getElementById(idButton).classList.add('clickedTip');
    }
  }
});
