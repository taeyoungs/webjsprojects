# 50 Add HTML and CSS

## log

- add html & css

## tips

## issue

- none

## improving

# 51 Generate Random User

## log

- randomuser.me API를 이용해서 무작위 사용자 정보 가져오기
- 생성된 사용자 정보를 이용해서 name, wealth를 가진 newUser obj 생성

## tips

- .then 함수 대신 async/await를 이용해서 더 명확하고 깔끔한 fetch 함수 작성하기

```javascript
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  console.log(data);
}
```

## issue

- none

## improving

# 52 Output Users

## log

- forEach 배열 내장 함수 이용해서 사용자 추가 후 DOM 업데이트

## tips

## issue

- none

## improving

# 53 Other Button Functions

## log

- Add Double money, Sort by richest, Show Millionaires and Calculate wealth function
- Using sort, map, filter, reduce

## tips

## issue

- none

## improving
