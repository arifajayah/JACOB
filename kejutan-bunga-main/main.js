const videoEl = document.getElementById('song');
const btn = document.getElementById('btn-play')
const wrapper = document.querySelector('.wrapper-opening')

btn.addEventListener('click', () => {
  videoEl.play()
  document.body.classList.remove('container')
  wrapper.style.opacity = 0
})