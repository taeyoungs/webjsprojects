# 103 Next, Prev Song & Progress

## log

- Add next, prev song button click function
- Update progress bar
- progress bar 클릭 후 audio 재생 시간 이동
- 현재 재생 중인 곡이 끝나고 다음 곡으로 이동하는 이벤트 추가

## tips

- eventListener에 넣은 이벤트 핸들링 함수가 화살표 함수가 아니라면 this를 통해 element 접근이 가능하다.

```javascript
function setProgress(e) {
  const width = this.clientWidth;

  console.log(width); // progressContainer width
}

progressContainer.addEventListener('click', setProgress);
```

- percent 구하기

```javascript
// 총 재생 시간에서 현재 재생되고 있는 위치가 몇 퍼센트인지
const percent = (currentTime / duration) * 100;

//  progress bar에서 클릭한 곳의 비율을 총 재생 시간과 곱하여
// 해당 비율이 총 재생 시간의 어디 쯤인지
audio.currentTime = (offsetX / width) * duration;
```

## issue

- none

## improving

- [ ] audio currentTime 표시
- [ ] playlist
