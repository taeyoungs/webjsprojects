// https://api.exchangeratesapi.io/latest?base=

const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');

function calculate() {
  const currencyOneValue = currencyOne.value;
  const currencyTwoValue = currencyTwo.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOneValue}`)
    .then((res) => res.json())
    .then((data) => {
      const currencyRate = data.rates[currencyTwoValue];

      rate.innerHTML = `1 ${currencyOneValue} → ${currencyRate.toFixed(
        7
      )} ${currencyTwoValue}`;
      amountTwo.value = `${(amountOne.value * currencyRate).toFixed(2)}`;
    });
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
