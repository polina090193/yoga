let tryForm1 = document.querySelector('.try-1-form-wrapper');
let tryForm2 = document.querySelector('.try-2-form-wrapper');

tryForm1.addEventListener('submit', sendForm);
tryForm2.addEventListener('submit', sendForm);


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

document.querySelector('.contacts-give-review').addEventListener('click', () => {
  document.querySelector('.contacts-wrapper').style.display = 'none';
  document.querySelector('.give-review-wrapper').style.display = 'block'
})

document.querySelector('.give-review-close').addEventListener('click', () => {
  document.querySelector('.contacts-wrapper').style.display = 'block';
  document.querySelector('.give-review-wrapper').style.display = 'none'
})

document.querySelector('.give-review-form').addEventListener('submit', () => {
  document.querySelector('.give-review-header').innerHTML = 'Спасибо!';
  document.querySelector('.give-review-form').innerHTML = '<p class="connect">Для нас очень важно ваше мнение!</p>';
});