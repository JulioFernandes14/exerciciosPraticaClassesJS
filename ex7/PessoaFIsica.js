import {Cliente} from "./Cliente.js";


export class PessoaFisica extends Cliente {
	
	constructor (nome,email,telefone,cpf,rg) {
		
		super(nome,email,telefone);
		this.cpf = cpf;
		this.rg = rg;
		
	}
	
}