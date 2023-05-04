let numRecibo = document.querySelector('#num-recibo');
let valorRecibo = document.querySelector('#valor-recibo');
let valorRecibo2 = document.querySelector('#valor-recibo');
let nomePagador = document.querySelector('#nome-pagador');
let cpfCnpjPagador = document.querySelector('#cpf-cnpj-pagador');
let referencia = document.querySelector('#referencia-recibo');
let endereco = document.querySelector('#endereco-pagador');
let cidadePagador = document.querySelector('#cidade-pagador');
let estadoPagador = document.querySelector('#estado-pagador');
let data = document.querySelector('#data-recibo');
let nomeEmissor = document.querySelector('#nome-emissor');
let cpfCnpjEmissor = document.querySelector('#cpf-cnpj-emissor');
let cidadeEmissor = document.querySelector('#cidade-emissor');
let estadoEmissor = document.querySelector('#estado-emissor')
let contato = document.querySelector('#contato');

let btnGerarRecibo = document.querySelector('#btn-gerar-recibo');
let btnLimparRecibo = document.querySelector('#btn-limpar-recibo');
let btnReciboPdf = document.querySelector('#baixar-recibo');
let btnGerarReciboNovamente = document.querySelector('#btn-gerar-recibo-novamente');
// btnLimparRecibo.style.display = 'none';

let cpfPagador = document.querySelector('#cpf-pagador');
let cnpjPagador = document.querySelector('#cnpj-pagador');
let cpfEmissor = document.querySelector('#cpf-emissor');
let cnpjEmissor = document.querySelector('#cnpj-emissor');

// Selcionar CPF ou CNPJ

if (document.querySelector('input[name="cpf-cnpj-pagador"]')) {
    document.querySelectorAll('input[name="cpf-cnpj-pagador"]').forEach((elem) => {
        elem.addEventListener("change", function (event) {
            var item = event.target.value;
            item = item[0].toUpperCase() + item.substr(1);
            item = `handle${item}`

            if (item == `handleCpf`) {
                cpfCnpjPagador.setAttribute('onkeyup', `${item}(event)`);
                cpfCnpjPagador.setAttribute('maxlength', 14);
            } else {
                cpfCnpjPagador.setAttribute('onkeyup', `${item}(event)`);
                cpfCnpjPagador.setAttribute('maxlength', 18);
            }
            // cpfCnpjPagador.setAttribute('onkeyup', `${item}(event)`);
            // cpfCnpjPagador.setAttribute('maxlength', 14);
            cpfCnpjPagador.value = "";
            console.log(cpfCnpjPagador.onkeyup);
            console.log(cpfCnpjPagador.maxlength);
        });
    });
}

if (document.querySelector('input[name="cpf-cnpj-emissor"]')) {
    document.querySelectorAll('input[name="cpf-cnpj-emissor"]').forEach((elem) => {
        elem.addEventListener("change", function (event) {
            var item = event.target.value;
            item = item[0].toUpperCase() + item.substr(1);
            item = `handle${item}`

            if (item == `handleCpf`) {
                cpfCnpjEmissor.setAttribute('onkeyup', `${item}(event)`);
                cpfCnpjEmissor.setAttribute('maxlength', 14);
                cpfCnpjEmissor.setAttribute('oninput', `validarCpfEmissor()`);
            } else {
                cpfCnpjEmissor.setAttribute('onkeyup', `${item}(event)`);
                cpfCnpjEmissor.setAttribute('maxlength', 18);
                cpfCnpjEmissor.setAttribute('oninput', `validarCnpjEmissor()`);
            }
            // cpfCnpjPagador.setAttribute('onkeyup', `${item}(event)`);
            // cpfCnpjPagador.setAttribute('maxlength', 14);


            cpfCnpjEmissor.value = "";
            console.log(cpfCnpjEmissor.onkeyup);
            console.log(cpfCnpjEmissor.maxlength);
        });
    });
}

// div.setAttribute('id', 'meuId');
// maxlength="14" onkeyup="handleCpf(event)"

btnGerarRecibo.addEventListener('click', function () {
    if (valorRecibo.value == "" || nomePagador.value == "" || referencia.value == "" || data.value == "" || nomeEmissor.value == "" || cpfCnpjEmissor.value == "" || cidadeEmissor.value == "" || estadoEmissor.value == "") {
        validarValorRecibo();
        validarNomePagador();
        validarReferencia();
        validarDataRecibo();
        validarNomeEmissor();        
        validarCnpjEmissor();
        validarCpfEmissor();
        validarCidadeEmissor();
        validarEstadoEmissor();
        btnGerarRecibo.setAttribute( 'href', "#form");
    } else {
        btnGerarRecibo.removeAttribute('href');
        document.querySelector('.area-recibo').style.display = 'block'
        let limparSegundaVia = document.querySelector('.segunda-via');
        limparSegundaVia.innerHTML = "";
        btnLimparRecibo.style.display = "block";
        btnLimparRecibo.textContent = "Refazer recibo";
        document.querySelector('.botoes-recibo').style.display = 'flex'
        document.querySelector('.recibo--num-recibo').textContent = `RECIBO nº  ${numRecibo.value}`;
        let novoValor = document.querySelector('.recibo--valor-recibo').textContent = `VALOR R$ ${parseFloat(valorRecibo.value).toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
        document.querySelector('.recibo--valor-extenso').textContent = `${(novoValor.toString().extenso(true))}`;
        document.querySelector('.recibo--nome-pagador').textContent = nomePagador.value;
        if (cpfCnpjPagador.value.length != "") {
            document.querySelector('.recibo--cpf-cnpj-pagador').textContent = `, portador(a) do CPF/CNPJ: ${cpfCnpjPagador.value}, `;
        }
        document.querySelector('.recibo--valor-recibo2').textContent = `a quantia de R$ ${parseFloat(valorRecibo.value).toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
        if (referencia.value != "") {
            document.querySelector('.recibo--referencia-recibo').textContent = ` referente à ${referencia.value}.`;
        }
        if (endereco.value != "") {
            document.querySelector('.recibo--endereco-pagador').textContent = `residente no endereço ${endereco.value}, `;
        }
        if (cidadePagador.value != "") {
            document.querySelector('.recibo--cidade-pagador').textContent = `${cidadePagador.value}`;
        }

        if (estadoPagador.value != "") {
            document.querySelector('.recibo--estado-pagador').textContent = `-${estadoPagador.value},`
        }
        document.querySelector('.recibo--cidade-emissor').textContent = `${cidadeEmissor.value}-${estadoEmissor.value},`;

        const meses = ["Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let novaData = new Date(data.value);

        document.querySelector('.recibo--data').textContent = `${novaData.getDate() + 1} de ${meses[novaData.getMonth()]} de ${novaData.getFullYear()}`;

        document.querySelector('.recibo--nome-emissor').textContent = nomeEmissor.value;
        if (cpfCnpjEmissor.value == "") {
            document.querySelector('.recibo--cpf-cnpj-emissor').innerHTML = "";
        } else {
            document.querySelector('.recibo--cpf-cnpj-emissor').textContent = cpfCnpjEmissor.value;
        }
        document.querySelector('.recibo--contato-emissor').textContent = contato.value;

        let pagDinheiro = document.querySelector('#dinheiro');
        let pagCartao = document.querySelector('#cartao');
        let pagPix = document.querySelector('#pix');

        if (pagDinheiro.checked) {
            document.querySelector('.recibo--forma-pagamento').textContent = `, valor pago em dinheiro`;
        } else if (pagCartao.checked) {
            document.querySelector('.recibo--forma-pagamento').textContent = `, valor pago em cartão de crédito`;
        } else if (pagPix.checked) {
            document.querySelector('.recibo--forma-pagamento').textContent = `, valor pago via Pix`;
        } else {
            return;
        }

        let node = document.querySelector('.recibo-gerado');
        let clone = node.cloneNode(true);

        let segundaVia = document.querySelector('#duas-vias');

        if (segundaVia.checked) {
            document.querySelector('.segunda-via').appendChild(clone);
        }
    }

});

btnLimparRecibo.addEventListener('click', () => {
    let limparSegundaVia = document.querySelector('.segunda-via');
    limparSegundaVia.innerHTML = "";
    btnLimparRecibo.textContent = "Limpar";
    document.querySelector('.botoes-recibo').style.display = 'none'


    document.querySelector('.area-recibo').style.display = 'none'
    btnGerarRecibo.style.display = "block";
    numRecibo.value = '';
    valorRecibo.value = '';
    valorRecibo2.value = '';
    nomePagador.value = '';
    cpfCnpjPagador.value = '';
    referencia.value = '';
    endereco.value = '';
    cidadePagador.value = '';
    data.value = '';
    nomeEmissor.value = '';
    cpfCnpjEmissor.value = '';
    cidadeEmissor.value = '';
    contato.value = '';
    document.querySelector('#duas-vias').checked = false;
});

function imprimir() {
    window.print();
};

btnReciboPdf.addEventListener('click', () => {
    var element = document.querySelector('.area-recibo');
    var opt = {
        margin: 0.2,
        filename: 'recibo-online--wermison.dev.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});

function validarValorRecibo() {
    if (valorRecibo.value == "") {
        valorRecibo.style.border = '1px solid #f00';
        document.querySelector('.span-valor').style.display = 'block';
    } else {
        valorRecibo.style.border = '1px solid #ccc';
        document.querySelector('.span-valor').style.display = 'none';
    }
}

function validarNomePagador() {
    if (nomePagador.value.length < 3) {
        nomePagador.style.border = '1px solid #f00';
        document.querySelector('.span-nome-pagador').style.display = 'block';
    } else {
        nomePagador.style.border = '1px solid #ccc';
        document.querySelector('.span-nome-pagador').style.display = 'none';
    }
}

function validarReferencia() {
    if (referencia.value.length < 3) {
        referencia.style.border = '1px solid #f00';
        document.querySelector('.span-referencia').style.display = 'block';
    } else {
        referencia.style.border = '1px solid #ccc';
        document.querySelector('.span-referencia').style.display = 'none';
    }
}

function validarDataRecibo() {
    if (data.value == "") {
        data.style.border = '1px solid #f00';
        document.querySelector('.span-data').style.display = 'block';
    } else {
        data.style.border = '1px solid #ccc';
        document.querySelector('.span-data').style.display = 'none';
    }
}

function validarNomeEmissor() {
    if (nomeEmissor.value.length < 3) {
        nomeEmissor.style.border = '1px solid #f00';
        document.querySelector('.span-nome-emissor').style.display = 'block';
    } else {
        nomeEmissor.style.border = '1px solid #ccc';
        document.querySelector('.span-nome-emissor').style.display = 'none';
    }
}

function validarCpfEmissor() {
    if (cpfCnpjEmissor.value.length < 14) {
        cpfCnpjEmissor.style.border = '1px solid #f00';
        document.querySelector('.span-cpf-emissor').style.display = 'block';
        document.querySelector('.span-cnpj-emissor').style.display = 'none';
    } else {
        cpfCnpjEmissor.style.border = '1px solid #ccc';
        document.querySelector('.span-cpf-emissor').style.display = 'none';
        document.querySelector('.span-cnpj-emissor').style.display = 'none';
    }
}

function validarCnpjEmissor() {
    if (cpfCnpjEmissor.value.length < 14) {
        cpfCnpjEmissor.style.border = '1px solid #f00';
        document.querySelector('.span-cnpj-emissor').style.display = 'block';
        document.querySelector('.span-cpf-emissor').style.display = 'none';
    } else {
        cpfCnpjEmissor.style.border = '1px solid #ccc';
        document.querySelector('.span-cnpj-emissor').style.display = 'none';
        document.querySelector('.span-cpf-emissor').style.display = 'none';
    }
}

function validarCidadeEmissor() {
    if (cidadeEmissor.value.length < 3) {
        cidadeEmissor.style.border = '1px solid #f00';
        document.querySelector('.span-cidade-emissor').style.display = 'block';
    } else {
        cidadeEmissor.style.border = '1px solid #ccc';
        document.querySelector('.span-cidade-emissor').style.display = 'none';
    }
}

function validarEstadoEmissor() {
    if(estadoEmissor.value == "") {
        estadoEmissor.style.border = '1px solid #f00';
        document.querySelector('.span-estado-emissor').style.display = 'block';
    } else {
        estadoEmissor.style.border = '1px solid #ccc';
        document.querySelector('.span-estado-emissor').style.display = 'none';
    }
}

String.prototype.extenso = function (c) { // Função para converter número no formato string para número por extenso.
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
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

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

const handleCpf = (event) => {
    let input = event.target
    input.value = cpfMask(input.value)
}

const cpfMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return value
}

const handleCnpj = (event) => {
    let input = event.target
    input.value = cnpjMask(input.value)
}

const cnpjMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
    return value
}