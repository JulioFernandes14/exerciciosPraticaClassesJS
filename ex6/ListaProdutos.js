export class ListaProdutos {
	
	#lista;
	
	constructor() {
		
		this.#lista = new Array();
		
	}
	
	addProduto(produto) {
		
		this.#lista.push(produto);
		
	}
	
	listaArray() {
		return this.#lista;
	}
	
	getLista(){
		
		let texto = '';
		
		this.#lista.forEach( item => {
			
			texto += `<p> Produto: ${item.getNome()} <br> Preço: ${item.getPreco()} <br> Quantidade em estoque: ${item.getEstoque()} <br> Validade: ${item.getValidade()} </p>`;
			
		} );
		
		return texto;
		
	}
	
	buscarProduto(nomeProduto) {

		for (let item of this.#lista) {
			
			if (item.getNome() == nomeProduto) {
				return item;
			}
			
		}
		
		return 'Produto não encontrado';
		
	}
	
	removerProduto(nomeProduto) {
		
		if (this.buscarProduto(nomeProduto) != 'Produto não encontrado') {
			
			let indice = this.#lista.indexOf(this.buscarProduto(nomeProduto))

			this.#lista.splice(indice,1);
			
		} 
		
	}
	
}