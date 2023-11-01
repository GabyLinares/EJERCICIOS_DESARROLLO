// scripts ECMsScripts isomórfico
// comentarios
// variables

let numero = 1;
let nombre = 'Tatiana';
let miVar = true;
let miArray = [1,2,3];
let num1 = 2;
let num2 = 3;
let suma = num1 + num2;

console.log(`la suma es ${suma}`);

// operadores aritmeticos + - * / mod %

// operadores de comparaación == != === !== <= < >= >

// operadores lógicos && || !

let num3 = parseInt(prompt('Digite el primer num'));
let num4 = parseInt(prompt('Digite el segundo num'));
let suma2 = num3 + num4;

console.log(`la suma es ${suma2}`);

// Función suma

const funcSuma = (num1, num2) => {
    console.log(`La suma es ${num1 + num2}`)
};

// Función resta

const funcResta = (num1, num2) => {
    console.log(`La resta es ${num1 - num2}`)
};

// Función multi

const funcMulti = (num1, num2) => {
    console.log(`La multiplicación es ${num1 * num2}`)
};

// Función div

const funcDiv = (num1, num2) => {
    console.log(`La divisón es ${num1 / num2}`)
};

// Función suma

const funcMod = (num1, num2) => {
    console.log(`El módulo es ${num1 % num2}`)
};


funcSuma(num1, num2);
funcResta(num1, num2);
funcMod(num1, num2);
funcMulti(num1, num2);
funcDiv(num1, num2);





