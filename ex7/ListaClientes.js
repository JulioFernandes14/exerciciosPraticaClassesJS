export class ListaClientes {
	
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