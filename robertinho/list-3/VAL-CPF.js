let cpf = document.getElementById("inCPF");
let buttonValidar = document.getElementById("validar");
let eValido = document.getElementById("validador");
let soma = 0;

buttonValidar.onclick = function () {

    for (let i = 0; i < cpf.length; i ++) {
        soma = soma + Number(cpf[i]);
    }

    if (soma % 11 == 0) {
        eValido.innerText = 'Válido';
        eValido.style.color = "green";
    } else {
        eValido.innerText = 'Inválido';
        eValido.style.color = "red";
    }
    return
}

console.log(eValido);