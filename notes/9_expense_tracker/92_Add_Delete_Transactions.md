# 92 Add Delete Transactions

## log

- item 추가, 삭제를 위해서 dummy data의 id 값들을 uuid를 이용하여 고유한 id 값으로 변경
- filter 함수를 이용하여 삭제 버튼에서 전달되는 id 값과 일치하는 item을 제외 후 다시 display

## tips

- javascript로 uuidv4 생성하는 방법

```javascript
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
```

## issue

- none

## improving
