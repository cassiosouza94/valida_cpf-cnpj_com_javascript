let cpf = "451.677.070-99";

function validateFirstCheckDigit(cpf) {
    let soma = 0;
    for (var i = 0; i < cpf.length - 2; i++) {
        soma += cpf[i] * ((cpf.length - 1) - i);
    }

    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;
    if (soma != cpf[9])
        return false;
    return true;
};

function validateSecondCheckDigit(cpf) {
    let soma = 0;
    for (var i = 0; i < cpf.length - 1; i++) {
        soma += cpf[i] * ((cpf.length) - i);
    }

    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;
    if (soma != cpf[10])
        return false;
    return true;
};

function isValidCPF(cpf = 0) {
    cpf = cpf.replace(/\.|-/g, "");
    if (!validateFirstCheckDigit(cpf))
        return false;
    if (!validateSecondCheckDigit(cpf))
        return false;
    return true;
};

console.log(isValidCPF(cpf));