const menu = document.getElementById('menu');
const nav = document.getElementsByClassName('nav');

console.log(nav);

menu.addEventListener('click', () => {
    console.log('okkkk')
    nav[0].style.display = 'block';
    nav[0].style.position = 'fixed';
    nav[0].style.top = '45px';

})