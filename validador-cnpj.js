let cnpj = "78.833.017/0001-17";

(function () {
    const validateFirstCheckDigit = (numeros) => {
        let peso = 2;
        let resultado = 0;
        for (let i = numeros.length - 1; i >= 0; i--) {
            resultado += numeros[i] * peso;
            peso = (peso == 9 ? 2 : peso + 1);
        }

        modulo = resultado % 11;
        resultado = (modulo < 2 ? 0 : 11 - modulo);
        return resultado;
    };

    const validateSecondCheckDigit = (numeros) => {
        let peso = 2;
        let resultado = 0;
        for (let i = numeros.length - 1; i >= 0; i--) {
            resultado += numeros[i] * peso;
            peso = (peso == 9 ? 2 : peso + 1);
        }

        modulo = resultado % 11;
        resultado = (modulo < 2 ? 0 : 11 - modulo);
        return resultado;
    };

    const isValidCNPJ = (cnpj) => {
        let numeros = cnpj.split("-")[0].replace(/[.|\/]/g, "");
        let digitos = cnpj.split("-")[1];
        if (validateFirstCheckDigit(numeros) != digitos[0])
            return false;
        if (validateSecondCheckDigit(numeros + "" + digitos[0]) != digitos[1])
            return false;
        return true;
    };

    console.log(isValidCNPJ(cnpj));
})();