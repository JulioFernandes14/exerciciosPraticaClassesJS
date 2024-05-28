import {Produto} from "./Produto.js";

document.addEventListener('DOMContentLoaded',init);

function init() {

    const btnCalcular = document.querySelector('button');

    btnCalcular.addEventListener('click',calcularIMC);

}

function calcularIMC() {

    const nomeValue = document.querySelector('.nome');
    const precoValue = document.querySelector('.preco');
    const estoqueValue = document.querySelector('.estoque');

    const mostrarProduto = document.querySelector('p');

    const produto = new Produto(nomeValue.value,Number(precoValue.value),Number(estoqueValue.value));

    mostrarProduto.innerHTML = `Informações do produto: <br> Nome: ${produto.nome} <br> Preço: R$ ${produto.preco} <br> Estoque: ${produto.estoque} <br> Valor em estoque R$ ${produto.valorEstoque()} `;

}