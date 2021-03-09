const video = document.getElementById('video');
const play = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `
        <i class="fas fa-play"></i>
        `;
  } else {
    play.innerHTML = `
        <i class="fas fa-pause"></i>
        `;
  }
}

function updateProgress() {
  return true;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function setVideoProgress() {
  return true;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
