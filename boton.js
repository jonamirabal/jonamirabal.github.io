function mostrar(input)
{
    var img=document.getElementById("titulo1")
    if (input.value=="Ocultar"){
        img.style.visibility="hidden";
        input.value="Mostrar"
    } else
    {
        img.style.visibility="visible"
        input.value="Ocultar"
    }
}

function mostrar2(input)
{
    var img=document.getElementById("titulo2")
    if (input.value=="Ocultar"){
        img.style.visibility="hidden";
        input.value="Mostrar"
    } else
    {
        img.style.visibility="visible"
        input.value="Ocultar"
    }
}