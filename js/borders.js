let allCorners = document.querySelector('#all-corners');
let topLeft = document.querySelector('#top-left');
let topRight = document.querySelector('#top-right');
let bottomLeft = document.querySelector('#bottom-left');
let bottomRight = document.querySelector('#bottom-right');
let block = document.querySelector('#block-border');
let out = document.querySelector('.out');
let btnCopy = document.querySelector('.copy');
let codeCopied = document.querySelector('.codeCopied');

allCorners.oninput = allCornersRadius;
topLeft.oninput = topLeftRadius;
topRight.oninput = topRightRadius;
bottomLeft.oninput = bottomLeftRadius;
bottomRight.oninput = bottomRightRadius;

function allCornersRadius() {
    block.style.borderRadius = `${allCorners.value}px`
    out.innerHTML = `border-radius: ${allCorners.value}px;
                    -webkit-border-radius: ${allCorners.value}px;`
}


function topLeftRadius() {
    block.style.borderTopLeftRadius = `${topLeft.value}px`
    showOnScreen(topLeft.value, topRight.value, bottomRight.value, bottomLeft.value)
}

function topRightRadius() {
    block.style.borderTopRightRadius = `${topRight.value}px`
    showOnScreen(topLeft.value, topRight.value, bottomRight.value, bottomLeft.value)
}

function bottomLeftRadius() {
    block.style.borderBottomLeftRadius = `${bottomLeft.value}px`
    showOnScreen(topLeft.value, topRight.value, bottomRight.value, bottomLeft.value)
}

function bottomRightRadius() {
    block.style.borderBottomRightRadius = `${bottomRight.value}px`
    showOnScreen(topLeft.value, topRight.value, bottomRight.value, bottomLeft.value)
}
btnCopy.addEventListener('click', () => {
    let text = out.innerHTML;
    window.navigator.clipboard.writeText(text);
    codeCopied.style.display = 'block'
    setTimeout(() => {
        codeCopied.style.display = 'none'
    }, 2000);
})


function showOnScreen(borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius) {
    out.innerHTML = `border-radius: ${borderTopLeftRadius}px, ${borderTopRightRadius}px, ${borderBottomRightRadius}px, ${borderBottomLeftRadius}px;
        -webkit-border-radius: ${borderTopLeftRadius}px, ${borderTopRightRadius}px, ${borderBottomRightRadius}px, ${borderBottomLeftRadius}px;`
}

