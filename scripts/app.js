function init() {
  const openBurgerIcon = document.querySelector('.open-icon')
  const closeBurgerIcon = document.querySelector('.close-icon')
  const overlayContainer = document.querySelector('#mobile-nav')
//   const header = document.querySelector('header')
//   console.log(header)

  function openNav() {
    openBurgerIcon.style.display = 'none'
    overlayContainer.style.display = 'flex'
  }

  function closeNav() {
    overlayContainer.style.display = 'none'
    openBurgerIcon.style.display = 'block'
    // header.classList.toggle('responsive')
  }

  openBurgerIcon.addEventListener('click', openNav)
  closeBurgerIcon.addEventListener('click', closeNav)
}
window.addEventListener('DOMContentLoaded', init)
