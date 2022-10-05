
// Declaração de varoáveis let (pode ser alterarado) e const (não pode ser alterarado).

const NomeFacilitador01 = "Luiz"
let NomeFacilitador02 = "Maria"

// Tipos de variáveis

// String - Texto (demarcado com "aspas")

const nome = "Luiz"

// Number - Número Int (inteiro) ou Float (não pode ser expresso como inteiro)
let idade = 28
let altura = 1.74

//  Boolean - Verdadeiro ou falso
let isHuman = true
const gostaDeAlgumaCoisa = false

// Outros
let indefinido = undefined //quando uma variável ainda não possui um valor atribuído.
let nulo = null //quando uma variável não possui valor.

// Tipos de estrutura de dados

// Array
let tipoArray = []

let arrayLuiz = ["Luiz", 1.74, 28]
console.log(arrayLuiz)
console.log(arrayLuiz[0])

let notasDaTurma = [10, 8, 6, 9, 10, 1, 0]

console.log(arrayLuiz)

// Obejto
let tipoObjeto = {}

let obejtoLuiz = {
    nome: "Luiz",
    idade: 28,
    altura: 1.74,
    isHuman: true
}

//-------------------------------------------------------------------------------------


//Operadores lógicos

//igladade == (valor igual) ou === (valor e tipo de váriavel extritamente igual)

console.log(5 == 5);

console.log(5 === "5");

// // Diferente != (valor difenrete) ou !== (valor e tipo de váriavel extritamente diferente)

console.log(5 != 6);

// // Maior e menor que  <=(menor ou igual) ou >

console.log(5 > 4);
console.log(5 < 4);

let idadePessoa = 17

console.log(idadePessoa >= 18);

// operador "ou"  ||

console.log(5 == 5 || 6 == 7);

// operador "e"   &&

console.log(5 == 5 && 6 == 7);

//-------------------------- Operadores matemátios --------------------------------

// Soma  +

let numero1 = 5;
let numero2 = 6;
let soma = numero1 + numero2

console.log(soma);

// // Subtração  -

let numero3 = 5;
let numero4 = 6;
let soma2 = numero1 - numero2

console.log(soma2);

// // Multiplicação  *

let mult1 = 2
let mult2 = 6
let resultMult = mult1 * mult2

console.log(resultMult);

// // Divisão    /

let div1 = 30
let div2 = 2
let divResult = div1 / div2

console.log(divResult);

// Consicionais if (A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira.) else (Se for falsa, executa as afirmações dentro de else.)

idadePessoa2 = 17

if (idadePessoa2 >= 18) {
    console.log("Você pode tirar CNH");
} else {
    console.log("Você NÃO pode tirar CNH");
}


// exemplo de um banco

let salario = 10000

if (salario >= 10000) {
    console.log("Você será OURO");
} else if (salario >= 5000 && salario < 10000) {
    console.log("Você será PRATA");
} else {
    console.log("Você será BRONZE");
}


// Estrutura de repetição For e While

for (let index = 0; index < 5; index++) {
    console.log("Volta do For numero", index);
}

let pessoas1 = [
    "Luiz",
    "Maria",
    "João",
    "Pedro"
]

for (let i = 0; i < 5; i++) {
    console.log(pessoas1[i]);
}

let pessoas2 = [
    "Luiz",
    "Maria",
    "João",
    "Pedro",
    "Mariana",
    "felipe",
    "Bartolomeu",
    "sssssss",
    true
]

for (let i = 0; i < pessoas2.length; i++) {
    console.log(pessoas2[i]);
}
