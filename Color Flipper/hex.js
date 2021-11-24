

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {

    const hexValue = generateHex();
    document.body.style.backgroundColor = hexValue;
    color.textContent = hexValue;

});

function getRandNum(strOrArray) {
    return Math.floor(Math.random() * strOrArray.length);
}

function generateHex() {
    
    const hexOptions = '123456789ABCDEF';
    let hexVal = '#';

    while(hexVal.length < 7) {
        hexVal += hexOptions.charAt(getRandNum(hexOptions));
    }

    return hexVal
}

console.log(hexValue);

