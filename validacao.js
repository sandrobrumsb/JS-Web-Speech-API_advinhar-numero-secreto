function verificaSeOChuteEUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>';
        return
    }

    if (numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor invalido! O  numero secreto precisa estar entre: ${menorValor} e o ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns!!!! Voce Acertou!!!!</h2>
            <h3>O numero secreto é o ${numeroSecreto}</h3>
            <button id='jogar-novamente' class='btn-jogar'>jogar Novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML +=`<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else{
         elementoChute.innerHTML +=`<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>` 
    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor

}

document.body.addEventListener('click',e => {
    if (e.target.id =='jogar-novamente') {
        window.location.reload();
    }
})