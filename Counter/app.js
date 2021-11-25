
const buttons = document.querySelectorAll(".btn");
const counter = document.getElementById("value");

let number = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        const styles = e.currentTarget.classList;

        if (styles.contains("Increase")) {number++};
        if (styles.contains("Decrease")) {number--};
        if (styles.contains("Reset")) {number = 0};

        if (number === 0) {counter.style.color = '#222'};
        if (number < 0) {counter.style.color = 'red'};
        if (number > 0) {counter.style.color = 'green'};

        counter.textContent = number; 
    });
});
