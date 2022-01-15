let hShadow = document.querySelector('#h-shadow');
let vShadow = document.querySelector('#v-shadow');
let bRadius = document.querySelector('#b-radius');
let sRadius = document.querySelector('#s-radius');
let shadowCol = document.querySelector('#sh-color');
let block = document.querySelector('#block-boxShadow');
let out = document.querySelector('.out');
let btnCopy = document.querySelector('.copy');
let codeCopied = document.querySelector('.codeCopied');

hShadow.oninput = horizShadow;
vShadow.oninput = verticShadow;
bRadius.oninput = blurRadius;
sRadius.oninput = spreadRadius;
shadowCol.oninput = shadowColor;

function horizShadow() {
    block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    showOnScreen(hShadow.value, vShadow.value, bRadius.value, sRadius.value, shadowCol.value)
}

function verticShadow() {

    block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    showOnScreen(hShadow.value, vShadow.value, bRadius.value, sRadius.value, shadowCol.value)
}

function blurRadius() {

    block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    showOnScreen(hShadow.value, vShadow.value, bRadius.value, sRadius.value, shadowCol.value)
}

function spreadRadius() {
    block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    showOnScreen(hShadow.value, vShadow.value, bRadius.value, sRadius.value, shadowCol.value)
}

function shadowColor() {

    block.style.boxShadow = `${hShadow.value}px ${vShadow.value}px ${bRadius.value}px ${sRadius.value}px ${shadowCol.value}`
    showOnScreen(hShadow.value, vShadow.value, bRadius.value, sRadius.value, shadowCol.value)

}

btnCopy.addEventListener('click', () => {
    let text = out.innerHTML;
    window.navigator.clipboard.writeText(text);
    codeCopied.style.display = 'block'
    setTimeout(() => {
        codeCopied.style.display = 'none'
    }, 2000);
})


function showOnScreen(horizontalShadow, verticalShadow, borderRadius, spreadRadius, shadowColor) {
    out.innerHTML = `-webkit-box-shadow:  ${horizontalShadow}px ${verticalShadow}px ${borderRadius}px  ${spreadRadius}px ${shadowColor}; 
    box-shadow: ${horizontalShadow}px ${verticalShadow}px ${borderRadius}px  ${spreadRadius}px ${shadowColor};`
}