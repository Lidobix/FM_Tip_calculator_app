window.document.addEventListener('DOMContentLoaded', function () {
  const peopleQty = this.getElementById('peopleQty');
  const resetButton = this.getElementById('resetButton');
  const billAmount = this.getElementById('billAmount');
  const customTip = this.getElementById('customTip');
  const peopleLegend = this.getElementById('peopleLegend');
  const tipAmount = this.getElementById('tipAmount');
  const totalAmount = this.getElementById('totalAmount');

  const inputs = {
    bill: 0,
    tip: ['', 0],
    people: 0,
    error: false,
    errorMessage: '',
  };

  (function createErrorMessage() {
    const errorElement = document.createElement('div');
    errorElement.innerText = "Can't be zero";
    errorElement.classList.add('errorZeroPeople');
    inputs.errorMessage = errorElement;
    // console.log(inputs);
  })();

  // billAmount.addEventListener('input', () => {
  //   resetButton.disabled = false;
  // });

  // peopleQty.addEventListener('input', function () {
  //   resetButton.disabled = false;
  // });
  billAmount.addEventListener('input', () => {
    inputs.bill = billAmount.value;
    console.log(inputs);
    updateResult();
  });

  customTip.addEventListener('click', function () {
    if (inputs.tip[0] != '') {
      document.getElementById(inputs.tip[0]).classList.remove('tipClicked');
      document.getElementById(inputs.tip[0]).classList.add('tipUnClicked');
    }
    // customTip.classList.remove('inputUnClicked');
    // customTip.classList.add('inputClicked');
    inputs.tip[0] = '';
    inputs.tip[1] = '';
    console.log(inputs);
  });

  peopleQty.addEventListener('input', () => {
    // console.log(inputs);
    if (peopleQty.value != 0 && inputs.error) {
      deleteError();
      inputs.error = false;
    }
    if (peopleQty.value == 0) {
      generateError();
      inputs.error = true;
    }
    inputs.people = peopleQty.value;
    updateResult();
  });

  resetButton.addEventListener('click', () => {
    peopleQty.value = 0;
    billAmount.value = 0;
    resetButton.disabled = true;
  });

  selectTips = function (id) {
    if (inputs.tip[0] === '') {
      document.getElementById('tip' + id).classList.add('tipClicked');
    } else {
      document.getElementById(inputs.tip[0]).classList.remove('tipClicked');
      document.getElementById(inputs.tip[0]).classList.add('tipUnClicked');
      document.getElementById('tip' + id).classList.add('tipClicked');
    }
    // inputs.tip[0] = 'tip' + id;
    // inputs.tip[1] = id;
    inputs.tip = ['tip' + id, id * 0.01];
    if (inputs.people === 0) {
      generateError();
      inputs.error = true;
    }
    updateResult();
    console.log(inputs);
  };

  function generateError() {
    peopleLegend.appendChild(inputs.errorMessage);
  }

  function deleteError() {
    peopleLegend.removeChild(inputs.errorMessage);
  }

  function updateResult() {
    if (inputs.tip != 0 && inputs.people != 0) {
      tipAmount.innerText =
        '$' +
        Math.floor(((inputs.bill * inputs.tip[1]) / inputs.people) * 100) / 100;

      totalAmount.innerText =
        '$' +
        Math.floor(
          ((inputs.bill * (1 + inputs.tip[1])) / inputs.people) * 100
        ) /
          100;
    }
  }
});
