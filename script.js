const increaseButton = document.querySelector('.btns__btn_increase');
const decreaseButton = document.querySelector('.btns__btn_decrease');
const resetButton = document.querySelector('.btns__btn_reset');

function createCounter() {
  let counter = 0;
  const counterText = document.querySelector('.counter__text');
  
  function render() {
  counterText.textContent = counter;
  }
  
  function increaseCounter(){
    counter = counter + 1;
    render(counter);
  }
  
  function decreaseCounter(){
    counter = counter - 1;
    render(counter);
  }
  
  function resetCounter() {
  counter = 0;
   render(counter);
  }
  
  return {
    increaseCounter,
    decreaseCounter,
    resetCounter
  };
}

const myCounter = createCounter();

increaseButton.addEventListener('click', function () {
  myCounter.increaseCounter();
});

decreaseButton.addEventListener('click', function () {
  myCounter.decreaseCounter();
});

resetButton.addEventListener('click', function () {
 myCounter.resetCounter();
});