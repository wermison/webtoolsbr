function calc3Lados() {
    let lado1 = document.querySelector('.lado1');
    let lado2 = document.querySelector('.lado2');
    let lado3 = document.querySelector('.altura');
    let comprimento = (Number(lado1.value) + Number(lado2.value)) / 2;
    let altura = Number(lado3.value);
    let area = comprimento * altura;
    let ha = area / 10000;

    if (lado1.value <= 0 || lado2.value <= 0 || lado3.value <= 0) {
        document.querySelector('.result').innerHTML = ``;
        document.querySelector('.result').innerHTML = `<p class="alert alert-danger text-center">Preencha as informações com valores numéricos positivos</p>`;
    } else {
        document.querySelector('.result').innerHTML = ``;
        document.querySelector('.result').innerHTML += `<p class="alert alert-success text-center">O imóvel tem <b>${area.toLocaleString()}</b> m<sup>2</sup> ou <b>${ha.toLocaleString()}</b> ha</p>`;
        lado1.value = '';
        lado2.value = '';
        lado3.value = '';
    }


};