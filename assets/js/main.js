window.addEventListener('scroll', function () {
  if (window.scrollY === 0) {
    document.querySelector('#nav').classList.remove('onScroll')
  } else {
    document.querySelector('#nav').classList.add('onScroll')
  }
})
