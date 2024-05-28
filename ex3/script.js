import {Equacao} from './Equacao.js';

document.addEventListener('DOMContentLoaded',function(){

    let btnDelta = seletor('.btnDelta');
    let btnX1 = seletor('.btnX1');
    let btnX2 = seletor('.btnX2');
    let mostrarResultado = seletor('p');

    btnDelta.addEventListener('click',clickDelta);
    btnX1.addEventListener('click',clickX1);
    btnX2.addEventListener('click',clickX2);

   function seletor(tag) {

    return document.querySelector(tag);

    }   

    function criarObjeto() {

        let valorA = seletor('.valorA');
        let valorB = seletor('.valorB');
        let valorC = seletor('.valorC');

        valorA = valorA.value;
        valorB = valorB.value;
        valorC = valorC.value;

        return new Equacao(Number(valorA),Number(valorB),Number(valorC));

    }


    function clickDelta() {

        mostrarResultado.textContent = '';

        let segundoGrau = criarObjeto();;

        mostrarResultado.textContent = `Valor de delta: ${segundoGrau.delta()}`;

    }

    function clickX1 () {

        mostrarResultado.textContent = '';

        let segundoGrau = criarObjeto();;

        mostrarResultado.textContent = `Valor de X1: ${segundoGrau.retornaX1()}`;

    }

    function clickX2 () {

        mostrarResultado.textContent = '';

        let segundoGrau = criarObjeto();;

        mostrarResultado.textContent = `Valor de X2: ${segundoGrau.retornaX2()}`;

    }

});

