//Iniciar variáveis

let tabuleiro = ["", "", "", "", "", "", "", "", ""]
let vezdoJogador = 0
let gameOver = false

let simbolos = ["x", "o"]


let vitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function jogada(posicao) {

    if(gameOver){
        return
    }

   if (tabuleiro[posicao] == ""){  
      tabuleiro[posicao] = simbolos[vezdoJogador]
      gameOver = vencedor()

      if(gameOver == false) {
        vezdoJogador = (vezdoJogador == 0)?1:0
        }
    }
    return gameOver
}

function vencedor() {
    
    for(let i=0; i < vitoria.length; i++) {
        let seq = vitoria[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (tabuleiro[pos1] == tabuleiro[pos2]  && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != "") {

            return true
        }
    }
    return false
}
