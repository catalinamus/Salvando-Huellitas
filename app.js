const enAdopcion = [
  {
    nombre: "Trufa",
    edad: 10 años",
    descripcion: "Súper mimosa y amorosa",
    imagen: "https://i.imgur.com/PQUMkyU.jpeg"
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
    <a href="https://wa.me/1135746150">
      <button>Quiero adoptarlo 💛</button>
    </a>
  </div>
`;
  `;
});
