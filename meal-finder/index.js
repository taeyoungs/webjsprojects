const submit = document.getElementById('submit'),
  resultHeading = document.getElementById('result-heading'),
  meals = document.getElementById('meals'),
  singleMeal = document.getElementById('single-meal'),
  search = document.getElementById('search'),
  random = document.getElementById('random'),
  alertMsg = document.getElementById('alert');

function searchMeals(e) {
  e.preventDefault();

  const term = search.value;

  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        if (data.meals) {
          resultHeading.innerHTML = `<p>총 ${data.meals.length}개의 '${term}' 레시피가 존재합니다. </p>`;
          meals.innerHTML = data.meals
            .map(
              (meal) => `
            <figure class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-id="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                </div>
            </figure>
          `
            )
            .join('');
        } else {
          resultHeading.innerHTML = `<p>검색 결과가 존재하지 않습니다. 😥</p><p>다른 키워드로 검색해주세요.</p>`;
        }
      });
    meals.innerHTML = '';
  } else {
    alertMsg.classList.add('show');
    setTimeout(() => alertMsg.classList.remove('show'), 1500);
  }
}

submit.addEventListener('submit', searchMeals);
