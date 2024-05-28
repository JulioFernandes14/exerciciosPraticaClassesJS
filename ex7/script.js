//7) Crie uma classe denominada Cliente, com os atributos: nome, email e telefone. Crie uma 
//classe denominada PessoaFisica, filha de Cliente, com os atributos CPF e RG. Crie também 
//uma classe denominada PessoaJuridica, com os atributos CNPJ e nomefantasia. Crie uma 
//interface em HTML onde o usuário pode manipular um vetor de objetos do tipo Cliente. Tal 
//interface deve ajudar um array do tipo Cliente, onde o usuário insere objetos do tipo 
//PessoaFisica e PessoaJuridica, na ordem que desejar. Crie um botão que exibe na tela todos os 
//dados de todos os objetos contidos no array. 

class Cliente {
	
	constructor (nome,email,telefone) {
		
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
		
	}
	
}

class PessoaFisica extends Cliente {
	
	constructor (nome,email,telefone,cpf,rg) {
		
		super(nome,email,telefone);
		this.cpf = cpf;
		this.rg = rg;
		
	}
	
}

class PessoaJuridica extends Cliente {
	
	constructor (nome,email,telefone,cnpj,nomeFantasia) {
		
		super(nome,email,telefone);
		this.cnpj = cnpj;
		this.nomeFantasia = nomeFantasia;
		
	}
	
}

class ListaClientes {
	
	#lista;
	
	constructor() {
		
		this.#lista = new Array();
		
	}
	
	adicionarCliente(cliente) {
		
		this.#lista.push(cliente);
		
	}
	
	getLista(painel) {
		
		painel.innerHTML = '';
		
		this.#lista.forEach(cliente => {
			
			for (let i in cliente) {
				
				painel.innerHTML += `${i}: ${cliente[i]} <br>`;
				
			}
			
			painel.innerHTML += '__________________________________________________<br> <br> <br>';
			
		});
		
		return painel
		
	}
	
}

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