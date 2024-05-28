document.addEventListener('DOMContentLoaded',function(){

    let lista = new ListaContatos();

    let seletor = tag => document.querySelector(tag);

    let btnAdicionar = seletor('.btnAdicionar');
    let btnLista = seletor('.btnLista');
    let btnPesquisar = seletor('.btnPesquisar');
    let btnExcluir = seletor('.btnExcluir');

    let painel = seletor ('.painel')

    btnAdicionar.addEventListener('click',adicionar);
    btnLista.addEventListener('click',exibirLista);
    btnPesquisar.addEventListener('click',pesquisar);
    btnExcluir.addEventListener('click',excluir);

    function adicionar() {

        let contato = new Contato((seletor('.nome')).value, (seletor('.email')).value, (seletor('.telefone')).value);

        lista.adicionarContato(contato);

    }

    function exibirLista() {

        painel.innerHTML = lista.listarContatos();

    }

    function pesquisar() {

        let nome = prompt('Digite o nome do contato para pesquisar:');

        painel.innerHTML = lista.procurarExibirContato(nome);

    }

    function excluir() {

        let nome = prompt('Digite o nome do contato para excluir:');

        painel.innerHTML = lista.excluirContato(nome);

    }

});