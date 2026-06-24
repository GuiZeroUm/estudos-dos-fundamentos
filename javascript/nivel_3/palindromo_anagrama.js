// Conceitos treinados
// normalização;
// two pointers;
// ordenação;
// mapa de frequência;
// Big O.
//     O que construir
// Implemente:
//
// ehPalindromo(texto);
// saoAnagramasComSort(a, b);

const texto = 'amor'

const textoSecundario = 'roma'

function ehPalindromo(value) {

    if (value === inverterTexto(value)) {
        resultado = 'É Palíndromo';
    } else {
        resultado = 'Não é Palíndromo';
    }

    return resultado;
}

function saoAnagramasComSort(a, b) {

    let resultado = '';

    if (a === inverterTexto(b)) {
        resultado = 'É Anagrama'
    } else {
        resultado = 'Não é Anagrama'
    }

    return resultado
}

console.log(ehPalindromo(texto))

console.log(saoAnagramasComSort(texto, textoSecundario))



function inverterTexto(value) {
    const invertedValue = [...value];

    let resultadoInvertido = '';

    let resultado = '';

    for (let i = invertedValue.length -1; i > -1; i--) {

        resultadoInvertido += invertedValue[i];
    }

    return resultadoInvertido
}