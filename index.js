window.document.addEventListener('DOMContentLoaded', function () {
  // DECLARATION DES CONSTANTES:
  const peopleQty = this.getElementById('peopleQty');
  const resetButton = this.getElementById('resetButton');
  const billAmount = this.getElementById('billAmount');
  const customTip = this.getElementById('customTip');
  const peopleLegend = this.getElementById('peopleLegend');
  const tipAmount = this.getElementById('tipAmount');
  const totalAmount = this.getElementById('totalAmount');
  const styleLegend = window.getComputedStyle(peopleLegend);
  const inputs = {};
  console.log(styleLegend);
  initInputs();
  createErrorMessage();

  // GESTION DES ENTREES DANS LES INPUTS:
  billAmount.addEventListener('input', () => {
    inputs.bill = billAmount.value;
    updateResult();
  });

  customTip.addEventListener('input', () => {
    if (peopleQty.value == 0) {
      generateError();
    }
    inputs.tip[1] = customTip.value;
    updateResult();
  });

  peopleQty.addEventListener('input', () => {
    if (peopleQty.value != 0 && inputs.error) {
      deleteError();
    }
    if (peopleQty.value == 0) {
      generateError();
    }
    inputs.people = peopleQty.value;
    updateResult();
  });

  // GESTION DES CLICS:
  customTip.addEventListener('click', function () {
    if (inputs.tip[0] != '') {
      unclickChangeDesign(inputs.tip[0]);
    }

    inputs.tip = ['', 0];
  });

  selectTips = function (id) {
    document.getElementById('tip' + id).classList.add('tipClicked');

    if (inputs.tip[0] != '') {
      unclickChangeDesign(inputs.tip[0]);
    }

    inputs.tip = ['tip' + id, id];

    if (inputs.people === 0) {
      generateError();
    }
    console.log(inputs);
    updateResult();
  };

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
    inputs.tip = ['', 0];
    inputs.people = 0;
    inputs.bill = 0;
    inputs.error = false;
    inputs.tipPerPers = 0;
    inputs.totalPerPers = 0;
    peopleQty.value = '';
    billAmount.value = '';
    customTip.value = '';
    tipAmount.innerText = `$0.00`;
    totalAmount.innerText = `$0.00`;
  }

  function createErrorMessage() {
    const errorElement = document.createElement('div');
    errorElement.innerText = "Can't be zero";
    errorElement.classList.add('errorZeroPeople');
    inputs.errorMessage = errorElement;
  }

  function generateError() {
    peopleLegend.appendChild(inputs.errorMessage);
    inputs.error = true;
  }

  function deleteError() {
    peopleLegend.removeChild(inputs.errorMessage);
    inputs.error = false;
  }

  function updateResult() {
    resetButton.disabled = false;

    if (inputs.people != 0) {
      inputs.tipPerPers =
        Math.floor(
          ((inputs.bill * inputs.tip[1] * 0.01) / inputs.people) * 100
        ) / 100;

      inputs.totalPerPers =
        Math.floor(
          ((inputs.bill * (1 + inputs.tip[1] * 0.01)) / inputs.people) * 100
        ) / 100;
    }

    tipAmount.innerText = `$${inputs.tipPerPers}`;
    totalAmount.innerText = `$${inputs.totalPerPers}`;
  }

  function unclickChangeDesign(button) {
    document.getElementById(button).classList.remove('tipClicked');
    document.getElementById(button).classList.add('tipUnClicked');
  }
});
