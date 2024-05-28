export class Produto {

    constructor(produto,precoUn,qtdEstoque) {

        this.nome = produto;
        this.preco = precoUn;
        this.estoque = qtdEstoque;

    }

    valorEstoque() {
        return this.preco * this.estoque;
    }

}