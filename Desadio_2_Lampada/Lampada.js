var lamp = window.document.getElementById('lampada')


    function estaQuebrada(){
        return lamp.src.indexOf('img/Quebrada.svg') > -1;
    }

    function ligar(){
        if (!estaQuebrada()){
            lamp.src = "img/ligada.svg"
        }
        
        
    }

    function desligar(){
        if (!estaQuebrada()){
            lamp.src = "img/desligada.svg"
        }
        
    }

    lamp.addEventListener ('click', quebrar)
    function quebrar(){
        lamp.src = "img/Quebrada.svg"
    }



    