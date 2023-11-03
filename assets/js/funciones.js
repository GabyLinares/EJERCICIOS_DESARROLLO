// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function pocima(ing1, ing2) {
    return pocima;
}

// pocima(pelo, uñas);

function lanzarmoneda() {
    let moneda = Math.floor((Math.random() * 2) + 1);
    // console.log(`El lanzamiento fue ${moneda}`);
    return moneda;
}

// function ganar(saldo, apuesta) {
//     saldo =+ apuesta * 2;
//     return saldo;
// }

function perder(saldo, apuesta) {
    saldo =- apuesta;
    return saldo;
}

let saldo = 100;
let apuesta = 20;

lanzarmoneda();
// ganar(saldo, apuesta);
perder(saldo, apuesta);

// EXPRESIÓN

// let gana = ganar();

// ANONIMA

// let ganar = function ganar(saldo, apuesta) {
//     saldo =+ apuesta * 2;
//     return saldo;
// }

// FLECHA

const ganar = () => {
    saldo =+ apuesta * 2;
    return saldo;
}

// Juego completo

const juegoMoneda = (saldo) => {

    // 1 = cara, 2 = cola

    let decision = prompt("Selecciona el lado que quieres jugar (1-cara, 2-cola): ");
    let apuesta = prompt("Cuál es tu apuesta? ");
    let decMaquina = Math.floor((Math.random() * 2) + 1);

    let decFinal = lanzarmoneda();

    switch (decFinal) {
        case decision:
            let gane = ganar(saldo, apuesta);
            alert(`¡Felicidades! Has ganado ${apuesta} y tu total es de ${gane}`);
        case decMaquina:
            let perdi = perder(saldo, apuesta);
            alert(`¡Lo siento! Has perdido ${apuesta} y tu total es de ${perdi}`);
            
    }

    return saldo;
}