//exemplo de código JavaScript rodando no navegador
console.log("Olá, mundo! Este é um script JavaScript");

//declaração das variáveis
var nome = "João"; //var: escopo global (evitar usar)
let idade = 25; //let: escopo de bloco (recomendado)
const PI = 3.1415; //const: valor fixo que não pode ser alterado

//tipos primitivos
let texto = "Olá, mundo"; //String
let num = 42; //number
let booleano = true; //boolean
let nulo = null; //null (valor intencionalmente vazio)
let indefinido; //undefined (sem valor atribuído)

//arrays e objetos
let frutas = ["Maçã", "Banana", "Laranja"]; //array
console.log(frutas[0]); //acessa o primeiro elemento do array
let pessoa = {nome: "Carlos", idade: 30}; //objeto
console.log(pessoa.nome); //acessa a propriedade nome do objeto

//condicional if-else
let hora = 14;
if (hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

//switch-case para múltiplas condições
let cor = "azul";
switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelho");
        break;
    case "azul":
        console.log("A cor escolhida foi azul");
        break;
    default:
        console.log("Cor não reconhecida");
}

//laços de repetição
//for - executa um bloco de código várias vezes
for (let i = 0; i < 5; i++){
    console.log("Contador:", i);
}

//while - executa enquanto a condição for verdadeira
let contador = 0;
while (contador < 3) {
    console.log("Número:", contador);
    contador++;
}

//função tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

//arrow function (função moderna)
const dobro = (num) => num * 2;
console.log(dobro(5)); //retorna 10

//escopo de variáveis
let global = "sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global); //acessa variável global
    console.log(local); //acessa variável local
}
testarEscopo(); //console.log(local); -> erro! 'local' não está acessível fora da função

//callback function (introdução)
function processar(callback) {
    console.log("Processando...");
    callback();
}
processar(() => console.log("Finalizado"));

//função assíncrona (introdução)
async function pegarDados() {
    return "Dados recebidos";
}
pegarDados().then(console.log); //usa .then para lidar com a resposta



