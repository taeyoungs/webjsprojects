# 10 Add HTML and CSS

## log

- add html & css

## tips

## issue

- none

## improving

- [ ] dark mode
- [ ] responsive

# 11 Adding Simple Validation

## log

- add form input empty value check
- checking email regex

## tips

```javascript
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
```

## issue

- none

## improving

- [ ] dark mode
- [ ] responsive

# 12 Check Required & Refactor

## log

- refactoring repeated if statements

## tips

- checkRequired 함수를 반복하기 보다는 배열로 받아서 한꺼번에 처리

```javascript
checkRequired([username, email, password, password2]);
```

## issue

- none

## improving

- [ ] dark mode
- [ ] responsive

# 13 Check Length, Email and PasswordsMatch

## log

- check length, email and password match

## tips

## issue

- none

## improving

- [ ] dark mode
- [ ] responsive

# 14 Improving

## log

- add toggle button to control dark mode

## tips

- window.mediaMatch().matches
- document.documentElement.setAttribute

```javascript
if (localStorage.getItem('data-theme') === 'dark') {
  mode.checked = true;
} else if (!window.matchMedia) {
  console.log('window matchMedia does not supported');
} else if (window.matchMedia('(prefers-color-theme: dark)').matches) {
  mode.checked = true;
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
```

## issue

- none

## improving

- [x] dark mode
- [x] responsive
