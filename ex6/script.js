import {Produto} from "./Produto.js";
import {ListaProdutos} from "./ListaProdutos.js";

let prod1 = new Produto();
prod1.setNome('Feijão');
prod1.setPreco(9.99);
prod1.setEstoque(15);
prod1.setValidade('10/12/2026');

let prod2 = new Produto();
prod2.setNome('Arroz');
prod2.setPreco(7.99);
prod2.setEstoque(12);
prod2.setValidade('11/05/2025');

let lista = new ListaProdutos();

lista.addProduto(prod1);
lista.addProduto(prod2);

//DOM

document.addEventListener('DOMContentLoaded',function() {
	
	let seletor = tag => document.querySelector(tag);

	const btnVisualizar = seletor('.verProd');
	const btnCadastrar = seletor('.cadastrarProd');
	const btnPesquisar = seletor('.pesquisarProd');
	const btnExluir = seletor('.excluirProd');

	const painel = seletor('.painel');
	
	btnVisualizar.addEventListener('click',function (){
		
		painel.innerHTML = lista.getLista();
		
	});
	
	btnCadastrar.addEventListener('click',function(){
		
		let produto = new Produto;
		
		produto.setNome(prompt('Digite o nome do produto'));
		produto.setPreco(Number(prompt('Digite o valor do produto')));
		produto.setEstoque (Number(prompt('Digite a quantidade em estoque do produto')));
		produto.setValidade(prompt('Digite a validade do produto'));
		
		lista.addProduto(produto);
		
	});
	
	btnPesquisar.addEventListener('click',function(){
		
		let produto = lista.buscarProduto(prompt('Digite o nome do produto a ser pesquisado:'));
		
		painel.innerHTML = `Produto ${produto.getNome()} <br> Preço: ${produto.getPreco()} <br> Quantidade em estoque: ${produto.getEstoque()} <br> Validade: ${produto.getValidade()}`;
		
	});
	
	btnExluir.addEventListener('click',function(){
		
		lista.removerProduto(prompt('Digite o nome do produto para excluir:'));
		
	});
	
});

