const passwordLengthEl = document.querySelector('#password-length');
const numbersEl = document.querySelector('#numbers');
const UpperEl = document.querySelector('#upper');
const LowerEl = document.querySelector('#lower');
const symbolsEl = document.querySelector('#symbols');
const copyArea = document.querySelector('#password-copy');

const btnPassword = document.querySelector('#btn-password');
const btnCopy = document.querySelector('#btn-copy');
const passwordResult = document.querySelector('#password-result');

const numbers = "0123456789";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%&*()_-+=";

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
};

function getUpper() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
};

function getLower() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
};

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

btnPassword.addEventListener('click', generatePassword);

function generatePassword() {
    if (passwordLengthEl.value < 4 || passwordLengthEl.value > 30) {
        validatePasswordLength();
    } else {
        const passwordLength = passwordLengthEl.value;
        let password = "";

        if (numbersEl.checked) {
            password += getNumber();
        };
        if (UpperEl.checked) {
            password += getUpper();
        };
        if (LowerEl.checked) {
            password += getLower();
        };
        if (symbolsEl.checked) {
            password += getSymbols();
        };

        for (let i = password.length; i < passwordLength; i++) {
            const x = generateX();
            password += x;
        };

        passwordResult.textContent = password
        btnCopy.style.display = 'block';
        copyArea.style.display = 'none'
    }
};

function generateX() {
    const xs = [];

    if (numbersEl.checked) {
        xs.push(getNumber());
    };

    if (UpperEl.checked) {
        xs.push(getUpper());
    };

    if (LowerEl.checked) {
        xs.push(getLower());
    };

    if (symbolsEl.checked) {
        xs.push(getSymbols());
    };

    if (xs.length === "") return "";

    return xs[Math.floor(Math.random() * xs.length)];
};

function validatePasswordLength() {
    if (passwordLengthEl.value < 4 || passwordLengthEl.value > 30) {
        passwordResult.textContent = "Tamanho da senha deve ter no mínimo 4 e no máximo 30"
        passwordResult.classList.remove('alert-light');
        passwordResult.classList.add('alert-danger');
    } else {
        passwordResult.textContent = `O valor da área aparecerá aqui`
        passwordResult.classList.remove('alert-danger');
        passwordResult.classList.add('alert-light');
    }
};

btnCopy.addEventListener('click', copyPassword);

function copyPassword() {
    const textCopy = document.querySelector('#password-result');
    navigator.clipboard.writeText(textCopy.textContent);
    
    copyArea.style.display = 'block'
}