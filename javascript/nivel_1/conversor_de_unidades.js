function celsiusParaFahrenheit(value) {
    return (value * 9/5) + 32;
}

function kmParaMilhas(value) {
    return (value / 1.609).toFixed(6);
}

console.log(kmParaMilhas(1))
console.log(celsiusParaFahrenheit(5))