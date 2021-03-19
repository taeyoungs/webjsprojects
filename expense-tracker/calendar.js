const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];
const notLeapMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

class Calendar {
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  days = [];

  constructor() {
    this.days = this.year % 4 === 0 ? leapMonths : notLeapMonths;

    this.render();
  }

  setState(year, month) {
    this.year = year;
    this.month = month;
    this.days = this.year % 4 === 0 ? leapMonths : notLeapMonths;
    this.render();
  }

  render() {
    const calendar = document.getElementById('calendar');
    const daysContainer = document.getElementById('days-container');
    daysContainer.innerHTML = '';

    dayOfTheWeek.forEach((day) => {
      const el = document.createElement('div');
      el.className = 'day-of-the-week';
      el.innerText = day;
      daysContainer.appendChild(el);
    });

    let prevLastDay = 0;
    if (this.month - 1 === 0) {
      prevLastDay = new Date(
        `${this.year - 1}-12-${this.days[this.days.length - 1]}`
      ).getDay();
    } else {
      prevLastDay = new Date(
        `${this.year}-${this.month - 1}-${this.days[this.month - 2]}`
      ).getDay();
    }

    if (prevLastDay !== 6) {
      for (let i = 1; i <= prevLastDay + 1; i++) {
        const el = document.createElement('div');
        el.className = 'day';
        el.innerText = '';
        daysContainer.appendChild(el);
      }
    }

    for (let i = 1; i <= this.days[this.month - 1]; i++) {
      const el = document.createElement('div');
      el.className = 'day';
      el.innerText = i;
      daysContainer.appendChild(el);
    }
    calendar.appendChild(daysContainer);
  }
}

export default Calendar;
