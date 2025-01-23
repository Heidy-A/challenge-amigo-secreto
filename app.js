// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // 1. Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // trim() elimina espacios en blanco
    
    // 2. Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return; // Sale de la función si el nombre está vacío
    }
    
    // 3. Agregar el nombre al array
    listaDeAmigos.push(nombreAmigo);
    
    // 4. Mostrar el nombre en la lista visual
    const listaVisual = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombreAmigo;
    listaVisual.appendChild(nuevoAmigo);
    
    // 5. Limpiar el input después de agregar
    inputAmigo.value = '';
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // 1. Verificar que haya amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert('Debes agregar al menos un amigo para realizar el sorteo');
        return;
    }
    
    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // 3. Obtener el amigo seleccionado
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El nombre del amigo secreto es: ${amigoSeleccionado}</li>`;
}
