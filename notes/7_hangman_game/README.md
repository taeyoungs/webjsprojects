# 70 Add HTML and CSS

## log

- add html and css

## tips

## issue

- none

## improving

# 71 Display Word Functoion

## log

- get random word using free api
- add display word function and show popup when all words are found

## tips

- Easily get a random word using https://random-words-api.vercel.app/word

## issue

- none

## improving

# 72 Letter Press Event Handler

## log

- window keydown event를 이용해서 입력된 키 값이 correctLetters, wrongLetters 포함된지 확인 후 경우에 따른 함수 호출

## tips

- KeyboardEvent.keyCode deprecated, mdn 문서에 keyCode의 사용을 지양하라고 적혀있다. 아직 지원하는 브라우저가 존재하지만 event.keyCode 대신 event.key를 사용해주자.

## issue

- none

## improving

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
