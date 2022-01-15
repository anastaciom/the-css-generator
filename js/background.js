let firstColor = document.querySelector('#firstColor');
let secondColor = document.querySelector('#secondColor');
let preview = document.querySelector('#background-generator')
let currentDirection = 'to bottom';
let btnCopy = document.querySelector('.copy');
let out = document.querySelector('.out');
let codeCopied = document.querySelector('.codeCopied');

let outputBackground = out.innerHTML = `background:${firstColor.value};
background: -webkit-linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});
background: linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});`


let colorPreview = preview.style = `background:${firstColor.value};
background: -webkit-linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});
background: linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});`;


function setDirection(value, _this) {

    let directions = document.querySelectorAll('.steeringControls button')
    for (const i of directions) {
        i.classList.remove('active')
    }
    _this.classList.add('active')
    currentDirection = value;
}

function generateCode() {
    out.innerHTML = `background:${firstColor.value};
    background: -webkit-linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});
    background: linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});`

    preview.style = `background:${firstColor.value};
    background: -webkit-linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});
    background: linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value});`
}


btnCopy.addEventListener('click', () => {
    let text = out.innerHTML;
    window.navigator.clipboard.writeText(text);
    codeCopied.style.display = 'block'
    setTimeout(() => {
        codeCopied.style.display = 'none'
    }, 2000);
})