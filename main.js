const loader = (element) => {
  const fixScroll = () => {
    const target = document.querySelector('body');
    const scrollPos = window.scrollY;
    target.style.position = 'fixed';
    target.style.top = `-${scrollPos}px`;
    target.style.left = '0';
  };
  
  const cancelFixScroll = () => {
    const target = document.querySelector('body');
    const fixedPos = Number(target.style.top.replace(/px|-/g, ''));
    target.style.position = 'static';
    window.scrollTo(0, fixedPos);
  };

  setTimeout(() => {
    fixScroll();
    element.classList.add('is-active');
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      element.classList.remove('is-active');
      element.classList.add('is-remove');
      cancelFixScroll();
    }, 3000);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.js-loader');
  if(target) loader(target);
});