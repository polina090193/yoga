let tryForms = document.querySelectorAll('.test-form');

let tryForm3 = document.querySelector('.try-1-form-wrapper');
let tryForm8 = document.querySelector('.try-2-form-wrapper');

tryForm3.addEventListener('submit', sendForm);
tryForm8.addEventListener('submit', sendForm);


function sendForm(){
    this.innerHTML = "<div class='thanks'>Спасибо!</div><p class='connect'>Мы свяжемся с вами в течение 15 минут!</p>";
    this.style.display = 'block';
}

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    var matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }

  window.addEventListener("DOMContentLoaded", function() {
    var input1 = document.querySelector("#online_phone_1");
    var input2 = document.querySelector("#online_phone_2");
    input1.addEventListener("input", mask, false);
    input2.addEventListener("input", mask, false);
  });


let giveReviewButton = document.querySelector('.contacts-give-review'),
    reviewClose = document.querySelector('.give-review-close'),
    contactsWrapper = document.querySelector('.contacts-wrapper'),
    reviewWrapper = document.querySelector('.give-review-wrapper'),
    reviewForm = document.querySelector('.give-review-form'),
    reviewHeader = document.querySelector('.give-review-header');

giveReviewButton.addEventListener('click', () => {
  contactsWrapper.style.display = 'none';
  reviewWrapper.style.display = 'block'
})

reviewClose.addEventListener('click', () => {
  contactsWrapper.style.display = 'block';
  reviewWrapper.style.display = 'none'
})

reviewForm.addEventListener('submit', () => {
  reviewHeader.innerHTML = 'Спасибо!';
  reviewForm.innerHTML = '<p class="connect">Для нас очень важно ваше мнение!</p>';
});