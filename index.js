window.document.addEventListener('DOMContentLoaded', function () {
  const peopleQty = this.getElementById('peopleQty');
  const resetButton = this.getElementById('resetButton');
  const billAmount = this.getElementById('billAmount');
  let tipClicked = '';

  billAmount.addEventListener('input', () => {
    resetButton.disabled = false;
  });

  peopleQty.addEventListener('input', function () {
    resetButton.disabled = false;
  });

  resetButton.addEventListener('click', () => {
    peopleQty.value = 0;
    billAmount.value = 0;
    resetButton.disabled = true;
  });

  selectTips = function (tip) {
    if (tipClicked != '') {
      document.getElementById(tipClicked).classList.remove('tipClicked');
      document.getElementById(tipClicked).classList.add('tipUnClicked');
    } else {
      document.getElementById('tip' + tip).classList.add('tipClicked');
    }
    tipClicked = 'tip' + tip;
  };
});
