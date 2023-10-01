const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "20 oct 2023"

function countdown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (datalanc-hoje)/1000;

    const finaldias = math.floor(segtotal / 60 / 60 / 24);
    const finalhoras = math.floor(segtotal / 60 / 60) % 24;
    const finalminutos = math.floor(segtotal / 60 ) % 60;
    const finalsegundos = math.floor(segtotal) % 60;

    dia.innerHTML = finaldias
    hora.innerHTML = formatotempo(finalhoras)
    minuto.innerHTML = formatotempo(finalminutos)
    segundo.innerHTML = formatotempo(finalsegundos)
}
 function formatotempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
 }

countdown();
setInterval(countdown, 1000)