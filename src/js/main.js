let tryForms = document.querySelectorAll('.test-form');

let tryForm = document.querySelector('.test-03-form-wrapper');

for(tryform in tryForms) {
  tryForm.addEventListener('submit', sendForm);
}

function sendForm(){
    tryForm.innerHTML = "<div class='thanks'>Спасибо!</div><p class='connect'>Мы свяжемся с вами в течение 15 минут!</p>";
    tryForm.style.display = 'block';
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
    var input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
  });