//PROGRAMA QUE VERIFIQUE SE A LETRA É VOGAL OU CONSOANTE

const prompt = require("prompt-sync");
const ask = prompt();

const letra = ask("Digite uma letra: ");

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra =="u") {
    console.log(`A letra ${letra} é uma vogal`);
} else {
    console.log(`A letra ${letra} é uma consoante`);
}

//COMO FAZER PARA O JS RECONHECER TANTO MAIUSCULA QUANTO MINUSCULA?
