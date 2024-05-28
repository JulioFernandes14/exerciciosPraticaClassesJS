export class Pessoa {

    constructor(nomeP,alturaP,pesoP) {

        this.nome = nomeP;
        this.altura = alturaP;
        this.peso = pesoP;

    }

    calcularIMC() {

        return ( this.peso / (this.altura*this.altura));

    }

}