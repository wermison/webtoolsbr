const date1 = document.querySelector('#date-1');
const date2 = document.querySelector('#date-2');
const calculateBtn = document.querySelector('#calculate-btn');
const areaResult = document.querySelector('#area-result');

calculateBtn.addEventListener('click', calculate);

function calculate() {
    if (date1.value == '' || date2.value == '') {
        validateDate1();
        validateDate2();
    } else {
        const diffMs = new Date(date2.value) - new Date(date1.value);

        const diffDays = diffMs / (1000 * 60 * 60 * 24);

        areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result">A diferença de dias entre ${(new Date(date1.value)).toLocaleDateString('pt-BR', {timeZone: 'UTC'})} e ${(new Date(date2.value)).toLocaleDateString('pt-BR', {timeZone: 'UTC'})} é <b>${diffDays} dia(s).</b> </p>`;
    }
};

function validateDate1() {
    if (date1.value == '') {
        date1.style.border = '1px solid #F00';
        areaResult.innerHTML = `<p class="alert alert-danger text-center mt-4" id="result">Preencha os campos com as duas datas</p>`
    } else {
        date1.style.border = '1px solid #CCC';
        areaResult.innerHTML = `<p class="alert alert-light text-center mt-4" id="result">O resultado aparecerá aqui</p>`
    }
};

function validateDate2() {
    if (date2.value == '') {
        date2.style.border = '1px solid #F00';
        areaResult.innerHTML = `<p class="alert alert-danger text-center mt-4" id="result">Preencha os campos com as duas datas</p>`
    } else {
        date2.style.border = '1px solid #CCC';
        areaResult.innerHTML = `<p class="alert alert-light text-center mt-4" id="result">O resultado aparecerá aqui</p>`
    }
};