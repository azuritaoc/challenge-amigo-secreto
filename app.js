
let listaAmigos  = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
// Funcion Agregar amigo"
function agregarAmigo(){
    // Declarando variables dentro de la función
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    // Validar que el nombre no este vacio
    if(!inputAmigo.value){
        alert("Por favor , Ingrese un nombre.");
        return;
    }

     // Validar que el nombre no se duplique
    if(listaAmigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya se encuentra en la lista`);
        inputAmigo.value = "";
        return;
    }
    
    // Agrega el nombre al array de listaAmigos.
    listaAmigos.push(inputAmigo.value);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    //Actualizar lista en el html
    actualizarLista();
}
