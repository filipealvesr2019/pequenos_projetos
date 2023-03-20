const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento = '17 oct 2023'

function countDown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = ( datalanc - hoje)/1000;

    const finalDias = Math.floor(segtotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segtotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segtotal / 60) % 60;
    const finalSegundos = Math.floor(segtotal) % 60;


    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}
function formatoTempo(tempo){
    if (tempo < 10){
        tempo = '0' + tempo

    }
    return tempo
}




countDown();
setInterval(countDown, 1000);
