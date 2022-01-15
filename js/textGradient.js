const firstColor = document.querySelector('#firstColor-textGradient');
const secondColor = document.querySelector('#secondColor-textGradient');
const textPreview = document.querySelector('#textPreview');
const out = document.querySelector('#out-textGradient');
const copy = document.querySelector('.copy');
const codeCopied = document.querySelector('.codeCopied');

createGradient()
firstColor.addEventListener('input', createGradient)
secondColor.addEventListener('input', createGradient)

function createGradient() {
    textPreview.style = `background: ${firstColor.value};
    background: -webkit-linear-gradient(to right,  ${firstColor.value}, ${secondColor.value});
    background:linear-gradient(to right,  ${firstColor.value}, ${secondColor.value});
    -webkit-background-clip: text;
    background-clip: text; 
    color: transparent; `

    out.innerHTML = ` background: ${firstColor.value};
    background: -webkit-linear-gradient(to right, ${firstColor.value}, ${secondColor.value});
    background: linear-gradient(to right, ${firstColor.value}, ${secondColor.value});
    -webkit-background-clip: text;
    background-clip: text; 
    color: transparent;`
}


copy.addEventListener('click', () => {
    let text = out.innerHTML;
    window.navigator.clipboard.writeText(text);
    codeCopied.style.display = 'block'
    setTimeout(() => {
        codeCopied.style.display = 'none'
    }, 2000);
})
