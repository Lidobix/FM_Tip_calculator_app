window.document.addEventListener('DOMContentLoaded', function () {
  const peopleQty = this.getElementById('peopleQty');
  const resetButton = this.getElementById('resetButton');
  const billAmount = this.getElementById('billAmount');
  const customTip = this.getElementById('customTip');

  const tip = ['', 0];

  billAmount.addEventListener('input', () => {
    resetButton.disabled = false;
  });

  peopleQty.addEventListener('input', function () {
    resetButton.disabled = false;
  });

  customTip.addEventListener('click', function () {
    if (tip[0] != '') {
      document.getElementById(tip[0]).classList.remove('tipClicked');
      document.getElementById(tip[0]).classList.add('tipUnClicked');
    }
    // customTip.classList.remove('inputUnClicked');
    // customTip.classList.add('inputClicked');
    tip[0] = '';
    tip[1] = '';
    console.log(tip);
  });

  resetButton.addEventListener('click', () => {
    peopleQty.value = 0;
    billAmount.value = 0;
    resetButton.disabled = true;
  });

  selectTips = function (id) {
    if (tip[0] === '') {
      document.getElementById('tip' + id).classList.add('tipClicked');
    } else {
      document.getElementById(tip[0]).classList.remove('tipClicked');
      document.getElementById(tip[0]).classList.add('tipUnClicked');
      document.getElementById('tip' + id).classList.add('tipClicked');
    }
    tip[0] = 'tip' + id;
    tip[1] = id;
    console.log(tip);
  };
});
