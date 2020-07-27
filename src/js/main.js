let buttonSubmit = document.querySelector('.submit');
let tryForm = document.querySelector('.test-03-form-wrapper');

buttonSubmit.addEventListener('click', sendForm);

function sendForm(){
    tryForm.innerHTML = "<div class='thanks'>Спасибо!</div><p class='connect'>Мы свяжемся с вами в течение 15 минут!</p>";
    tryForm.style.display = 'block';
}
