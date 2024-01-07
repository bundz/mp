let buttonValidar = document.getElementById("validar");
let eValido = document.getElementById("validador");

buttonValidar.onclick = function () {
    let cpf = document.getElementById("inCPF").value;
    let soma = 0;

    for (let i = 0; i < cpf.length; i ++) {
        soma = soma + Number(cpf[i]);
    }
    console.log(soma)
    if (soma % 11 == 0) {
        eValido.innerText = 'Válido';
        eValido.style.color = "green";
    } else {
        eValido.innerText = 'Inválido';
        eValido.style.color = "red";
    }
    return
}
