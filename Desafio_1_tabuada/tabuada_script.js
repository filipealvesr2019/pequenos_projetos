 
function tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')

    var n = Number(num.value)
    var e = Number(end.value)

    var x = 0

    var r = ''

    var res = window.document.getElementById('resposta')
    res.innerHTML = 'A tabuada do '+ n + ' é: <br>';
    

    //document.getElementById('resposta').innerHTML = 'A resposta e: '+ r;

    do{
        r = n*x
        res.innerHTML +=  r + '<br>';
        x++
    }while(x <= e)


}