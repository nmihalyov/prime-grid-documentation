window.onload = () => {

  @@include('./assets/tabs.js')

  if (location.hash) {
    window.scrollTo(0, document.querySelector(location.hash).getBoundingClientRect().top + document.documentElement.scrollTop);
  }
}