# 90 Add HTML and CSS

## log

- 가계부 HTML, CSS 추가

## tips

## issue

- none

## improving

# 91 Show Items and Display Amounts

## log

- 내역을 리스트 안에 집어넣는 addTransactionDOM 함수 작성
- 작성한 함수와 dummy data를 통해 올바르게 동작하는지 확인
- addTransactionDOM 함수가 동작할 때마다 총 금액, 수입, 지출을 업데이트할 함수 작성

## tips

## issue

- none

## improving

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

# 93 Persist to LoaclStroage

## log

- localStorage를 이용한 data persist

## tips

- 같은 동작을 하는 코드는 함수로 분리하여 재사용

```javascript
function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}
```

## issue

- none

## improving

- [ ] filter 버튼 만들기
- [ ] transaction에 date 정보를 추가하여 월별, 주별로 filtering 되도록 만들기
- [ ] 년, 월, 일 선택 버튼 만들기

# 94 Improving

## log

- select 태그를 추가하여 금액 높은 순, 낮은 순, 최근 일자, 오래된 순으로 내역을 정렬 가능하도록 추가
- 달력 표시 버튼과 sidebar 형태의 달력 추가
- 이전 달, 다음 달 선택 버튼 추가
- localStorage에 저장된 데이터가 없다면 dummy 데이터가 들어가게끔 변경

## tips

## issue

- none

## improving

- [x] filter 버튼 만들기
- [x] filter를 이용한 내역 정리
- [x] 달력 추가
- [ ] 달력을 이용하여 해당 월, 일 날짜에 해당하는 내역만 불러오기

# 94 Improving

## log

- 달력에서 월을 변경하거나 일을 클릭할 경우 해당 날짜에 해당하는 내역들만 출력

## tips

## issue

- 달력에서 월별, 일별로 필터링 했을 때 수입/지출이 업데이트 되지 않음

## improving

- [x] filter 버튼 만들기
- [x] filter를 이용한 내역 정리
- [x] 달력 추가
- [x] 달력을 이용하여 해당 월, 일 날짜에 해당하는 내역만 불러오기
