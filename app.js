const enAdopcion = [
  {
    nombre: "Miel",
    edad: "8 meses",
    descripcion: "Súper mimosa y amorosa",
    imagen: "https://via.placeholder.com/250"
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
    </div>
  `;
});