const button = document.querySelector('.togglebtn');

const defaultIcon = document.querySelector('#sunIcon');


button.addEventListener('click', () => {
    document.body.classList.toggle('swichtheme');
    
    if (defaultIcon.classList.contains('fa-sun')) {
        defaultIcon.classList.remove('fa-sun');
        defaultIcon.classList.add('fa-moon');
    } else{
        defaultIcon.classList.remove('fa-moon');
        defaultIcon.classList.add('fa-sun');
    }

})