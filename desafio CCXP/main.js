function addRedBorder(id)
{
    Element = document.querySelector("#" + id);
    Element.style.border = "5px solid red";
}

//addRedBorder("sexta");

function highlightCard(selector)
{
    var Element = document.querySelector(selector);
    Element.classList.toggle("card-highlight");
}