const cpf = document.getElementById("cpf");
const digit = document.getElementById('sim');
const btnCopy = document.querySelector('#btn-copy')
const msnCopy = document.querySelector('#cpf-copy')



function gerarCpf() {


    const num1 = aleatorio();
    const num2 = aleatorio();
    const num3 = aleatorio();

    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);


    if (digit.checked) {
        cpf.value = `${num1}.${num2}.${num3}-${dig1}${dig2}`;
    } else {
        cpf.value = `${num1}${num2}${num3}${dig1}${dig2}`;
    }

    btnCopy.style.display = 'block'
    msnCopy.style.display = 'none'
}


function dig(n1, n2, n3, n4) {


    const nums = n1.split("").concat(n2.split(""), n3.split(""));

    if (n4 !== undefined) {
        nums[9] = n4;
    }

    let x = 0;


    for (let i = (n4 !== undefined ? 11 : 10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
    }

    const y = x % 11;

    return y < 2 ? 0 : 11 - y;
}

function aleatorio() {
    const aleat = Math.floor(Math.random() * 999);

    return ("" + aleat).padStart(3, '0');
}


// validarrrrrrrrrrr

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

function valid() {
    btnCopy.style.display = 'block'

    if (validarCPF(cpf.value)) {
        msnCopy.innerHTML = `<p class="alert alert-success text-center">O número de CPF é VÁLIDO</p>`
        msnCopy.style.display = 'block'
    } else {
        msnCopy.innerHTML = `<p class="alert alert-danger text-center">O número de CPF é INVÁLIDO</p>`
        msnCopy.style.display = 'block'
    }

    setTimeout(() => {
        msnCopy.style.display = 'none'
    },5000)
}

const handleCpf = (event) => {
    let input;
    if (digit.checked) {
        input = event.target
        input.value = cpfMask(input.value)
        input.setAttribute('maxlength', "14")
    } else {
        input = event.target
        input.value = input.value.replace(/[^\d]+/g, '')
        input.setAttribute('maxlength', "11")
    }
}

function inputChange() {
    if (!digit.checked) {
        cpf.value = cpf.value.replace(/[^\d]+/g, '');
        cpf.setAttribute('maxlength', "11")
    } else {
        cpf.value = cpfMask(cpf.value);
        cpf.setAttribute('maxlength', "14")
    }
}

const cpfMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return value
}

btnCopy.addEventListener('click', copyPassword);

function copyPassword() {
    msnCopy.innerHTML = `<p class="alert alert-primary text-center">CPF copiado com sucesso</p>`
    const textCopy = document.querySelector('#cpf');
    navigator.clipboard.writeText(textCopy.value);

    msnCopy.style.display = 'block'

    setTimeout(() => {
        msnCopy.style.display = 'none'
    },5000)
}