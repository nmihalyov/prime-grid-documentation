Array.from(document.querySelectorAll('.tabs__item')).map(el => {
  el.addEventListener('click', e => {
    const $this = e.currentTarget;
    const tab = $this.dataset.tab;

    $this.parentNode.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
    $this.classList.add('tabs__item--active');

    $this.parentNode.parentNode.querySelector('.tabs__box--active').classList.remove('tabs__box--active');
    $this.parentNode.parentNode.querySelector(`.tabs__box[data-tab="${tab}"]`).classList.add('tabs__box--active');
  });
});