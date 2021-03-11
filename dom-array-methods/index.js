const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

const data = [];

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const newUser = {
    name: `${data.results[0].name.first} ${data.results[0].name.last}`,
    wealth: Math.floor(Math.random() * 10000000),
  };

  addUser(newUser);
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

getRandomUser();
getRandomUser();
getRandomUser();
