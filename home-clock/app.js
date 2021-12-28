const clockDate  = document.querySelector('#clock-date');
const clockTime = document.querySelector('#clock-time');

const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

function setCurrDateTime() {
    let today = new Date();
    clockTime.textContent = today.toLocaleTimeString();
    clockDate.textContent = today.toLocaleDateString('en-US', dateOptions);
}

setInterval(setCurrDateTime, 1000);