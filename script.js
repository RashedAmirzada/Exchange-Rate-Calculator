const currencyEl_one = document.getElementById("currency-1");
const currencyEl_two = document.getElementById("currency-2");
const amount_1 = document.getElementById("amount-1");
const amount_2 = document.getElementById("amount-2");

const swap = document.getElementById("swap");
const rate1 = document.getElementById("rate");

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];

      rate1.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amount_2.value = (amount_1.value * rate).toFixed(2);
    });
}

currencyEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amount_1.addEventListener("input", calculate);
amount_2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
});
