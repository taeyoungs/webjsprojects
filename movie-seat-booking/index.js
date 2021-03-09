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

let selectedMovie = movie1;
let ticketPrice = movie.value;

// 티켓 가격 업데이트
function updateTicketPrice() {
  ticketPrice = +movie.value;
  const selectedSeats = seatContainer.querySelectorAll('.row .seat.selected');
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
  const m = +seletedOption.dataset.movie;
  if (m === 1) {
    selectedMovie = movie1;
  } else if (m === 2) {
    selectedMovie = movie2;
  } else if (m === 3) {
    selectedMovie = movie3;
  } else {
    selectedMovie = movie4;
  }
  setSeats();
});

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }
  updateTicketPrice();
});

setSeats();
