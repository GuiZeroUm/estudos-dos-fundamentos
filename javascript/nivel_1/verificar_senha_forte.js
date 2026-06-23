function validarSenha(value) {

    let hasNumero = /[0-9]/.test(value)

    let hasMaiusculo = /[A-Z]/.test(value)

    let hasSimbolo = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]/.test(value)

    let hasMaisQue7 = value.length

    let resposta = []

    let valida = true;
    
    if (hasMaisQue7 < 8) {
        resposta.push('Minimo 8 caracteres.')
        valida = false;
    }

    if (hasSimbolo === false) {
        resposta.push('Falta simbolo.')
        valida = false;
    }

    if (hasNumero === false) {
        resposta.push('Falta numero.')
        valida = false;
    }

    if (hasMaiusculo === false) {
        resposta.push('Falta maiusculo.')
        valida = false;
    }

    console.log('valida: ' + valida + ', problemas: ' + resposta)
    
}

validarSenha("test")