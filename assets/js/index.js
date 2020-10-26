const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const closeMenu = document.querySelectorAll('[data-close="menu"]');
const menu = document.querySelector('.menu');

const body = document.querySelector('body')

btnOpen.addEventListener('click', e => {

  menu.classList.add('open')
  body.classList.add('open')


})

btnClose.addEventListener('click', e => {

  menu.classList.remove('open')
  body.classList.remove('open')

})

closeMenu.forEach(el => {
  el.addEventListener('click', e=> {
      menu.classList.remove('open')
      body.classList.remove('open');
  })
})

