function showButton(card){
    var button = card.querySelector("button");
    button.classList.remove('hidden');
}


function hideButton(card){
    var button = card.querySelector("button");
    button.classList.add('hidden');
}


var modal = document.getElementById("modal");
var openModalText = document.getElementById("openModalText");
var closeBtn = document.getElementById("close");
var closeButton = document.getElementById("close-button");

openModalText.onclick = function(){
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
