class Activity {
    constructor(nombre, descripcion, imgUrl) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
    }

    agregarActividad(activity) {
        this.activities.push(activity);
    }

    obtenerActividades() {
        return this.activities;
    }
}

const repo = new Repository();

const contenedor = document.querySelector("#contenedor") || document.body; // si no existe contenedor en HTML, usamos body
const boton = document.getElementById("boton");

function crearTarjeta(activity) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const titulo = document.createElement("h3");
    titulo.innerHTML = activity.nombre;

    const descripcion = document.createElement("p");
    descripcion.innerHTML = activity.descripcion;

    const imagen = document.createElement("img");
    imagen.src = activity.imgUrl;
    imagen.alt = activity.nombre;
    imagen.style.width = "150px"; 

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(imagen);

    return tarjeta;
}

function mostrarActividades() {
    contenedor.innerHTML = "";
    repo.obtenerActividades().forEach(act => {
        const tarjeta = crearTarjeta(act);
        contenedor.appendChild(tarjeta);
    });
}

function handlerAgregarActividad(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const imgUrl = document.getElementById("url").value;

    if (!nombre || !descripcion || !imgUrl) {
        alert("Por favor completa todos los campos");
        return;
    }

    const nuevaActividad = new Activity(nombre, descripcion, imgUrl);
    repo.agregarActividad(nuevaActividad);

    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("url").value = "";

    mostrarActividades();
}

boton.addEventListener("click", handlerAgregarActividad);






