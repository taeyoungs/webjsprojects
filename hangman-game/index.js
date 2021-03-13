const word = document.getElementById('word');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const playBtn = document.getElementById('play-button');
const notification = document.getElementById('notification-container');

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

function updateKeyboard() {
  console.log('updateKeyboard');
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
    finalMessage.style.display = 'flex';
  }
}

window.addEventListener('keydown', (e) => {
  if (e.key.charCodeAt() >= 97 && e.key.charCodeAt() <= 122) {
    if (randomWord.includes(e.key)) {
      if (!correctLetters.includes(e.key)) {
        correctLetters.push(e.key);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(e.key)) {
        wrongLetters.push(e.key);
        updateKeyboard();
      } else {
        showNotification();
      }
    }
  }
});

getRandomWord();
