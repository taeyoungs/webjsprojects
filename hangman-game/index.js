const word = document.getElementById('word');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const playBtn = document.getElementById('play-button');
const notification = document.getElementById('notification-container');
const keys = document.querySelectorAll('.keyboard');
const figureParts = document.querySelectorAll('.figure-part');

let randomWord = '';
const correctLetters = [];
const wrongLetters = [];

async function getRandomWord() {
  const result = await fetch('https://random-words-api.vercel.app/word');
  const data = await result.json();
  randomWord = data[0].word.toLowerCase();
  console.log(randomWord);
  displayWord();
}

function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

function updateWrongState() {
  const errors = wrongLetters.length;

  figureParts.forEach((part, index) => {
    if (errors > index) {
      part.style.display = 'flex';
    } else {
      part.style.display = 'none';
    }
  });

  if (errors === figureParts.length) {
    finalMessage.innerHTML = 'Unfortunately You Lose 😥';
    popup.style.display = 'flex';
  }
}

function updateKeyboard() {
  keys.forEach((key) => {
    if (wrongLetters.includes(key.innerText.toLowerCase())) {
      key.style.backgroundColor = '#f1c40f';
    }
    if (correctLetters.includes(key.innerText.toLowerCase())) {
      key.style.backgroundColor = '#f1c40f';
    }
  });
}

function displayWord() {
  word.innerHTML = randomWord
    .split('')
    .map(
      (w) => `
        <span class="letter">${correctLetters.includes(w) ? w : ''}</span>
    `
    )
    .join('');

  const w = word.innerText.replace(/\n/g, '');
  if (w === randomWord) {
    finalMessage.innerText = 'Congratultations! You Won! 😎🎉';
    popup.style.display = 'flex';
  }
}

window.addEventListener('keydown', (e) => {
  if (e.key.charCodeAt() >= 97 && e.key.charCodeAt() <= 122) {
    if (randomWord.includes(e.key)) {
      if (!correctLetters.includes(e.key)) {
        correctLetters.push(e.key);
        updateKeyboard();
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(e.key)) {
        wrongLetters.push(e.key);
        updateWrongState();
        updateKeyboard();
      } else {
        showNotification();
      }
    }
  }
});

playBtn.addEventListener('click', () => {
  correctLetters.splice(0);
  wrongLetters.splice(0);

  keys.forEach((key) => (key.style.backgroundColor = '#fff'));
  figureParts.forEach((part) => (part.style.display = 'none'));

  getRandomWord();

  popup.style.display = 'none';
});

getRandomWord();
