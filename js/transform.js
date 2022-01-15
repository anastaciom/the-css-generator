let out = document.querySelector('.out');
let block = document.querySelector('#block-transform');
let copy = document.querySelector('.copy');
let inputScale = document.querySelector('#scale');
let inputRotate = document.querySelector('#rotate');
let inputTranslateX = document.querySelector('#translateX');
let inputTranslateY = document.querySelector('#translateY');
let inputSkewX = document.querySelector('#skewX');
let inputSkewY = document.querySelector('#skewY');
let codeCopied = document.querySelector('.codeCopied');


inputScale.oninput = getInputScale;
inputRotate.oninput = getInputRotate;
inputTranslateX.oninput = getInputTranslate;
inputTranslateY.oninput = getInputTranslate;
inputSkewX.oninput = getInputSkew;
inputSkewY.oninput = getInputSkew;


showOnScreen(inputScale.value, inputRotate.value, inputTranslateX.value, inputTranslateY.value, inputSkewX.value, inputSkewY.value)

function getInputScale() {
    block.style=`transform: scale(${inputScale.value}) rotate(${inputRotate.value}deg) translate(${inputTranslateX.value}px, ${inputTranslateY.value}px) skew(${inputSkewX.value}deg, ${inputSkewY.value}deg)`

    showOnScreen(inputScale.value, inputRotate.value, inputTranslateX.value, inputTranslateY.value, inputSkewX.value, inputSkewY.value)

}
function getInputRotate() {
    block.style=`transform: scale(${inputScale.value}) rotate(${inputRotate.value}deg) translate(${inputTranslateX.value}px, ${inputTranslateY.value}px) skew(${inputSkewX.value}deg, ${inputSkewY.value}deg)`
    showOnScreen(inputScale.value, inputRotate.value, inputTranslateX.value, inputTranslateY.value, inputSkewX.value, inputSkewY.value)
}
function getInputTranslate() {
    block.style=`transform: scale(${inputScale.value}) rotate(${inputRotate.value}deg) translate(${inputTranslateX.value}px, ${inputTranslateY.value}px) skew(${inputSkewX.value}deg, ${inputSkewY.value}deg)`
    showOnScreen(inputScale.value, inputRotate.value, inputTranslateX.value, inputTranslateY.value, inputSkewX.value, inputSkewY.value)
}


function getInputSkew() {
    block.style=`transform: scale(${inputScale.value}) rotate(${inputRotate.value}deg) translate(${inputTranslateX.value}px, ${inputTranslateY.value}px) skew(${inputSkewX.value}deg, ${inputSkewY.value}deg)`
    showOnScreen(inputScale.value, inputRotate.value, inputTranslateX.value, inputTranslateY.value, inputSkewX.value, inputSkewY.value)
}



function showOnScreen(scale, rotate, translateX, translateY, skewX, skewY) {
    out.innerHTML = `-webkit-transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg);
    transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg);`
}



copy.addEventListener('click', () => {
    let text = out.innerHTML;
    window.navigator.clipboard.writeText(text);
    codeCopied.style.display = 'block'
    setTimeout(() => {
        codeCopied.style.display = 'none'
    }, 2000);
})
