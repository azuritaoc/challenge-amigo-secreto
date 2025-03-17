
let listaAmigos  = [];
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

// Funcion actualizar la lista de amigo en el contenedor}
function actualizarLista(){
    const ulListaAmigos = document.getElementById("listaAmigos");
    // Limpiar el contenedor actual de la lista
    ulListaAmigos.innerHTML = "";

    // Recorrer array con ciclo for
    for(let i = 0; i<listaAmigos.length;i++){ 
        const li = document.createElement('li'); // Se crea el elemento hijo lista.
        li.textContent = listaAmigos[i]; // Se añade el contenido a la variable de la lista recorrida.
        ulListaAmigos.appendChild(li); // Agrega el elemento hijo al padre listaAmigos.
    }
}

// Funcion Sortear amigo
function sortearAmigo(){
    const ulResultado = document.getElementById("resultado");
    // Validar disponibilidad de amigos.
    if(listaAmigos.length === 0){
        alert("No hay amigos disponible para el sorteo.");
        return;
    }
    // Generar indice aleatorio.
    const random = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    // Mostrar amigo sorteado en html
    ulResultado.innerHTML = `El amigo secreto es <strong> ${amigoSecreto} </strong>` ;  // TextContent solo toma el texto  , y si va etiqueita tmb iria. 
    }