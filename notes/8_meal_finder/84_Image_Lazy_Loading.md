# 84 Image Lazy Loading

## log

- viewport에 바로 노출되는 레시피들과 viewport 바로 밑에 위치한 레시피들까지는 바로 로딩 그리고 그 외에 추가적으로 이미지가 필요하다면 해당 이미지들은 IntersectionObserver를 통한 lazy loading

```javascript
if ('IntersectionObserver' in window) {
  let lazyImages = document.querySelectorAll('.lazy');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove('lazy');
        imageObserver.unobserve(image);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
}
```

## tips

- IntersectionObserver가 지원되는 브라우저인지 확인이 필요하고 지원하지 않는 브라우저일 경우 element, scroll size를 계산하여 setTimeout을 이용해 동일한 동작을 구현해주어야 한다.

## issue

- none

## improving

- [x] image lazy loading
