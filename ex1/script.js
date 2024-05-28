import {Pessoa} from "./Pessoa.js";

document.addEventListener('DOMContentLoaded',init);

function init() {

    const btnCalcular = document.querySelector('button');

    btnCalcular.addEventListener('click',calcularIMC);

}

function calcularIMC() {

    const nomeValue = document.querySelector('.nome');
    const pesoValue = document.querySelector('.peso');
    const alturaValue = document.querySelector('.altura');

    const retornarIMC = document.querySelector('p');

    const pessoa = new Pessoa(nomeValue.value,Number(alturaValue.value),Number(pesoValue.value));

    console.log(pessoa);

    retornarIMC.textContent = `IMC: ${(pessoa.calcularIMC()).toFixed(2)}`;

}