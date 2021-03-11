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
