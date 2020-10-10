const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');

const body = document.querySelector('body')

const btnLogin = document.querySelector('#login');

btnOpen.addEventListener('click', e => {

  menu.classList.add('open')

})

btnClose.addEventListener('click', e => {

  menu.classList.remove('open')

})

btnLogin.addEventListener('click', e => {

  menu.classList.add('logged')

})