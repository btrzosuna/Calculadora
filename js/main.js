
let resultado = '';
let operacionActual = '';
let operandoAnterior = null;
const inputResult = document.getElementById('result');

function agregarValor(valor) {
    resultado += valor;
    inputResult.value = resultado;
}

function operar(operador) {
    if (operandoAnterior !== null) {
        calcularResultado();
    }
    operacionActual = operador;
    operandoAnterior = parseFloat(resultado);
    resultado = '';
}

function calcularResultado() {
    if (operacionActual === '+') {
        resultado = (operandoAnterior + parseFloat(resultado)).toString();
    } else if (operacionActual === '-') {
        resultado = (operandoAnterior - parseFloat(resultado)).toString();
    } else if (operacionActual === '*') {
        resultado = (operandoAnterior * parseFloat(resultado)).toString();
    } else if (operacionActual === '/') {
        resultado = (operandoAnterior / parseFloat(resultado)).toString();
    }
    operacionActual = '';
    operandoAnterior = null;
    inputResult.value = resultado;
}

function borrar() {
    resultado = '';
    operacionActual = '';
    operandoAnterior = null;
    inputResult.value = '';
}
