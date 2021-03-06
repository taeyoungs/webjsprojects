const postsContainer = document.querySelector('.posts-container');
const loader = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;
let isLoading = false;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}

async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.className = 'post';
    postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
        `;
    postsContainer.appendChild(postEl);
  });
}

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

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener('input', filterPosts);

showPosts();
