export class Produto {

    #nome;
    #preco;
    #estoque;
    #validade;
	
	// Definir valores;
	
	setNome (nome) {
		
		this.#nome = nome;
		
	}
	
	setPreco (preco) {
		
		this.#preco = preco;
		
	}
	
	setEstoque (qtdEstoque) {
		
		this.#estoque = qtdEstoque;
		
	}
	
	setValidade (dataValidade) {
		
		this.#validade = dataValidade;
		
	}
	
	// Pegar valores;
	
	getNome (nome) {
		
		return this.#nome;
		
	}
	
	getPreco (preco) {
		
		return this.#preco;
		
	}
	
	getEstoque (qtdEstoque) {
		
		return this.#estoque;
		
	}
	
	getValidade (dataValidade) {
		
		return this.#validade;
		
	}

}