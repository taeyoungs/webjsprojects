# 73 Wrong and Play Again

## log

- Add an update function to let the user know which key has been pressed
- Show popup when wrongLetters length and hangmen parts are same

## tips

- splice index를 0부터 끝까지 돌리면 배열 내부를 청소할 수 있다.

```javascript
correctLetters.splice(0);
wrongLetters.splice(0);
```

## issue

- none

## improving

- randomWord 밑에 키보드를 형상화하여 정답을 맞추면서 눌렀던 키들을 알 수 있게 추가

```javascript
function updateKeyboard() {
  keys.forEach((key) => {
    if (wrongLetters.includes(key.innerText.toLowerCase())) {
      key.style.backgroundColor = '#f1c40f';
    }
    if (correctLetters.includes(key.innerText.toLowerCase())) {
      key.style.backgroundColor = '#f1c40f';
    }
  });
}
```
