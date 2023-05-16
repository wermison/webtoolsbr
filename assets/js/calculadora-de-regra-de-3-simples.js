let number1 = document.querySelector('#n1');
let number2 = document.querySelector('#n2');
let number3 = document.querySelector('#n3');
let x = document.querySelector('#x');
let result = document.querySelector('#result');
let btnCalc = document.querySelector('#btn-calc');

btnCalc.addEventListener('click', calcular);

function calcular() {
    if (number1.value == '' || number2.value == '' || number3.value == '') {
        validNumber1();
        validNumber2();
        validNumber3();
    } else {
        let res = (number2.value * number3.value) / number1.value;

        result.innerHTML = `<p class="alert alert-primary text-center" style="width: 85%;">${number1.value} está para ${number2.value}, assim como ${number3.value} está para <b>${res.toLocaleString('pt-br', { maximumFractionDigits: 2 })}</b> </p>`;

        x.style.backgroundColor = '#3CB371';
        x.value = res.toLocaleString('pt-br', { maximumFractionDigits: 2 });
    }
}

function validNumber1() {
    if (number1.value == '') {
        number1.style.border = '1px solid #F00';
        result.innerHTML = `<p class="alert alert-danger text-center" style="width: 85%;">Os campos com os números devem ser preenchidos</p>`;
    } else {
        number1.style.border = '1px solid #CCC';
    }

    if (number1.value != '' && number2.value != '' && number3.value != '') {        
        result.innerHTML = `<p class="alert alert-light text-center" style="width: 85%;">O resultado aparecerá aqui</p>`;
    }
}

function validNumber2() {
    if (number2.value == '') {
        number2.style.border = '1px solid #F00';
        result.innerHTML = `<p class="alert alert-danger text-center" style="width: 85%;">Os campos com os números devem ser preenchidos</p>`;
    } else {
        number2.style.border = '1px solid #CCC';
    }

    if (number1.value != '' && number2.value != '' && number3.value != '') {        
        result.innerHTML = `<p class="alert alert-light text-center" style="width: 85%;">O resultado aparecerá aqui</p>`;
    }
}

function validNumber3() {
    if (number3.value == '') {
        number3.style.border = '1px solid #F00';
        result.innerHTML = `<p class="alert alert-danger text-center" style="width: 85%;">Os campos com os números devem ser preenchidos</p>`;
    } else {
        number3.style.border = '1px solid #CCC';
    }

    if (number1.value != '' && number2.value != '' && number3.value != '') {        
        result.innerHTML = `<p class="alert alert-light text-center" style="width: 85%;">O resultado aparecerá aqui</p>`;
    }
}