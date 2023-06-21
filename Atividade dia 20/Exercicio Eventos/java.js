function soma() {
    let a = parseFloat(document.querySelector('#inputValorA').value);
    let b = parseFloat(document.querySelector('#inputValorB').value);
    let resultado = a + b;
    alert(`O resultado da soma é: ${resultado}`);
}
document.querySelector('.calculo').addEventListener('click', soma);