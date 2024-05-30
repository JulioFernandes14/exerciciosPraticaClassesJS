export class ListaContas {
	
	#lista;
	
	constructor() {
		
		this.#lista = new Array();
		
	}
	
	addConta(conta) {
		this.#lista.push(conta);
	}
	
	getLista() {
		
		let lista = new Array;
		
		this.#lista.forEach(item => lista.push(item));
		
		return lista;
		
	}
	
	getConta(numeroAgencia,numeroConta){
		
		let conta;
		
		this.#lista.forEach(item => {
			
			if ((numeroAgencia == item.agencia.numeroAgencia) && (numeroConta == item.numeroConta)){
				conta = item;
			}
			
		});
		
		if (conta) {
			return conta;
		}
		
		return 'Conta não encontrada';
		
		
	}
	
	excluirConta (numeroAgencia,numeroConta) {
		
		let conta = this.getConta(numeroAgencia,numeroConta);
		
		if (conta) {
			
			this.#lista.splice(this.#lista.indexOf(conta),1);
			
			return ('Conta excluída com sucesso!');
			
		}
		
		return 'Conta não encontrada';
		
	}
	
}