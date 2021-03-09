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

const seatContainer = document.getElementById('seat-container');

movie1.forEach((seats) => {
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
