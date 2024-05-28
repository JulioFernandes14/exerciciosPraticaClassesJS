import {Cliente} from "./Cliente.js";

export class PessoaJuridica extends Cliente {
	
	constructor (nome,email,telefone,cnpj,nomeFantasia) {
		
		super(nome,email,telefone);
		this.cnpj = cnpj;
		this.nomeFantasia = nomeFantasia;
		
	}
	
}