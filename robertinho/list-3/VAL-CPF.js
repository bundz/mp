const formulario = document.querySelector(form);
const validador = document.querySelector(h3);


formulario.addEventListener("submit", (e) => {
    e.preventDefault ();

    const cpf = formulario.inCPF.value;
    let soma = 0;

    for (let i = 0; i < cpf.length; i ++) {
        soma = soma + Number(cpf[i]);
    }

    if (soma % 11 == 0) {
        validador.innertext = 'Válido';
        validador.style.color = "green";
    }

    if (cpf.length < 11 || cpf.length > 11) {
        validador.innertext = 'Inválido';
        validador.style.color = "red";
    }
})