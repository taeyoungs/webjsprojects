# 82 Show Single Meal Page

## log

- event.path.find를 이용하여 meal-info 요소에 존재하는 dataset.id 속성 얻기
- 얻은 id를 통해 fetch single meal recipe
- display fetching data

## tips

- click event에 연결된 함수에서 event.path.find를 사용하면 해당 요소를 클릭할 경우 최상단 요소부터 클릭한 요소까지 차례대로 item에 하나씩 담긴다. 이런 방식을 사용하는 이유는 동적으로 생기는 meal의 요소의 data-id 값을 찾기 위해 click 이벤트를 하나하나 달아주는건 비효율적이기 때문이다. event delegation과 함께 상황에 맞춰서 사용하면 좋을 듯 하다.

```javascript
meals.addEventListener('click', (e) => {
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains('meal-info') && item;
    } else {
      return false;
    }
  });
  if (mealInfo) {
    getSingleMealRecipe(mealInfo.dataset.id);
  }
});
```

## issue

- none

## improving

- [ ] image lazy loading
