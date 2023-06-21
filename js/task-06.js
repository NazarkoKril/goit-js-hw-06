const input = document.querySelector('#validation-input');
const requiredLength = parseInt(input.getAttribute('data-length'));

function handleBlur() {
  if (input.value.length === requiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

input.addEventListener('blur', handleBlur);
