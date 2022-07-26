botao.addEventListener('click', calcular);

function calcular5(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 5)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toFixed(2);
    document.getElementById('value_total').innerText = (calculo/numPessoas).toFixed(2);
}

function calcular10(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 10)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toFixed(2);
    document.getElementById('value_total').innerText = (calculo/numPessoas).toFixed(2);
}

function calcular15(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 15)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toFixed(2);
    document.getElementById('value_total').innerText = (calculo/numPessoas).toFixed(2);
}

function calcular25(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 25)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toFixed(2);
    document.getElementById('value_total').innerText = (calculo/numPessoas).toFixed(2);
}

function calcular50(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 50)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toFixed(2);
    document.getElementById('value_total').innerText = (calculo/numPessoas).toFixed(2);
}

function calcularCustom(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;
    var valorCustomizado = document.getElementById('custom').value

    calculo = (valorConta * valorCustomizado)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toFixed(2);
    document.getElementById('value_total').innerText = (calculo/numPessoas).toFixed(2);
}

function reset() {
    location.reload();
}