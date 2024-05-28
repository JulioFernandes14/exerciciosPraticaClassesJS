class ListaContatos {

    #lista;

    constructor() {
        this.#lista = new Array();
    }

    adicionarContato(contato) {

        this.#lista.push(contato);

    }

    listarContatos() {

        let textoExibirContatos = '';

        if (this.#lista.length > 0){

            this.#lista.forEach(element => {
            
                for (let i in element) {
    
                    textoExibirContatos+=` ${i} : ${element[i]} <br> <br>`;
    
                }
                
                textoExibirContatos+='<hr>';
                
            });
    
            return textoExibirContatos;

        }

        return 'Nenhum contato adicionado';


    }

    procurarExibirContato (nome) {

        let textoResultadoPesquisa = 'Contato não encontrado';

        this.#lista.forEach(element => {

            if (element.nome == nome) {
                textoResultadoPesquisa = '';
                for (let i in element) {

                    textoResultadoPesquisa+=` ${i} : ${element[i]} <br> <br>`;
    
                }
            }

        });

        return textoResultadoPesquisa;

    }

    excluirContato(nome) {

        this.#lista.forEach(element => {
            
            if (element.nome == nome) {
                
                this.#lista.splice(this.#lista.indexOf(element),1);

            }

        });
        
        return 'Contato excluído com sucesso';

    }

}