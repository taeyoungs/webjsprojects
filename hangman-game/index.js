const word = document.getElementById('word');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const playBtn = document.getElementById('play-button');
const notification = document.getElementById('notification-container');

let randomWord = '';
const correctLetters = ['a', 'c', 'e', 'i'];
const wrongLetters = [];

async function getRandomWord() {
  const result = await fetch('https://random-words-api.vercel.app/word');
  const data = await result.json();
  randomWord = data[0].word.toLowerCase();
  console.log(randomWord);
  displayWord();
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

getRandomWord();
