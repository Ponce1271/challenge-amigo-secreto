// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agregar un amigo a la lista
function agregarAmigo() {    
    let ingresarAmigo = document.getElementById("amigo").value.trim();
    if (ingresarAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    
    amigos.push(ingresarAmigo);
    
    mostrarListaAmigos();
    
    document.getElementById("amigo").value = "";

    console.log(amigos)
}

//Mostrar la lista de amigos en pantalla
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";    
    for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement("li"); 
        nuevoAmigo.textContent = amigos[i]; 
        lista.appendChild(nuevoAmigo); 
    }
}

//Sortear un amigo al azar
function sortearAmigo() {    
    if (amigos.length < 1) {
        alert("No hay amigos en la lista para sortear");
        return;
    }    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);    
    let amigoSorteado = amigos[indiceAleatorio];

    console.log(indiceAleatorio)
    console.log(amigoSorteado)
   
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
