import { Calculation } from './calculation.js';

const calculation = new Calculation();

export const inputs = {};
export const pageElements = {};

export function generateError() {
  const errorElement = document.createElement('div');
  errorElement.innerText = "Can't be zero";
  pageElements.peopleLegend.appendChild(errorElement);
  calculation.error = true;
}

export function deleteError() {
  //   peopleLegend.removeChild(inputs.errorMessage);
  calculation.error = false;
}

function selectTips(id) {
  console.log('selectTip');
  document.getElementById('tip' + id).classList.add('tipClicked');

  if (inputs.tip[0] != '') {
    unclickChangeDesign(inputs.tip[0]);
  }

  inputs.tip = ['tip' + id, id];

  if (inputs.people === 0) {
    calculation.generateError();
  }
  console.log(inputs);
  updateResult();
}

// export const pageElements = {
//   peopleQty: document.getElementById('peopleQty'),
//   // resetButton: document.getElementById('resetButton'),
//   billAmount: document.getElementById('billAmount'),
//   customTip: document.getElementById('customTip'),
//   peopleLegend: document.getElementById('peopleLegend'),
//   // tipAmount: document.getElementById('tipAmount'),
//   // totalAmount: document.getElementById('totalAmount'),
//   // styleLegend: window.getComputedStyle(peopleLegend),
// };

window.document.addEventListener('DOMContentLoaded', function () {
  // DECLARATION DES CONSTANTES:
  // const pageElements = {
  pageElements.peopleQty = document.getElementById('peopleQty');
  // resetButton: document.getElementById('resetButton'),
  pageElements.billAmount = document.getElementById('billAmount');
  pageElements.customTip = document.getElementById('customTip');
  pageElements.peopleLegend = document.getElementById('peopleLegend');
  pageElements.tipAmount = document.getElementById('tipAmount');
  pageElements.totalAmount = document.getElementById('totalAmount');
  // styleLegend: window.getComputedStyle(peopleLegend),
  // };
  initInputs();

  // GESTION DES ENTREES DANS LES INPUTS:
  pageElements.billAmount.addEventListener('input', (e) => {
    calculation.billAmount = e.target.value;
    update();
  });

  pageElements.customTip.addEventListener('input', (e) => {
    calculation.tip = e.target.value;
    // inputs.tip[1] = customTip.value;
    update();
  });

  pageElements.peopleQty.addEventListener('input', (e) => {
    calculation.peopleQty = e.target.value;
    update();
  });

  // GESTION DES CLICS:
  customTip.addEventListener('click', function () {
    // if (inputs.tip[0] != '') {
    //   unclickChangeDesign(inputs.tip[0]);
    // }
    // inputs.tip = ['', 0];
  });

  pageElements.selectTips = selectTips;

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
    calculation.updateResult();
    pageElements.tipAmount.innerText = `$${calculation.tipPerPers}`;
    pageElements.totalAmount.innerText = `$${calculation.totalPerPers}`;
  }

  // function updateResult() {

  function unclickChangeDesign(button) {
    document.getElementById(button).classList.remove('tipClicked');
    document.getElementById(button).classList.add('tipUnClicked');
  }
});
