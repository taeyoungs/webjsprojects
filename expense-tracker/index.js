const balance = document.getElementById('balance');
const plus = document.getElementById('money-plus');
const minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions = localStorageTransactions || [];

function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount > 0 ? '+' : '-';

  const item = document.createElement('li');

  if (transaction.amount > 0) {
    item.classList.add('plus');
  } else {
    item.classList.add('minus');
  }

  item.innerHTML = `
        ${transaction.type}<span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction('${
          transaction.id
        }')">삭제</button>
    `;

  list.appendChild(item);
}

function updateValue() {
  const amounts = transactions.reduce(
    (acc, current) => acc + current.amount,
    0
  );

  const income = transactions.reduce(
    (acc, current) => (current.amount > 0 ? acc + current.amount : acc),
    0
  );

  const outcome =
    -1 *
    transactions.reduce(
      (acc, current) => (current.amount < 0 ? acc + current.amount : acc),
      0
    );

  balance.innerHTML = `&#8361;${amounts}`;
  plus.innerHTML = `&#8361;${income}`;
  minus.innerHTML = `&#8361;${outcome}`;
}

function removeTransaction(id) {
  transactions = transactions.filter((item) => item.id !== id);

  saveTransactions();

  init();
}

function init() {
  list.innerHTML = '';

  transactions.forEach((item) => addTransactionDOM(item));

  updateValue();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = {
    id: uuidv4(),
    type: text.value,
    amount: +amount.value,
  };

  transactions.push(item);

  addTransactionDOM(item);

  updateValue();

  saveTransactions();

  text.value = '';
  amount.value = '';
});

init();
