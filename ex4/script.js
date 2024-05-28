import {Funcionario} from './Funcionario.js';

document.addEventListener('DOMContentLoaded',function(){

    let seletor = (tag) => document.querySelector(tag);

    let btnCadastro = seletor('.btnCadastro');

    let mostrarFuncionario = seletor('p');

    btnCadastro.addEventListener('click',cadastrar);

    function cadastrar() {

        let campoNome = (seletor('.nome')).value;
        let campoEmail = (seletor('.email')).value;
        let campoTelefone= (seletor('.telefone')).value;
        let campoRua = (seletor('.rua')).value;
        let campoNumero = (seletor('.numero')).value;
        let campoCidade = (seletor('.cidade')).value;
        let campoCep = (seletor('.cep')).value;

        let funcionario = new Funcionario(campoNome,campoEmail,campoTelefone,campoRua,campoNumero,campoCidade,campoCep);

        let funcionarioJ = JSON.stringify(funcionario);

        mostrarFuncionario.textContent = funcionarioJ;

    }

});