/*Dentro do arquivo main.js, declare uma variável constante const
com o nome botoes para representar os elementos que devem ser
lidos. Atribua essa constante, ou seja, uma informação que não sofrerá
alterações ao longo do projeto, como é o caso do número de botões
com o qual estamos trabalhando. Para chamar toda a classe .botoes,
utilizaremos o DOM (Document Object Model) usando o método
querySelectorAll para selecionar os elementos HTML pertencentes à
classe desejada. Para verificar o progresso, insira console.log(botoes)
no arquivo main.js.*/

const botoes = document.querySelectorAll(".botao");

/*Para que todos os botões funcionem da mesma maneira que o primeiro,
criaremos um laço de repetição, de modo que, quando um botão
for clicado, a classe .ativo seja automaticamente adicionada a ele,
produzindo os efeitos visuais desejados. Para acessar cada elemento
dessa lista, empregamos um laço de repetição for. A estrutura
executada será a seguinte: começamos com a variável inconstante (let)
i igual a 0. Enquanto i for menor que o número de .botoes na lista,
incrementamos 1 a essa variável.*/


/*Agora, vamos criar uma função que será acionada quando ocorrer
um clique em um botão, ou seja, incluiremos um evento de escuta
que dirá, por meio do main.js, o que deve ocorrer quando o botão for
clicado. Portanto, no arquivo main.js, para passar esse evento de escuta
utilizamos o comando onclick. Por questões da lógica de programação
do JavaScript, esse evento de escuta espera que seja enviada uma
função, ou seja, uma lista de comandos.
Uma função é criada, em programação, quando agrupamos uma série
de comandos que serão acionados, no caso, pelo onclick, que dirá ao
arquivo mais.js o que fazer quando um dos botões do nosso projeto
for clicado. No caso, o que deve acontecer é que a classe .ativo seja
adicionada ao botão clicado.
O ideal é termos apenas um botão ativo por vez. Portanto, para garantir
que apenas o botão clicado tenha a classe .ativo e que os outros
percam essa classe, adicionaremos outro loop for dentro da função,
indicando a remoção da classe .ativo do botões, de modo que ela só
seja chamada no momento do clique.*/

for(let i=0;i <botoes.length;i++){ 
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
            botoes[j].classList.remove("ativo");
        }
    botoes[i].classList.add("ativo");
    }
}

