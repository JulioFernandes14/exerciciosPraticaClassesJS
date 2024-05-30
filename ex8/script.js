//8) Crie um classe denominada Agencia, com os atributos número e cidade. Crie uma classe 
//denominada Conta, com os atributos: agencia (tipo Agência), número e saldo. A classe Conta 
//também deve ter um método depositar (que recebe um valor e acrescenta ao saldo) e sacar 
//(que recebe um valor e reduz do saldo). Crie uma classe denominada ContaCorrente, filha de 
//Conta, com o atributo chequeespecial (número). Crie uma classe denominada ContaPoupanca, 
//filha de Conta, com o atributo vencimento(string). 
//Crie uma interface gráfica em HTML para manipular um array do tipo Conta. O usuário 
//deverá realizar as seguintes operações: inserir uma nova conta, excluir uma conta, exibir os 
//dados de uma conta cujo número da agencia e o número da conta foram informados.

import {Agencia} from './Agencia.js';
import {ContaCorrente} from './ContaCorrente.js';
import {ContaPoupanca} from './ContaPoupanca.js';
import {ListaContas} from './ListaContas.js';

function seletor (tag) {
	
	return document.querySelector(tag);
	
}

let lista = new ListaContas();

document.addEventListener('DOMContentLoaded',function() {
	
	let painel = seletor('.painel');
	
	let btnAddCorrente = seletor ('.cadastrarCorrente');
	let btnAddPoupanca = seletor('.cadastrarPoupanca');
	let btnRemover = seletor ('.excluirConta');
	let btnPesquisar = seletor ('.procurarConta');
	
	btnAddCorrente.addEventListener('click',function(){
		
		let agencia = new Agencia;
		
		agencia.numeroAgencia = Number(prompt('Digite o número da agência da nova Conta Corrente:'));
		agencia.cidade = prompt('Digite a cidade da agência da nova Conta Corrente:');
		
		let numeroConta = Number(prompt('Digite o número da nova Conta Corrente:'));
		let saldo = Number(prompt('Digite o saldo da nova Conta Corrente'));
		
		let cheque = Number(prompt('Digite o valor do cheque especial da nova Conta Corrente:'));
		
		let novaConta = new ContaCorrente (agencia,numeroConta,saldo,cheque);
		
		lista.addConta(novaConta);
		
		console.log(lista.getLista());
		
		
	});
	
	btnAddPoupanca.addEventListener('click',function(){
		
		let agencia = new Agencia;
		
		agencia.numeroAgencia = Number(prompt('Digite o número da agência da nova Conta Poupança:'));
		agencia.cidade = prompt('Digite a cidade da agência da nova Conta Poupança:');
		
		let numeroConta = Number(prompt('Digite o número da nova Conta Poupança:'));
		let saldo = Number(prompt('Digite o saldo da nova Conta Poupança'));
		
		let vencimento = prompt('Digite o venciento da nova Conta Poupança');
		
		let novaConta = new ContaPoupanca (agencia,numeroConta,saldo,vencimento);
		
		lista.addConta(novaConta);
		
		console.log(lista.getLista());
		
		
	});
	
	btnPesquisar.addEventListener('click',function(){
		
		let nAgencia = Number(prompt('Digite o número da Agência para pesquisar:'));
		let nConta = Number(prompt('Digite o número da conta para pesquisar:'));
		
		let conta = lista.getConta(nAgencia,nConta); 
		
		console.log(conta)
		
		if (conta!= 'Conta não encontrada') {
			
			painel.innerHTML = `<p> Agência: <br> Número ${conta.agencia.numeroAgencia} <br> Cidade: ${conta.agencia.cidade}</p> <p> Conta: <br> Número: ${conta.numeroConta} <br> Saldo: ${conta.saldo} </p>`;
			
		}
		
	});
	
});