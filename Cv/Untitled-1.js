
document.getElementById('boton').onclick =  function () {
    var nombreCompleto = document.getElementById('nombre').value;
    document.getElementById("demo").innerHTML = "¡Gracias " + nombreCompleto + "!, a la brevedad me comunicare con usted.";
}