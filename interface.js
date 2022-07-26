

document.addEventListener('DOMContentLoaded', ()=>{
    let quadrados = document.querySelectorAll(".square")

    quadrados.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})



function handleClick(event) {
    let square = event.target
    let posicao = square.id

    if(jogada(posicao)){
        
        setTimeout(() => {
        alert("O jogo acabou - vencedor foi " + vezdoJogador)
    }, 20)
    }
    updateQuadrados()
}

function updateQuadrados() {
    let quadrados = document.querySelectorAll(".square")

    quadrados.forEach((square) => {
        let posicao = square.id
        let simbolos = tabuleiro[posicao]

        if(simbolos != ""){
            square.innerHTML = `<div class= '${simbolos}'></div>`
        }
    })
}
