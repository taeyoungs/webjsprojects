# 113 Add Infinite Scrolling

## log

- 페이지 끝에 닿았을 때 posts 추가로 불러오기

## tips

- scrollTop, scrollHeight, clientHeight를 이용하여 페이지 끝에 닿았다는 것을 알 수 있다.

```javascript
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});
```

## issue

- fetch posts가 여러 번 호출되는 문제

이전에 비슷한 상황을 겪어봐서 그런지 의심이 가긴 했었다. 강사는 페이지 끝에 닿았을 때 setTimeout을 중첩하여 loader와 fetch를 컨트롤한다.(여기에선 timeout을 clear하는 부분이 존재하지 않는다) 문제는 window scroll event가 scroll 할 때마다 호출되어 if문을 여러 번 들어가게 된다는 것이다. 강사의 코드엔 여러 번 호출될 때의 대비가 전혀 되어있지 않다. (아마 테스트를 대충 하는 것이 아닐까) 추가 호출은 전역 변수를 이용해서 막았다. 호출되고 있다는 상황이라는 것을 알 수 있게 전역 변수의 true/false 여부에 따라 추가로 호출하도록 조치했다.

```javascript
let isLoading = false;

function showLoading() {
  if (isLoading) return;

  page++;
  isLoading = true;
  loader.classList.add('show');

  setTimeout(() => {
    showPosts();
    loader.classList.remove('show');
    isLoading = false;
  }, 1000);
}
```

## improving
