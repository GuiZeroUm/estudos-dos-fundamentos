const botoes = document.querySelectorAll('.botao-input')

const valor = document.querySelector('.valor-digitado')

botoes.forEach(button => {

    button.addEventListener("click", (eventoEscutado) => {
        const valorDoBotao = eventoEscutado.target.value;
        console.log(valorDoBotao);

        valor.textContent = valorDoBotao
    });

});