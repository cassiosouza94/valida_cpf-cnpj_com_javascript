let cpf = "423.520.900-08";

let soma = 0;
function checkDigitoVerificador1(cpf = null) {
    let digitoVerificador1 = (_checkDigitoVerificador1(cpf) * 10) % 11;
    digitoVerificador1 = (digitoVerificador1 == 10 || digitoVerificador1 == 11) ? 0 : digitoVerificador1;
    if (digitoVerificador1 != cpf[9])
        return false;
    return true;
};

_checkDigitoVerificador1 = function (cpf, posicao = 0, soma = 0) {
    if (posicao > 9)
        return 0;
    return soma + _checkDigitoVerificador1(cpf, posicao + 1, cpf[posicao] * ((cpf.length - 1) - posicao));
};

function checkDigitoVerificador2(cpf = null) {
    let digitoVerificador2 = (_checkDigitoVerificador2(cpf) * 10) % 11;
    digitoVerificador2 = (digitoVerificador2 == 10 || digitoVerificador2 == 11) ? 0 : digitoVerificador2;
    if (digitoVerificador2 != cpf[10])
        return false;
    return true;
};

_checkDigitoVerificador2 = function (cpf, posicao = 0, soma = 0) {
    if (posicao > 10)
        return 0;
    return soma + _checkDigitoVerificador2(cpf, posicao + 1, cpf[posicao] * ((cpf.length) - posicao));
};

function isValidCPF(cpf = 0) {
    cpf = cpf.replace(/\.|-/g, "");
    if (!checkDigitoVerificador1(cpf))
        return false;
    if (!checkDigitoVerificador2(cpf))
        return false;
    return true;
};

console.log(isValidCPF(cpf));