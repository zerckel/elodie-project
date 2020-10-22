window.addEventListener('scroll', function () {
  if (window.scrollY === 0) {
    document.querySelector('#nav').classList.remove('onScroll')
  } else {
    document.querySelector('#nav').classList.add('onScroll')
  }
})

function setScrollHomepage() {
  setTimeout(function () {
    document.querySelector('#panoramique .scroll').scrollLeft = 448
  }, 500)
}

function setEventOnAll(listElem) {
  listElem.forEach((element) => element.addEventListener("click", fullScreenImg))
}


function fullScreenImg() {
  document.querySelector('#fog .imgMax').src = this.src
  document.querySelector('#fog').style.display = "flex"
  document.querySelector('#fog').addEventListener('click', function () {
    document.querySelector('#fog').style.display = "none"
  })
}

setEventOnAll(document.querySelectorAll('.imgZoom'))
document.querySelector('#homepage') ? setScrollHomepage() : false