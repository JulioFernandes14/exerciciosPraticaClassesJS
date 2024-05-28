import {PessoaFisica} from "./PessoaFisica.js";
import {PessoaJuridica} from "./PessoaJuridica.js";
import {ListaClientes} from "./ListaClientes.js";



function seletor(tag){
	return document.querySelector(tag);
}

let lista = new ListaClientes();

document.addEventListener('DOMContentLoaded',function(){
	
	const painel = seletor('.painel');
	
	const btnCadastrarPF = seletor('.cadastrarPF');
	const btnCadastrarPJ = seletor('.cadastrarPJ');
	const btnExibir = seletor('.exibirClientes');
	
	btnCadastrarPF.addEventListener('click',function(){
		
		let clientePF = new PessoaFisica();
		
		clientePF.nome = prompt("Digite o nome do cliente");
		clientePF.email = prompt("Digite o email do Cliente");
		clientePF.telefone = prompt("Digite o telefone do cliente");
		clientePF.cpf = prompt("Digite o CPF do cliente");
		clientePF.rg = prompt("Digite o RG do cliente");
		
		lista.adicionarCliente(clientePF);
		
	});
	
	btnCadastrarPJ.addEventListener('click',function(){
		
		let clientePJ = new PessoaJuridica();
		
		clientePJ.nome = prompt("Digite o nome do cliente");
		clientePJ.email = prompt("Digite o email do Cliente");
		clientePJ.telefone = prompt("Digite o telefone do cliente");
		clientePJ.cnpj = prompt("Digite o CNPJ do cliente");
		clientePJ.nomeFantasia = prompt("Digite o Nome Fantasia do cliente");
		
		lista.adicionarCliente(clientePJ);
		
	});
	
	btnExibir.addEventListener('click',function(){
		
		lista.getLista(painel);
		
		
		
	});
	
});