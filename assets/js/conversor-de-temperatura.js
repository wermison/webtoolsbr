let calcBtn = document.querySelector('#calculate-btn');
let temp1 = document.querySelector('#temp-1');
let temp2 = document.querySelector('#temp-2');
let tempValue = document.querySelector('#temp-value');
let areaResult = document.querySelector('#area-result');
let tempResult = document.querySelector('#temp-result');
let result;

calcBtn.addEventListener('click', calculate);

function calculate() {
    if (tempValue.value == '') {
        validateTemp();
    } else {
        // Celsius
        if (temp1.value == "c" && temp2.value == "f") {
            result = ((+tempValue.value * 1.8) + 32);
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}°C</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°F</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°F`;
        };

        if (temp1.value == "c" && temp2.value == "k") {
            result = +tempValue.value + 273.15;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}°C</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}K</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}K`;
        };

        if (temp1.value == "c" && temp2.value == "c") {
            result = +tempValue.value;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}°C</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°C</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°C`;
        };

        // Fahrenheit

        if (temp1.value == "f" && temp2.value == 'c') {
            result = (+tempValue.value - 32) / 1.8;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}°F</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°C</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°C`;
        };

        if (temp1.value == "f" && temp2.value == 'k') {
            result = ((+tempValue.value - 32) / 1.8) + 273.15;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}°F</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}K</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}K`;
        };

        if (temp1.value == "f" && temp2.value == 'f') {
            result = +tempValue.value;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}°F</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°F</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°F`;
        };

        // Kelvin

        if (temp1.value == "k" && temp2.value == 'c') {
            result = +tempValue.value - 273.15;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}K</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°C</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°C`;
        };

        if (temp1.value == "k" && temp2.value == 'f') {
            result = ((+tempValue.value - 273.15) * 1.8) + 32;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}K</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°F</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}°F`;
        };

        if (temp1.value == "k" && temp2.value == 'k') {
            result = +tempValue.value;
            areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result"><b>${tempValue.value}K</b> equivalem a <b>${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}K</b> </p>`
            tempResult.value = `${result.toLocaleString('pt-br', { maximumFractionDigits: 4 })}K`;
        };        

    }
};

function validateTemp() {
    if (tempValue.value == '') {
        tempValue.style.border = "1px solid #F00";
        areaResult.innerHTML = `<p class="alert alert-danger text-center mt-4" id="result">Preencha o campo com o valor da temperatura</p>`
    } else {
        tempValue.style.border = "1px solid #CCC";
        areaResult.innerHTML = `<p class="alert alert-light text-center mt-4" id="result">O resultado aparecerá aqui</p>`
    }
};