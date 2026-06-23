console.log('Calculator System ✨')

const argumentos = process.argv.slice(2);

const primeiro_numero = Number(argumentos[0]);

const argumento = String(argumentos[1]);

const segundo_numero = Number(argumentos[2]);

let resultado = 0;

switch (argumento) {
    case '+':
        resultado = primeiro_numero + segundo_numero;
        break;
    case '-':
        resultado = primeiro_numero - segundo_numero;
        break;
    case 'x':
        resultado = primeiro_numero * segundo_numero;
        break;
    case '/':
        resultado = primeiro_numero / segundo_numero;
        break;
    default:
        console.log('Operação inválida');
}

console.log(`Resultado: ${resultado}`);