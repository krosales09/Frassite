let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaCarrito.appendChild(li);
    });
}
