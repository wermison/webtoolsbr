let input = document.querySelector('#input');
let result = document.querySelector('#result');
let btnCopy = document.querySelector('#btn-copy');
let success = document.querySelector('#success-copy');

input.addEventListener('input', converter);
btnCopy.addEventListener('click', copy);

function converter() {
    btnCopy.style.display = 'block';
    success.style.display = 'none'

    function reverse(n) {
        let r = '';
        for (let i = n.length - 1; i >= 0; i--)
            r += n[i];
        return r;
    }

    result.value = reverse(input.value);
}

function copy() {
    let textCopy = result;
    navigator.clipboard.writeText(textCopy.value);

    success.style.display = 'block'
}