# 14 Improving

## log

- add toggle button to control dark mode

## tips

- window.mediaMatch().matches
- document.documentElement.setAttribute

```javascript
if (localStorage.getItem('data-theme') === 'dark') {
  mode.checked = true;
} else if (!window.matchMedia) {
  console.log('window matchMedia does not supported');
} else if (window.matchMedia('(prefers-color-theme: dark)').matches) {
  mode.checked = true;
}

mode.addEventListener('click', (e) => {
  e.target.checked = e.target.checked ? true : false;
  if (e.target.checked) {
    localStorage.setItem('data-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    localStorage.setItem('data-theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  }
});
```

## issue

- none

## improving

- [x] dark mode
- [x] responsive
