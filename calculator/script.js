const display = document.getElementById("display");
const buttons = document.querySelectorAll(".input");
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const deleteInput = document.querySelector('.delete');

deleteInput.addEventListener('click', ()=> {
    display.textContent = display.textContent.slice(0, -1);
})

clear.addEventListener('click', ()=> {
    display.textContent = "";
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
});

equal.addEventListener('click', ()=>{
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'error'
    }
})
