# 20 Add HTML and CSS

## log

- add html & css

## tips

## issue

- none

## improving

# 31 Add HTML and CSS

## log

- add play, stop, pause function to buttons

## tips

- various video event

```javascript
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
```

## issue

- none

## improving

# 32 Video Progress Bar and Timestamp

## log

- update progrees bar using video timeupdate event
- set current video time when change progress bar value

## tips

## issue

- input range click or change event와 video timeupdate event를 사용할 때 영상을 멈추지 않으면 timeupdate event로 인해서 range change 이벤트가 밀리게 되는 현상이 생긴다.

```javascript
video.addEventListener('timeupdate', updateProgress);

progress.addEventListener('change', setVideoProgress);
```

## improving
