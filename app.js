const enAdopcion = [
  {
    nombre: "Trufa",
    edad: "10 años",
    descripcion: "Súper mimosa y amorosa",
    imagen: "https://i.imgur.com/PQUMkyU.jpeg"
  }
];

const adoptados = [
  {
    nombre: "Togo",
    descripcion: "Hoy vive feliz con su familia 💛",
    imagen: "https://via.placeholder.com/250"
  }
];

function render(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);

  lista.forEach(perro => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${perro.imagen}">
        <h3>${perro.nombre}</h3>
        <p>${perro.descripcion}</p>
        <a href="https://wa.me/5491135746150">
          <button>Consultar 💛</button>
        </a>
      </div>
    `;
  });
}

render(enAdopcion, "adopcion-container");
render(adoptados, "adoptados-container");
