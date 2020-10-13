document.querySelector('#know-howPage #know-how .right-sect') !== null ? knowHowAnim() : false


window.addEventListener('scroll', function () {
  if (window.scrollY === 0) {
    document.querySelector('#nav').classList.remove('onScroll')
  } else {
    document.querySelector('#nav').classList.add('onScroll')
  }
})
setTimeout(function () {
  document.querySelector('#panoramique .scroll').scrollLeft = 448
}, 500)


function knowHowsAnim() {
  document.querySelector('#know-howPage #know-how .right-sect').addEventListener('mouseenter', function () {
    document.querySelector('#know-howPage #know-how .right-sect .text').style.right = '40%'
  })
  document.querySelector('#know-howPage #know-how .right-sect').addEventListener('mouseleave', function () {
    document.querySelector('#know-howPage #know-how .right-sect .text').style.right = 'unset'
  })
}
