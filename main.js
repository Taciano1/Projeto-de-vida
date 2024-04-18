const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T23:59:59");
const tempoObjetivo2 = new Date("2024-11-05T23:59:59");
const tempoObjetivo3 = new Date("2024-12-05T23:59:59");
const tempoObjetivo4 = new Date("2025-01-05T23:59:59");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]

contadores[0].textContent = CalculaTempo(tempos[0]);


function CalculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let numSegundos = Math.floor(tempoFinal / 1000);
    let numMinutos = Math.floor(numSegundos / 60);
    let numHoras = Math.floor(numMinutos / 60);
    let numDias = Math.floor(numHoras / 24);
    
    numSegundos %= 60;
    numMinutos %= 60;
    numHoras %= 24;
    
    if(tempoFinal > 0){
    return numDias + " dias,     "
    + numHoras     + " horas,    "
    + numMinutos   + " minutos e "
    + numSegundos  + " segundos. ";
    }else{
        return "Prazo finalizado";
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = CalculaTempo(tempos[i]);
    }
}

function comecaCronometro(){
atualizaCronometro();
setInterval(atualizaCronometro,1000);
}
comecaCronometro();
