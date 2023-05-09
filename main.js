const loader = (element) => {
  setTimeout(() => element.classList.add('is-active'));

  let loaded = 0;
  window.addEventListener('load', () => loaded = 1);
  
  setTimeout(() => {
    let intervalId = setInterval(() => {
      if(loaded === 1) {
        element.classList.remove('is-active');
        element.classList.add('is-remove');
        clearInterval(intervalId);
      };
    }, 100);
  }, 2600);
};

window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.js-loader');
  if(target) loader(target);
});