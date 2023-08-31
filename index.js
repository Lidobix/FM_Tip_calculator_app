import { Calculation } from './calculation.js';

const calculation = new Calculation();

export const inputs = {};
export const pageElements = {};

function errorMessage() {
  const errorElement = document.createElement('div');
  errorElement.innerText = "Can't be zero";
  return errorElement;
}

// export function generateError() {
//   // const errorElement = document.createElement('div');
//   // errorElement.innerText = "Can't be zero";
//   peopleLegend.appendChild(errorMessage());
//   calculation.error = true;
// }

// export function deleteError() {
//   peopleLegend.removeChild(errorMessage());
//   calculation.error = false;
// }

// export function showError(isError) {
//   isError
//     ? peopleLegend.appendChild(errorMessage())
//     : peopleLegend.removeChild(errorMessage());
// }

window.document.addEventListener('DOMContentLoaded', function () {
  // DECLARATION DES CONSTANTES:

  const peopleQty = document.getElementById('peopleQty');
  // resetButton: document.getElementById('resetButton'),
  const billAmount = document.getElementById('billAmount');
  const customTip = document.getElementById('customTip');
  const peopleLegend = document.getElementById('peopleLegend');
  const tipAmount = document.getElementById('tipAmount');
  const totalAmount = document.getElementById('totalAmount');
  const tipButtons = [...document.getElementsByClassName('tip')];
  // styleLegend: window.getComputedStyle(peopleLegend),

  initInputs();

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
    tipButtons.forEach((button) => {
      button.classList.remove('tipClicked');
      button.classList.add('tipUnClicked');
    });
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
    if (inputs.tip[0] != '') {
      unclickChangeDesign(inputs.tip[0]);
    }
    if (inputs.error) {
      deleteError();
    }
    resetButton.disabled = true;
    initInputs();

    console.log(inputs);
  });

  // DECLARATION DE FONCTIONS UTILITAIRES:
  function initInputs() {
    tipAmount.innerText = `$0.00`;
    totalAmount.innerText = `$0.00`;
  }

  function update() {
    calculation.calculate();
    console.log(peopleLegend);
    console.log(errorMessage());
    calculation.error
      ? peopleLegend.appendChild(errorMessage())
      : peopleLegend.removeChild(errorMessage());

    tipAmount.innerText = `$${calculation.tipPerPers}`;
    totalAmount.innerText = `$${calculation.totalPerPers}`;
  }

  function clickDesign(idButton) {
    tipButtons.forEach((button) => {
      button.classList.remove('tipClicked');
      button.classList.add('tipUnClicked');
    });
    document.getElementById(idButton).classList.add('tipClicked');
  }
});
