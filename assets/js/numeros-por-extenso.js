let number = document.querySelector('#number-value');
let btn = document.querySelector('#calculate-btn')
let areaResult = document.querySelector('#area-result');
let numeral = document.querySelector('#numeral');
let monetario = document.querySelector('#monetario');
let firstCapital = document.querySelector('#first-capital');
let uppercase = document.querySelector('#uppercase');
let lowercase = document.querySelector('#lowercase');
let btnCopy = document.querySelector('#btn-copy');
let copyArea = document.querySelector('#copy');

String.prototype.extenso = function (c) { // Função para converter número no formato string para número por extenso.
    var ex = [
        ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"],
        ["Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"],
        ["Cem", "Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"],
        ["Mil", "Milhão", "Bilhão", "Trilhão", "Quadrilhão", "Quintilhão", "Sextilhão", "Setilhão", "Octilhão", "Nonilhão", "Decilhão", "Undecilhão", "Dodecilhão", "Tredecilhão", "Quatrodecilhão", "Quindecilhão", "Qedecilhão", "Qeptendecilhão", "Octencilhão", "Nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "Real", d = "Centavo", sl;
    for (var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []) {
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if (!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for (a = -1, l = v.length; ++a < l; t = "") {
            if (!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
                i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
                ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}

btn.addEventListener('click', calculate);

function calculate() {
    if (!number.value) {
        validate();
    } else {
        btnCopy.style.display = "block"
        let numberValue = number.value;
        if (numeral.checked) {
            if (firstCapital.checked) {
                areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result">${(numberValue.toString().extenso())}</p>`
            };
            if (uppercase.checked) {
                areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result">${(numberValue.toString().extenso()).toUpperCase()}</p>`
            };
            if (lowercase.checked) {
                areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result">${(numberValue.toString().extenso()).toLowerCase()}</p>`
            };
        };

        if (monetario.checked) {
            if (firstCapital.checked) {
                areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result">${(numberValue.toString().extenso(true))}</p>`
            };
            if (uppercase.checked) {
                areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result">${(numberValue.toString().extenso(true)).toUpperCase()}</p>`
            };
            if (lowercase.checked) {
                areaResult.innerHTML = `<p class="alert alert-primary text-center mt-4" id="result">${(numberValue.toString().extenso(true)).toLowerCase()}</p>`
            };
        }
    }
}


function validate() {
    if (!number.value) {
        number.style.border = "1px solid #F00";
        areaResult.innerHTML = `<p class="alert alert-danger text-center mt-4" id="result">Digite o numero a ser convertido</p>`
    } else {
        number.style.border = "1px solid #CCC";
        areaResult.innerHTML = `<p class="alert alert-light text-center mt-4" id="result">O resultado aparecerá aqui</p>`
    }
}

btnCopy.addEventListener('click', copyUtm);

function copyUtm() {
    const textCopy = document.querySelector('#area-result');
    navigator.clipboard.writeText(textCopy.textContent);

    copyArea.style.display = 'block'

    interval = setInterval(() => {
        copyArea.style.display = 'none';
        clearInterval(interval);
    }, 4000);
}