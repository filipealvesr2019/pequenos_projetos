const ingressos = [];


function addRedBorder(id)
{
    Element = document.querySelector(`#${id}`);
    Element.style.border = "5px solid red";
}

//addRedBorder("sexta");

function highlightCard(cardID)
{
    var Element = document.querySelector(cardID);
    Element.classList.toggle("card-highlight");
}

function checkKeyBoardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var name = event.code;

        alert(`tecla pressionada ${name} \r\n valor do keycode: ${code}`);
    }, false);
}

function addKeyBoardEventListener()
{
    document.addEventListener('keydown', (event) => {
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'digite1'){
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if(code == 'digite2'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if(code == 'digite3'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if(code == 'digite4'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false);
}

//function selectCard(selector)
 selectCard = (selector) =>
{
    var Element = document.querySelector(selector);
    Element.classList.toggle("card-Selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

 //function showSelectedCards()
CARDS = () =>
{
    if(ingressos.length > 0) alert("Ingressos Selecionados: " + ingressos);
}
addKeyBoardEventListener();