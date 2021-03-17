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
