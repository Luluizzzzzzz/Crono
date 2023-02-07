var sec = 0
var min = 0
var hour = 0
var interval =  undefined

function adicionarumdigitonafrente(digit){
    if(digit < 10) {
        return('0' + digit)
    }else{return(digit)}
}

function start(){
    if(interval == undefined){
    tempo()
    interval = setInterval(tempo,1000)} //interval serve para criar um intervalo de tempo. setInterval serve para determinar o intervalo(tempo serve para chamar a função tempo e 1000 = intervalo de mil milisegundos)
}

function pause(){
    clearInterval(interval)
    interval =  undefined
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('tempo').innerText='00:00:00'
    interval = undefined
}

function tempo(){
    sec++
    if(sec==60) {
        min++
        sec=0
    }if(min==60) {
        hour++
        min=0
    } 
    document.getElementById('tempo').innerText=adicionarumdigitonafrente(hour)+':'+adicionarumdigitonafrente(min)+':'+adicionarumdigitonafrente(sec)
}