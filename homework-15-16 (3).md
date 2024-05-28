# Homework 15 e 16

Segue lista de exercícios abaixo. Você deve resolvê-los usando JS.

Lista de Exercícios – POO em JavaScript 
Prof. Rone Ilídio 
 
 
1) Crie uma classe chamada Pessoa. Ela deve ter os atributos nome, peso e 
altura. Crie um método chamado imc(), o qual retorna o resultado da seguinte 
fórmula imc = peso/altura * altura. Faça uma página HTML para receber do usuário valores para 
todos os atributos do objeto Pessoa e exibir na tela o retorno do método imc(). 

2) Crie uma classe chamado Produto, a qual possui os atributos nome, preço e estoque. 
Essa classe também deve ter o método valorEstoque(), o qual retorna o resultado da 
multiplicação de preço pelo estoque. Crie uma interface em HTML 
para preencher dados do objeto. Crie um botão que, ao ser clicado, exiba todos os 
dados desse objeto.

3) Crie uma classe denominada Equacao que possua três atributos: a, b e c. Tal 
classe também deve possuir mais três métodos. 

O primeiro denominado delta, que calcula o delta de uma equação do segundo grau pela fórmula: 
 delta = b2 – 4 * a * c 

O segundo, denominado retornaX1, que retorna um dos resultados da equação, calculado pela fórmula: 
 x1 = -b + Math.sqrt(delta) / 2 * a 

O terceiro, denominado retornaX2, que retorna o outro resultado da equação, calculado pela fórmula: 
 x2 = -b - Math.sqrt(delta) / 2 * a

Crie uma interface em HTML onde o usuário pode informar os valores de a, b e c, um botão 
para calcular o valor de X1 e outro para calcular X2. Ao serem clicados, esses botões devem 
chamar funções que criam objetos do tipo Equação e exibem os retornos das funções 
retornaX1() e retornaX2(). 

4) Crie uma classe denominada Funcionario, com os atributos: nome, email, telefone, rua, 
numero, cidade e cep. Crie uma interface gráfica com caixas de texto para receber todos os 
dados de um funcionário. Crie um botão que, ao ser clicado, pega os dados das caixas de 
texto, cria um objeto do tipo Funcionario e exibe na tela tal objeto no formato JSON. 
Obs: para converter um objeto para JSON, siga o exemplo: 
s = JSON.stringfy(o) 
onde "o" é objeto a ser convertido e s é a string com o objeto no formato JSON. 
 
5) Crie uma classe denominada Contato, com os atributos: nome, email e telefone. Crie uma 
interface em HTML para manipular um array de contatos. Sua página deve dar ao usuário as 
seguintes opções: inserir um contato no array, listar todos os contatos, procurar e exibir um 
contato pelo nome, e procurar pelo nome e excluir um contato. Exigência: o método 
construtor de Contato deve receber valores para nome, email e telefone. 
 
6) Crie uma classe chamada Produto com os atributos nome, preço, estoque e validade. Tais 
atributos devem ser privados, por isso crie métodos get e set para todos eles. Crie uma 
interface gráfica para manipular os dados de objetos contidos em um array. Tal interface deve 
fornecer ao usuário a possibilidade de inserir um novo produto, buscar produto por nome, 
excluir produto, alterar dados de um produto cujo nome foi informado pelo usuário e listar 
todos os dados de todos os produtos. 
 
7) Crie uma classe denominada Cliente, com os atributos: nome, email e telefone. Crie uma 
classe denominada PessoaFisica, filha de Cliente, com os atributos CPF e RG. Crie também 
uma classe denominada PessoaJuridica, com os atributos CNPJ e nomefantasia. Crie uma 
interface em HTML onde o usuário pode manipular um vetor de objetos do tipo Cliente. Tal 
interface deve ajudar um array do tipo Cliente, onde o usuário insere objetos do tipo 
PessoaFisica e PessoaJuridica, na ordem que desejar. Crie um botão que exibe na tela todos os 
dados de todos os objetos contidos no array. 
 
8) Crie um classe denominada Agencia, com os atributos número e cidade. Crie uma classe 
denominada Conta, com os atributos: agencia (tipo Agência), número e saldo. A classe Conta 
também deve ter um método depositar (que recebe um valor e acrescenta ao saldo) e sacar 
(que recebe um valor e reduz do saldo). Crie uma classe denominada ContaCorrente, filha de 
Conta, com o atributo chequeespecial (número). Crie uma classe denominada ContaPoupanca, 
filha de Conta, com o atributo vencimento(string). 
Crie uma interface gráfica em HTML para manipular um array do tipo Conta. O usuário 
deverá realizar as seguintes operações: inserir uma nova conta, excluir uma conta, exibir os 
dados de uma conta cujo número da agencia e o número da conta foram informados.

### Referência
[Lista de exercícios](https://www.passeidireto.com/arquivo/122354807/lista-poo-javascript)