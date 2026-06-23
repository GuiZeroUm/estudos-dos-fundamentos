
// O que construir
// Funções para calcular:
//
// soma;
// média;
// maior;
// menor;
// mediana;
// amplitude;
// valores únicos;
// valores duplicados.

const estatisticas = ([4, 23, 15, 16, 42, 8])

function soma(numeros) {

    let total = 0

    for (let numero of numeros) {
        total += numero
    }

    return total
}

function media(numeros) {
    const soma_total = soma(numeros)

    return soma_total / numeros.length
}

function maior(numeros) {
    let numeroMaior = numeros[0];

    for (let i of numeros) {
        if (numeroMaior < i) {
            numeroMaior = i
        }
    }

    return numeroMaior
}

function menor(numeros) {
    let numeroMenor = numeros[0];

    for (let i of numeros) {
        if (numeroMenor > i) {
            numeroMenor = i
        }
    }

    return numeroMenor
}

function mediana(numeros) {
    const valoresOrdenados = bubbleSort(numeros)

    const indiceCentral = Math.floor(valoresOrdenados.length / 2);

    let isImpar = valoresOrdenados.length % 2 === 0

    if (isImpar) {
        const valorPrimario = valoresOrdenados[indiceCentral]
        const valorSecundario = valoresOrdenados[indiceCentral + 1]

        return (valorPrimario + valorSecundario) / 2

    }

    return valoresOrdenados[indiceCentral]

}

function amplitude(numeros) {
    return maior(numeros) - menor(numeros)
}

function valoresUnicos(numeros) {
    return [...new Set(numeros)]

}

function valoresDuplicados(numeros) {
    return [...new Set(numeros.filter((numero, index, array) => array.indexOf(numero) !== index))]
}

console.log(soma(estatisticas))
console.log(media(estatisticas))
console.log(maior(estatisticas))
console.log(menor(estatisticas))
console.log(mediana(estatisticas))
console.log(amplitude(estatisticas))
console.log(valoresUnicos(estatisticas))
console.log(valoresDuplicados(estatisticas))


//ao inves de escrever um .sort, eu criei o bubbleSort na mão, pois dessa forma consigo compreender como funciona por baixo do capô.
function bubbleSort(arrayDeNumerosOriginal) {
    const arrayOrdenado = [...arrayDeNumerosOriginal]

    for (
        let ultimaPosicaoQueNaoFoiOrdenada = arrayOrdenado.length -1;
        ultimaPosicaoQueNaoFoiOrdenada > 0;
        ultimaPosicaoQueNaoFoiOrdenada --
    ) {
        let teveTrocaDePosicao = false;

        for (
            let indiceAtual = 0;
            indiceAtual < ultimaPosicaoQueNaoFoiOrdenada;
            indiceAtual ++
        ) {
            const valorAtual = arrayOrdenado[indiceAtual]
            const proximoValor = arrayOrdenado[indiceAtual + 1]

            if (valorAtual > proximoValor) {
                [arrayOrdenado[indiceAtual], arrayOrdenado[indiceAtual + 1]] = [arrayOrdenado[indiceAtual + 1], arrayOrdenado[indiceAtual]]

                teveTrocaDePosicao = true;
            }
        }
    }

    return arrayOrdenado
}

