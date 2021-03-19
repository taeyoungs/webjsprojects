import Calendar from './calendar.js';

const balance = document.getElementById('balance');
const plus = document.getElementById('money-plus');
const minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const filter = document.getElementById('filter');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const year = document.getElementById('year');
const month = document.getElementById('month');
const calendarBtn = document.getElementById('calendar-btn');
const calender = new Calendar();

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const dummy = [
  { id: uuidv4(), type: '도서', amount: 2000, date: new Date('2020-04-20') },
  { id: uuidv4(), type: '과자', amount: -1000, date: new Date('2021-01-11') },
  { id: uuidv4(), type: '용돈', amount: 5000, date: new Date('2019-08-30') },
  { id: uuidv4(), type: '로또', amount: -500, date: new Date('2021-02-08') },
  { id: uuidv4(), type: '공책', amount: -1200, date: new Date('2018-10-22') },
];

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions = localStorageTransactions || dummy;
// transactions = transactions.sort(
//   (a, b) =>
//     +(new Date(a.date) > new Date(b.date)) ||
//     +(new Date(a.date) > new Date(b.date)) - 1
// );
// transactions = [...transactions, ...dummy];

function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function removeTransaction(id) {
  transactions = transactions.filter((item) => item.id !== id);

  saveTransactions();

  init();
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount > 0 ? '+' : '-';

  const item = document.createElement('li');

  if (transaction.amount > 0) {
    item.classList.add('plus');
  } else {
    item.classList.add('minus');
  }

  const date = new Date(transaction.date);
  const formatDate = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()}`;

  item.innerHTML = `
    ${formatDate} / ${transaction.type}
    <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn">삭제</button>
    `;
  const btn = item.querySelector('.delete-btn');
  btn.addEventListener('click', () => removeTransaction(transaction.id));

  list.prepend(item);
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

filter.addEventListener('change', (e) => {
  const type = e.target.value;
  if (type === 'lowest') {
    transactions = transactions.sort(
      (a, b) => Math.abs(b.amount) - Math.abs(a.amount)
    );
  } else if (type === 'highest') {
    transactions = transactions.sort(
      (a, b) => Math.abs(a.amount) - Math.abs(b.amount)
    );
  } else if (type === 'recently') {
    transactions = transactions.sort(
      (a, b) =>
        +(new Date(a.date) > new Date(b.date)) ||
        +(new Date(a.date) > new Date(b.date)) - 1
    );
  } else {
    transactions = transactions.sort(
      (a, b) =>
        +(new Date(b.date) > new Date(a.date)) ||
        +(new Date(b.date) > new Date(a.date)) - 1
    );
  }
  init();
});

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
    date: new Date(),
  };

  transactions.push(item);

  addTransactionDOM(item);

  updateValue();

  saveTransactions();

  text.value = '';
  amount.value = '';
});

prevBtn.addEventListener('click', () => {
  let y = +year.innerText;
  let m = +month.innerText;
  if (m === 1) {
    m = 12;
    month.innerText = 12;
    year.innerText = y - 1;
    y -= 1;
  } else {
    month.innerText = m - 1;
    m -= 1;
  }
  calender.setState(y, m);
});

nextBtn.addEventListener('click', () => {
  let y = +year.innerText;
  let m = +month.innerText;
  if (m === 12) {
    m = 1;
    month.innerText = 1;
    year.innerText = y + 1;
    y += 1;
  } else {
    month.innerText = m + 1;
    m += 1;
  }
  calender.setState(y, m);
});

calendarBtn.addEventListener('click', () => {
  const container = document.querySelector('.calendar-container');

  if (!container.classList.contains('show')) {
    container.classList.add('show');
    transactions = transactions.filter((value) => {
      const date = new Date(value.date);
      if (
        date.getMonth() + 1 === calender.month &&
        date.getFullYear() === calender.year
      ) {
        return value;
      }
    });
  } else {
    container.classList.remove('show');
    transactions = localStorageTransactions || [];
  }

  init();
});

init();
