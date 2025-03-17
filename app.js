// Arrar para declarar los nombres de amigos.

let amigos =[];

// Función para agregar un amigo.
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    // Validar que el campo este vacio
    if (nombre === ""){
        alert("Por favor, inserte un nombre");
        return; // Detiene la ejecucion de la función
    }
    // Validar que el nombre no este duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }

    // Agregar el nombre al array de amigos.
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrasda
    inputAmigo.ariaValu = "";
    // Actualizar la lista en el HTML
    actualizarLista();
}