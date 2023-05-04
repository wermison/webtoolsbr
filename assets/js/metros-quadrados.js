function calcular() {
    let altura = document.querySelector('.altura');
    let base = document.querySelector('.base');
    let result = document.querySelector('.result');

    let metrosQuadrados = Number(altura.value) * Number(base.value);
    metrosQuadrados = metrosQuadrados.toFixed(2)

    if (altura.value <= 0 || base.value <= 0) {
        result.innerHTML = `<p class="alert alert-danger text-center">Digite valores numéricos maiores que 0 (zero)</p>`
    } else {
        
    result.innerHTML = `<p class="alert alert-success text-center">${metrosQuadrados.toLocaleString()} m<sup>2</p>`
    }

}