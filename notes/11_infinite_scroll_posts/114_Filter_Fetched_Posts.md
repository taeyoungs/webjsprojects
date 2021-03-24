# 114 Filter Fetched Posts

## log

- indexOf와 input value를 이용하여 filtering posts

```javascript
if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
  post.style.display = 'flex';
} else {
  post.style.display = 'none';
}
```

## tips

## issue

- none

## improving
