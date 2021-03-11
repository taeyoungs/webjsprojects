const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const newUser = {
    name: `${data.results[0].name.first} ${data.results[0].name.last}`,
    wealth: Math.floor(Math.random() * 1000000),
  };

  console.log(newUser);
}

getRandomUser();
getRandomUser();
getRandomUser();
