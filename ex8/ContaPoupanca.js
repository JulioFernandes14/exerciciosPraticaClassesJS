import {Conta} from './Conta.js';

export class ContaPoupanca extends Conta {
	
	constructor (agencia,numero,saldo,vencimento) {
		super (agencia,numero,saldo);
		this.vencimento = vencimento;
	}
	
}