

const button = document.querySelector('#change');
const icon = document.querySelector('.bi-brilliance');

button.addEventListener('click', function() {

    let number = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';

    icon.style.color = number;
     

    console.log(number)


})