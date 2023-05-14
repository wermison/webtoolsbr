// CALCULO 01
let n1Calc1 = document.querySelector('#calc-1--value1');
let n2Calc1 = document.querySelector('#calc-1--value2');
let resultCalc1 = document.querySelector('#calc-1--result');
let btnCalc1 = document.querySelector('#calc-1--btn');
let groupN1Calc1 = document.querySelector('#group-n1-calc1');
let spanN1Calc1 = document.querySelector('#span-n1-calc1');

btnCalc1.addEventListener('click', () => {
    let n1 = n1Calc1.value;
    let n2 = n2Calc1.value;
    let result = (Number(n1) * Number(n2)) / 100

    if (n1 === "" || n2 === "" || n1 == 0 || n2 == 0) {
        validN1Calc1()
        validN2Calc1()
    } else {
        resultCalc1.innerHTML = `<p class="alert alert-primary text-center" id="calc-1--result">${n1}% de ${n2} é: <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 2 })}</b></p>`;
    }
});

function validN1Calc1() {
    if (n1Calc1.value == "" || n1Calc1.value == 0) {
        groupN1Calc1.style.border = '1px solid #f00';
        spanN1Calc1.style.color = '#f00'
        resultCalc1.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        groupN1Calc1.style.border = 'none';
        spanN1Calc1.style.color = '#212529'
    }

    if (n1Calc1.value > 0 && n2Calc1.value > 0) {
        resultCalc1.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
};

function validN2Calc1() {
    if (n2Calc1.value == "" || n2Calc1.value == 0) {
        n2Calc1.style.border = '1px solid #f00';
        resultCalc1.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n2Calc1.style.border = '1px solid #ccc';
    }

    if (n1Calc1.value > 0 && n2Calc1.value > 0) {
        resultCalc1.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
}

// CALCULO 02
let n1Calc2 = document.querySelector('#calc-2--value1');
let n2Calc2 = document.querySelector('#calc-2--value2');
let resultCalc2 = document.querySelector('#calc-2--result');
let btnCalc2 = document.querySelector('#calc-2--btn');

btnCalc2.addEventListener('click', () => {
    let n1 = n1Calc2.value;
    let n2 = n2Calc2.value;
    let result = (100 * Number(n1)) / Number(n2)

    if (n1 === "" || n2 === "" || n1 == 0 || n2 == 0) {
        validN1Calc2()
        validN2Calc2()
    } else {
        resultCalc2.innerHTML = `<p class="alert alert-primary text-center" id="calc-1--result">${n1} é <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 2 })}%</b> de ${n2}</p>`;
    }
});

function validN1Calc2() {
    if (n1Calc2.value == "" || n1Calc2.value == 0) {
        n1Calc2.style.border = '1px solid #f00';
        resultCalc2.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n1Calc2.style.border = '1px solid #ccc';
    }

    if (n1Calc2.value > 0 && n2Calc2.value > 0) {
        resultCalc2.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
};

function validN2Calc2() {
    if (n2Calc2.value == "" || n2Calc2.value == 0) {
        n2Calc2.style.border = '1px solid #f00';
        resultCalc2.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n2Calc2.style.border = '1px solid #ccc';
    }

    if (n1Calc2.value > 0 && n2Calc2.value > 0) {
        resultCalc2.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
}

// CALCULO 03
let n1Calc3 = document.querySelector('#calc-3--value1');
let n2Calc3 = document.querySelector('#calc-3--value2');
let resultCalc3 = document.querySelector('#calc-3--result');
let btnCalc3 = document.querySelector('#calc-3--btn');

btnCalc3.addEventListener('click', () => {
    let n1 = n1Calc3.value;
    let n2 = n2Calc3.value;
    let result = ((Number(n2) * 100) / Number(n1)) - (100)

    if (n1 === "" || n2 === "" || n1 == 0 || n2 == 0) {
        validN1Calc3()
        validN2Calc3()
    } else {
        resultCalc3.innerHTML = `<p class="alert alert-primary text-center" id="calc-1--result">O valor aumentou <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 2 })}%</b></p>`;
    }
});

function validN1Calc3() {
    if (n1Calc3.value == "" || n1Calc3.value == 0) {
        n1Calc3.style.border = '1px solid #f00';
        resultCalc3.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n1Calc3.style.border = '1px solid #ccc';
    }

    if (n1Calc3.value > 0 && n2Calc3.value > 0) {
        resultCalc3.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
};

function validN2Calc3() {
    if (n2Calc3.value == "" || n2Calc3.value == 0) {
        n2Calc3.style.border = '1px solid #f00';
        resultCalc3.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n2Calc3.style.border = '1px solid #ccc';
    }

    if (n1Calc3.value > 0 && n2Calc3.value > 0) {
        resultCalc3.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
}

// CALCULO 04
let n1Calc4 = document.querySelector('#calc-4--value1');
let n2Calc4 = document.querySelector('#calc-4--value2');
let resultCalc4 = document.querySelector('#calc-4--result');
let btnCalc4 = document.querySelector('#calc-4--btn');

btnCalc4.addEventListener('click', () => {
    let n1 = n1Calc4.value;
    let n2 = n2Calc4.value;
    let result = (100) - ((Number(n2) * 100) / Number(n1))

    if (n1 === "" || n2 === "" || n1 == 0 || n2 == 0) {
        validN1Calc4()
        validN2Calc4()
    } else {
        resultCalc4.innerHTML = `<p class="alert alert-primary text-center" id="calc-1--result">O valor diminuiu <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 2 })}%</b></p>`;
    }
});

function validN1Calc4() {
    if (n1Calc4.value == "" || n1Calc4.value == 0) {
        n1Calc4.style.border = '1px solid #f00';
        resultCalc4.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n1Calc4.style.border = '1px solid #ccc';
    }

    if (n1Calc4.value > 0 && n2Calc4.value > 0) {
        resultCalc4.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
};

function validN2Calc4() {
    if (n2Calc4.value == "" || n2Calc4.value == 0) {
        n2Calc4.style.border = '1px solid #f00';
        resultCalc4.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n2Calc4.style.border = '1px solid #ccc';
    }

    if (n1Calc4.value > 0 && n2Calc4.value > 0) {
        resultCalc4.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
}

// CALCULO 05
let n1Calc5 = document.querySelector('#calc-5--value1');
let n2Calc5 = document.querySelector('#calc-5--value2');
let resultCalc5 = document.querySelector('#calc-5--result');
let btnCalc5 = document.querySelector('#calc-5--btn');

btnCalc5.addEventListener('click', () => {
    let n1 = n1Calc5.value;
    let n2 = n2Calc5.value;
    let result = (Number(n1) * 100) / Number(n2)

    if (n1 === "" || n2 === "" || n1 == 0 || n2 == 0) {
        validN1Calc5()
        validN2Calc5()
    } else {
        resultCalc5.innerHTML = `<p class="alert alert-primary text-center" id="calc-1--result">Equivale a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 2 })}%</b></p>`;
    }
});

function validN1Calc5() {
    if (n1Calc5.value == "" || n1Calc5.value == 0) {
        n1Calc5.style.border = '1px solid #f00';
        resultCalc5.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n1Calc5.style.border = '1px solid #ccc';
    }

    if (n1Calc5.value > 0 && n2Calc5.value > 0) {
        resultCalc5.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
};

function validN2Calc5() {
    if (n2Calc5.value == "" || n2Calc5.value == 0) {
        n2Calc5.style.border = '1px solid #f00';
        resultCalc5.innerHTML = `<p class="alert alert-danger text-center" id="calc-1--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n2Calc5.style.border = '1px solid #ccc';
    }

    if (n1Calc5.value > 0 && n2Calc5.value > 0) {
        resultCalc5.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
}

// CALCULO 06
let n1Calc6 = document.querySelector('#calc-6--value1');
let n2Calc6 = document.querySelector('#calc-6--value2');
let resultCalc6 = document.querySelector('#calc-6--result');
let btnCalc6 = document.querySelector('#calc-6--btn');
let groupN2Calc6 = document.querySelector('#group-n2-calc6');
let spanN2Calc6 = document.querySelector('#span-n2-calc6');

btnCalc6.addEventListener('click', () => {
    let n1 = n1Calc6.value;
    let n2 = n2Calc6.value;
    let result = Number(n1) + ((Number(n2) * Number(n1)) / (100))

    if (n1 === "" || n2 === "" || n1 == 0 || n2 == 0) {
        validN1Calc6()
        validN2Calc6()
    } else {
        resultCalc6.innerHTML = `<p class="alert alert-primary text-center" id="calc-6--result">${n1} + ${n2}% é: <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 2 })}</b></p>`;
    }
});

function validN1Calc6() {
    if (n1Calc6.value == "" || n1Calc6.value == 0) {
        n1Calc6.style.border = '1px solid #f00';
        resultCalc6.innerHTML = `<p class="alert alert-danger text-center" id="calc-6--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n1Calc6.style.border = '1px solid #ccc';
    }
    
    if (n1Calc6.value > 0 && n2Calc6.value > 0) {
        resultCalc6.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
};

function validN2Calc6() {
    if (n2Calc6.value == "" || n2Calc6.value == 0) {
        groupN2Calc6.style.border = '1px solid #f00';
        spanN2Calc6.style.color = '#f00'
        resultCalc6.innerHTML = `<p class="alert alert-danger text-center" id="calc-6--result">Valores inválidos! Tente novamente!</p>`
    } else {
        groupN2Calc6.style.border = 'none';
        spanN2Calc6.style.color = '#212529'
    }

    if (n2Calc6.value > 0 && n1Calc6.value > 0) {
        resultCalc6.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
}

// CALCULO 07
let n1Calc7 = document.querySelector('#calc-7--value1');
let n2Calc7 = document.querySelector('#calc-7--value2');
let resultCalc7 = document.querySelector('#calc-7--result');
let btnCalc7 = document.querySelector('#calc-7--btn');
let groupN2Calc7 = document.querySelector('#group-n2-calc7');
let spanN2Calc7 = document.querySelector('#span-n2-calc7');

btnCalc7.addEventListener('click', () => {
    let n1 = n1Calc7.value;
    let n2 = n2Calc7.value;
    let result = Number(n1) - ((Number(n2) * Number(n1)) / (100))

    if (n1 === "" || n2 === "" || n1 == 0 || n2 == 0) {
        validN1Calc7()
        validN2Calc7()
    } else {
        resultCalc7.innerHTML = `<p class="alert alert-primary text-center" id="calc-7--result">${n1} - ${n2}% é: <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 2 })}</b></p>`;
    }
});

function validN1Calc7() {
    if (n1Calc7.value == "" || n1Calc7.value == 0) {
        n1Calc7.style.border = '1px solid #f00';
        resultCalc7.innerHTML = `<p class="alert alert-danger text-center" id="calc-6--result">Valores inválidos! Tente novamente!</p>`
    } else {
        n1Calc7.style.border = '1px solid #ccc';
    }
    
    if (n1Calc7.value > 0 && n2Calc7.value > 0) {
        resultCalc7.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
};

function validN2Calc7() {
    if (n2Calc7.value == "" || n2Calc7.value == 0) {
        groupN2Calc7.style.border = '1px solid #f00';
        spanN2Calc7.style.color = '#f00'
        resultCalc7.innerHTML = `<p class="alert alert-danger text-center" id="calc-7--result">Valores inválidos! Tente novamente!</p>`
    } else {
        groupN2Calc7.style.border = 'none';
        spanN2Calc7.style.color = '#212529'
    }

    if (n2Calc7.value > 0 && n1Calc7.value > 0) {
        resultCalc7.innerHTML = `<p class="alert alert-light text-center">O resultado aparecerá aqui</p>`
    }
}