// const count = document.querySelector('.count')
// const minus = document.querySelector('.minus')
// const reset = document.querySelector('.reset')
// const plus = document.querySelector('.plus')

// // method-1
// minus.addEventListener('click', () =>{
//   const countValue = parseInt(count.innerText)
//   count.innerText = countValue -1;
// })

// // method-2
// plus.addEventListener('click', () =>{
//   count.innerText = parseInt(count.innerText) +1
// })

// reset.addEventListener('click', () =>{
//   count.innerText = 0;
// })

// Advanced JS

const countDisplay = document.querySelector('.count');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');
const plus = document.querySelector('.plus');

let currentValue = 0; 

// change font color for negative value 
function updateCounter() {
    countDisplay.innerText = currentValue;

    if (currentValue < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black'; 
    }
}

minus.addEventListener('click', () => {
    currentValue--;
    updateCounter();
});

plus.addEventListener('click', () => {
    currentValue++;
    updateCounter();
});

reset.addEventListener('click', () => {
    currentValue = 0;
    updateCounter();
});

updateCounter();