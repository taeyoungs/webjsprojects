# 11 Adding Simple Validation

## log

- add form input empty value check
- checking email regex

## tips

- 정규식 활용

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
