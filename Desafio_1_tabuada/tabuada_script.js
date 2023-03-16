 
function tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')

    if (num.value.lenght == 0 || end.value.lenght == 0){
        window.alert("comando  invalido tente novamente!");
    }else{
        var n = Number(num.value)
        var e = Number(end.value)

        var x = 0

        var r = ''

        var res = window.document.getElementById('resposta')
        res.innerHTML = 'A tabuada do ' + n + ' é: <br>';


        //document.getElementById('resposta').innerHTML = 'A resposta e: '+ r;

        do {
            r = n * x
            res.innerHTML += x + ' X ' + n + ' = ' + r + '<br>';
            x++
        } while (x <= e)

        window.alert("comando  invalido tente novamente!");
    }

   
  
}