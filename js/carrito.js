// Obtener carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Actualizar contador en el header
function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  if (contador) contador.textContent = carrito.length;
}
actualizarContador();

// Agregar productos al carrito (si existen botones)
document.querySelectorAll(".agregar-carrito").forEach(btn => {
  btn.addEventListener("click", () => {
    const producto = {
      nombre: btn.dataset.nombre,
      precio: parseInt(btn.dataset.precio),
      img: btn.dataset.img
    };

    carrito.push(producto);
    guardarCarrito();
    actualizarContador();

    btn.classList.add("boton-agregado");
    setTimeout(() => btn.classList.remove("boton-agregado"), 400);

    alert("Producto agregado al carrito 🛒✨");
  });
});
