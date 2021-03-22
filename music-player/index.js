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

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const percent = (currentTime / duration) * 100;

  progress.style.width = `${percent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const offsetX = e.offsetX;
  const duration = audio.duration;

  // progress width가 audio currentTime에 영향을 받고 있으니
  // currentTime을 변경해주면 자동으로 width도 변경된다.
  audio.currentTime = (offsetX / width) * duration;
}

playBtn.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');

  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);

progressContainer.addEventListener('click', setProgress);

loadSong(songs[songIndex]);
