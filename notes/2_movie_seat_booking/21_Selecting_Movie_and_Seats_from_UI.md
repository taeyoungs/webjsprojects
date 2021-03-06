# 21 Selecting Movie & Seats from UI

## log

- toggle 가능한 좌석 배치도
- 영화 option 변경에 따른 좌석 및 포스터 재배치

## tips

- string 형태의 number 값에 '+'를 붙이는 것으로도 parseInt 처럼 사용할 수 있다.

```javascript
const ticketPrice = +movieSelect.value;
```

- event delegation (이벤트 위임 활용), seat 클래스를 가진 element에게 각각 이벤트를 부여하기 보다는 감싸고 있는 상위 요소에서 특정 클래스를 갖고 있는 요소들에게서 올라오는 click 이벤트를 캐치해서 작업을 진행한다.

```javascript
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }
});
```

- element.classList.toggle으로 add, remove 기능을 대체할 수 있다.

```javascript
e.target.classList.toggle('selected');
```

- select 태그의 이벤트에서 option의 value를 제외한 custom 속성값을 얻고 싶을 때 select 태그의 options를 활용하면 된다.

```javascript
const seletedOption = e.target.options[e.target.selectedIndex];
```

## issue

- none

## improving

- [x] poster
- [ ] responsive
- [x] make seats with js
