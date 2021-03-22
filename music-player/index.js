const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 2;

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  const btn = playBtn.querySelector('i.fas');
  btn.classList.remove('fa-play');
  btn.classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  const btn = playBtn.querySelector('i.fas');
  btn.classList.remove('fa-pause');
  btn.classList.add('fa-play');

  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');

  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

loadSong(songs[songIndex]);
