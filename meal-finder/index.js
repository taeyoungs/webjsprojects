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
        if (data.meals) {
          resultHeading.innerHTML = `<p>총 ${data.meals.length}개의 '${term}' 레시피가 존재합니다. </p>`;
          meals.innerHTML = data.meals
            .map(
              (meal, index) => `
            <figure class="meal">
                ${
                  index > 15
                    ? `<img class="lazy" data-src="${meal.strMealThumb}" alt="${meal.strMeal}" />`
                    : `<img src="${meal.strMealThumb}" alt="${meal.strMeal}" />`
                }
                <div class="meal-info" data-id="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                </div>
            </figure>
          `
            )
            .join('');

          if ('IntersectionObserver' in window) {
            let lazyImages = document.querySelectorAll('.lazy');

            const imageObserver = new IntersectionObserver(
              (entries, observer) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                  }
                });
              }
            );

            lazyImages.forEach((img) => imageObserver.observe(img));
          }
        } else {
          resultHeading.innerHTML = `<p>검색 결과가 존재하지 않습니다. 😥</p><p>다른 키워드로 검색해주세요.</p>`;
        }
      });
    meals.innerHTML = '';
  } else {
    alertMsg.classList.add('show');
    setTimeout(() => alertMsg.classList.remove('show'), 1500);
  }
  search.value = '';
}

submit.addEventListener('submit', searchMeals);

function addMealToDom(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  singleMeal.style.display = 'block';
  singleMeal.innerHTML = `
      <div class="single-meal-container">
          <div class="close">
              <i class="fas fa-times"></i>
          </div>
          <h1>${meal.strMeal}</h1>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <div class="single-meal-info">
              <p>
              ${meal.strCategory ? `${meal.strCategory} ` : ''}
              ${meal.strCategory && meal.strArea && '/'}
              ${meal.strArea ? `${meal.strArea}` : ''}
              </p>
          </div>
          <div class="single-meal-instructions">
              <p>${meal.strInstructions}</p>
              <h2>재료</h2>
              <ul>
              ${ingredients
                .map(
                  (ign) => `
                  <li>${ign}</li>
              `
                )
                .join('')}
              </ul>
          </div>
      </div>
    `;
  document.body.style.overflowY = 'hidden';
}

function getRandomMealRecipe() {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];

      addMealToDom(meal);
    });
}

function getSingleMealRecipe(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];

      addMealToDom(meal);
    });
}

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

singleMeal.addEventListener('click', (e) => {
  if (e.target.classList) {
    if (e.target.classList.contains('fa-times')) {
      singleMeal.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  }
  if (e.target === e.currentTarget) {
    singleMeal.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }
});

random.addEventListener('click', getRandomMealRecipe);
