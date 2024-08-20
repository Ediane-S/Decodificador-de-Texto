var button = document.getElementById("trocar");

button.addEventListener("click", function () {

    var container = document.getElementById("segundaSection");

    if (container.style.display === "none") {
        container.style.display = "block"
    } else {
        container.style.display = "none"
    }

});

var inputText = document.querySelector("#inputTexto");
var outText = document.querySelector("#outTexto");

function criptografar() {
    var texto = inputText.value;

    var resulCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('outTexto').innerHTML = resulCripto 
}

function descriptografar() {
    var texto = inputText.value;

    var resulDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('outTexto',"inputTexto").innerHTML = resulDescripto
}

function copiar() {
    var textoCop = document.getElementById('outTexto');
 
    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado!");
 }