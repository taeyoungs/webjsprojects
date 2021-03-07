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
