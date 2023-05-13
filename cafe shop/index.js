function showButton(card){
    var button = card.querySelector("button");
    button.classList.remove('hidden');
}


function hideButton(card){
    var button = card.querySelector("button");
    button.classList.add('hidden');
}


var modal = document.getElementById("modal");
var openModalTextA = document.getElementById("openModalTextA");
var openModalTextB = document.getElementById("openModalTextB")
var closeBtn = document.getElementsByClassName("close")[0];
var closeButton = document.getElementsByClassName("close-button")[0];

openModalTextA.onclick = function(){
    modal.style.display = "block";
    closeButton.style.display = "inline-block";
}

openModalTextB.onclick = function(){
    modal.style.display = "block";
    closeButton.style.display = "inline-block";
}

closeBtn.onclick = function(){
    modal.style.display = "none";
    closeButton.style.display = "none";
}



closeButton.onclick = function(){
    modal.style.display = "none";
    closeButton.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
        closeButton.style.display = "none";
    }

}
