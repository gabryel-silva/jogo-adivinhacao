function verificaSeChuteValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += ('Valor inválido')
    }
    
    if(numeroForMaiorqueValorPermitido(numero)){
        elementoChute.innerHTML += `Valor inálido: Fale um número entre ${menor-numero} e ${maiorValor}`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML= `
            <h2>Você acertou!</h2>
            <h3>O número secereto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div class="regular">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div class="regular">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorqueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})