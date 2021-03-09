const movie1 = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
];
const movie2 = [
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0],
];
const movie3 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
];
const movie4 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
];

const container = document.querySelector('.container');
const seatContainer = document.getElementById('seat-container');
const poster = document.querySelector('.poster-container .poster');
const moive = document.getElementById('movie');
const price = document.getElementById('price');
const count = document.getElementById('count');

let selectedMovie = localStorage.getItem('selectedMovie')
  ? setMovie(localStorage.getItem('selectedMovie'))
  : movie1;
let ticketPrice = movie.value;
console.log(selectedMovie);

function setMovieData(movieIndex, movieValue, movieSrc) {
  localStorage.setItem('selectedMovie', movieIndex);
  localStorage.setItem('selectedValue', movieValue);
  localStorage.setItem('selectedMoviePoster', movieSrc);
  localStorage.setItem('selectedIndex', JSON.stringify([]));
}

function setMovie(index) {
  if (+index === 0) {
    return movie1;
  } else if (+index === 1) {
    return movie2;
  } else if (+index === 2) {
    return movie3;
  } else {
    return movie4;
  }
}

function setPoster(src) {
  poster.src = 'https://image.tmdb.org/t/p/w500/' + src;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedIndex'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    const seats = document.querySelectorAll('.row .seat:not(.occupied)');
    // console.log(seats);
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovie');
  if (selectedMovieIndex != null) {
    movie.selectedIndex = selectedMovieIndex;
  }

  const selectedMoviePoster = localStorage.getItem('selectedMoviePoster');
  if (selectedMoviePoster !== null) {
    poster.src = 'https://image.tmdb.org/t/p/w500/' + selectedMoviePoster;
  }
}

// 티켓 가격 업데이트
function updateTicketPrice() {
  ticketPrice = +movie.value;
  const selectedSeats = seatContainer.querySelectorAll('.row .seat.selected');
  const seats = document.querySelectorAll('.row .seat:not(.occupied)');

  const selectedSeatsIndex = [...selectedSeats].map((seat) =>
    [...seats].indexOf(seat)
  );
  localStorage.setItem('selectedIndex', JSON.stringify(selectedSeatsIndex));

  count.innerText = selectedSeats.length;
  price.innerText = selectedSeats.length * ticketPrice;
}

// 영화에 따른 좌석 배치
function setSeats() {
  const existedRow = seatContainer.querySelectorAll('.row');
  if (existedRow.length > 0) {
    existedRow.forEach((r) => r.remove());
  }

  selectedMovie.forEach((seats) => {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = seats
      .map(
        (seat) => `
            <div class="seat ${seat === 1 ? 'occupied' : ''}"></div>
        `
      )
      .join('');
    seatContainer.appendChild(row);
  });
}

// 영화가 바뀔 때 포스터와 좌석 배치도 바뀌도록
movie.addEventListener('change', (e) => {
  const seletedOption = e.target.options[e.target.selectedIndex];
  poster.src = 'https://image.tmdb.org/t/p/w500/' + seletedOption.dataset.src;
  console.log(e.target.selectedIndex);
  selectedMovie = setMovie(e.target.selectedIndex);
  setMovieData(
    e.target.selectedIndex,
    e.target.value,
    seletedOption.dataset.src
  );

  setSeats();
  updateTicketPrice();
});

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateTicketPrice();
  }
});

setSeats();
populateUI();
updateTicketPrice();
