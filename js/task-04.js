const counterValue = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]'); 
const decrementBtn = document.querySelector('[data-action="decrement"]'); 

let count = 0;

function updateCounterValue() {
  counterValue.textContent = count; 
}

function increment() {
  count += 1; 
  updateCounterValue();
}

function decrement() {
  count -= 1; 
  updateCounterValue();
}

incrementBtn.addEventListener("click", increment); 
decrementBtn.addEventListener("click", decrement); 