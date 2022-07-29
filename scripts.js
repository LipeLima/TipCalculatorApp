function calcular5(valorConta, numPessoas) {
  var valorConta = document.getElementById('bill_value').value;
  var numPessoas = document.getElementById('people_number').value;

  calculo = (valorConta * 5)/100;

  if (numPessoas == 0) {
      alert("Número de pessoas não pode estar ZERADO");
  }
  document.getElementById('tip_amount').innerText = calculo.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
  document.getElementById('value_total').innerText = (calculo/numPessoas).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
}

function calcular10(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 10)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    document.getElementById('value_total').innerText = (calculo/numPessoas).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
}

function calcular15(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 15)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    document.getElementById('value_total').innerText = (calculo/numPessoas).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
}

function calcular25(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 25)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    document.getElementById('value_total').innerText = (calculo/numPessoas).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
}

function calcular50(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;

    calculo = (valorConta * 50)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    document.getElementById('value_total').innerText = (calculo/numPessoas).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
}

function calcularCustom(valorConta, numPessoas) {
    var valorConta = document.getElementById('bill_value').value;
    var numPessoas = document.getElementById('people_number').value;
    var valorCustomizado = document.getElementById('custom').value

    calculo = (valorConta * valorCustomizado)/100;

    if (numPessoas == 0) {
        alert("Número de pessoas não pode estar ZERADO");
    }
    document.getElementById('tip_amount').innerText = calculo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    document.getElementById('value_total').innerText = (calculo/numPessoas).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
}

function reset() {
    location.reload();
}