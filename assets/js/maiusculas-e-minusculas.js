let input = document.querySelector('#input');
let result = document.querySelector('#result');
let upper = document.querySelector('#upper');
let lower = document.querySelector('#lower');
let firstUpper = document.querySelector('#first-upper');
let btnCopy = document.querySelector('#btn-copy');
let success = document.querySelector('#success-copy');

input.addEventListener('input', converter);
upper.addEventListener('input', converter);
lower.addEventListener('input', converter);
firstUpper.addEventListener('input', converter);
btnCopy.addEventListener('click', copy);

function converter() {
    btnCopy.style.display = 'block';
    success.style.display = 'none'

    if (input.value == "") {
        btnCopy.style.display = 'none'
    }

    if (upper.checked) {
        result.value = input.value.toUpperCase();
    } else if (lower.checked) {
        result.value = input.value.toLowerCase();
    } else if (firstUpper.checked) {
        function toFirstUpper() {
            let lowered = input.value.toLowerCase();
            let words = lowered.split(" ");

            for (i = 0; i < words.length; i++) {
                let word = words[i];
                let firstLetter = word[0];

                if (word.length == 0) {
                    word = "";
                } else if (word.length > 2) {
                    word = firstLetter.toUpperCase() + word.slice(1);
                } else {
                    word = firstLetter + word.slice(1);
                }

                words[i] = word
            }

            return words.join(" ");
        }

        result.value = toFirstUpper(input.value)
    }
}

function copy() {
    let textCopy = result;
    navigator.clipboard.writeText(textCopy.value);

    success.style.display = 'block'
}