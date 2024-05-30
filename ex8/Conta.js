export class Conta {
	
	constructor (agencia,numero,saldo) {
		
		this.agencia = agencia;
		this.numeroConta = numero;
		this.saldo = saldo;
		
	}
	
	depositar(valor) {
		this.saldo += valor;
	}
	
	sacar(valor) {
		this.saldo -= valor;
	}
	
}