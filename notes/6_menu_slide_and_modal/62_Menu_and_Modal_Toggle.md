# 62 Menu & Modal Toggle

## log

- classList add, remove, toggle을 이용한 modal, nav 전환

## tips

- 이전에도 사용했듯이 동일한 클래스를 넣거나 지운다면 toggle 함수를 이용하면 편리하다.

```javascript
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);
```

- transform 시켜놓은 nav를 보여주기 위해 body를 trnasform 시키는 것도 하나의 방법이다.

```css
body.show-nav {
  transform: translateX(250px);
  transition: transform 0.5s ease;
}
```

## issue

- none

## improving
