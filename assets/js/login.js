const btnLogin = document.querySelector('#login');
const menuLogged = document.querySelector('.menu');

btnLogin.addEventListener('click', e => {

  menuLogged.classList.add('logged')

})