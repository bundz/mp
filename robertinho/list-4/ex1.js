//Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.P .R3).

const prompt = require("prompt-sync");
const ask = prompt();

function volume (r) {
    return (4 * 3.14 * r**3)/3
}

const r = ask("Informe um raio: ");

console.log(volume(r));