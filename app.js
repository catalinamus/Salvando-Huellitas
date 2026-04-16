const enAdopcion = [
  {
    nombre: "Trufa",
    edad: "10 años",
    descripcion: "Súper mimosa",
    imagen: "https://i.imgur.com/PQUMkyU.jpeg"
  },
  {
    nombre: "Miel",
    edad: "8 meses",
    descripcion: "Amorosa y juguetona",
    imagen: "https://i.imgur.com/1Hlh39a.jpeg"
  },
  {
    nombre: "Panqueque",
    edad: "4 años",
    descripcion: "Resiliente y compañero",
    imagen: "https://i.imgur.com/XXXX.jpg"
  }
];

const contenedor = document.getElementById("adopcion");

enAdopcion.forEach(perro => {
  contenedor.innerHTML += `
    <div class="card">
      <img src="${perro.imagen}">
      <h3>${perro.nombre}</h3>
      <p>${perro.edad}</p>
      <p>${perro.descripcion}</p>
      <a href="https://wa.me/5491135746150">
        <button>Adoptar 💛</button>
      </a>
    </div>
  `;
});
