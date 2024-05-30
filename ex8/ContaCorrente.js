import {Conta} from './Conta.js';

export class ContaCorrente extends Conta {
	
	constructor (agencia,numero,saldo,chequeEspecial) {
		super (agencia,numero,saldo);
		this.chequeEspecial = chequeEspecial;
	}
	
}