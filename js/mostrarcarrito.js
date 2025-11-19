let listaCarrito = document.getElementById("lista-carrito");
let totalPrecio = document.getElementById("total-precio");
let btnVaciar = document.getElementById("vaciar-carrito");

function mostrarCarrito() {
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = `<p>El carrito está vacío 🛍️</p>`;
    totalPrecio.textContent = "$0";
    return;
  }

  carrito.forEach((item, index) => {
    listaCarrito.innerHTML += `
      <div class="item-carrito">
        <img src="${item.img}" alt="${item.nombre}">
        <p>${item.nombre}</p>
        <p>$${item.precio}</p>
        <button class="btn-danger borrar-item" data-index="${index}">X</button>
      </div>
    `;
  });

  const total = carrito.reduce((sum, prod) => sum + prod.precio, 0);
  totalPrecio.textContent = `$${total}`;

  // Botones borrar
  document.querySelectorAll(".borrar-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      carrito.splice(index, 1);
      guardarCarrito();
      actualizarContador();
      mostrarCarrito();
    });
  });
}

mostrarCarrito();

// Vaciar carrito
btnVaciar.addEventListener("click", () => {
  carrito = [];
  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
});
