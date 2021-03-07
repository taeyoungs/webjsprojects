const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mode = document.getElementById('mode');
const toggle = document.getElementById('toggle');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, '이메일 형식이 올바르지 않습니다.');
  }
}

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.dataset.label}은 필수 항목입니다.`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.dataset.label}은 최소 ${min}글자여야 합니다.`);
  } else if (input.value.length > max) {
    showError(input, `${input.dataset.label}은 최대 ${min}글자여야 합니다.`);
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, '비밀번호가 일치하지 않습니다.');
  } else {
    showSuccess(input2);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  if (password.value.length > 0) {
    checkPasswordsMatch(password, password2);
  }
});

if (localStorage.getItem('data-theme') === 'dark') {
  mode.checked = true;
} else if (!window.matchMedia) {
  console.log('window matchMedia does not supported');
} else if (window.matchMedia('(prefers-color-theme: dark)').matches) {
  mode.checked = true;
}

if (mode.checked) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

mode.addEventListener('click', (e) => {
  e.target.checked = e.target.checked ? true : false;
  if (e.target.checked) {
    localStorage.setItem('data-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    localStorage.setItem('data-theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  }
});
