const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const newUser = {
    name: `${data.results[0].name.first} ${data.results[0].name.last}`,
    wealth: Math.floor(Math.random() * 1000000),
  };

  addUser(newUser);
}

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, wealth: user.wealth * 2 };
  });

  updateDOM();
}

function sortByRichest() {
  data = data.sort((a, b) => b.wealth - a.wealth);

  updateDOM();
}

// function showMillionaires
function showMillionaires() {
  data = data.filter((user) => user.wealth > 1000000);

  updateDOM();
}

function calculateWealth() {
  const sum = data.reduce((acc, user) => (acc += user.wealth), 0);

  const wealth = document.createElement('div');
  wealth.classList.add('total');
  wealth.innerHTML = `<h3>재산 합계: <strong>${formatNumber(
    sum
  )}</strong></h3>`;
  const temp = main.querySelector('.total');
  if (temp) {
    main.removeChild(temp);
  }
  main.appendChild(wealth);
}

function addUser(newUser) {
  data.push(newUser);
  updateDOM();
}

function updateDOM(users = data) {
  main.innerHTML = '<h2><strong>사용자</strong>재산</h2>';

  users.forEach((user) => {
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<strong>${user.name}</strong>${formatNumber(user.wealth)}`;

    main.appendChild(div);
  });
}

function formatNumber(number) {
  return `&#8361;${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

getRandomUser();
getRandomUser();
getRandomUser();
