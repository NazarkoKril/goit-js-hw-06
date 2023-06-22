const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


nameInput.addEventListener('input', updateNameOutput);

function updateNameOutput(event) {
  nameOutput.textContent = event.target.value || 'Anonymous';
}
