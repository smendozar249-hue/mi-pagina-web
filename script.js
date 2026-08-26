// =========================
// CARRITO
// =========================

let carrito = [];


// Agregar producto
function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarContador();

    alert(nombre + " fue agregado al carrito 💗");
}


// Actualizar contador
function actualizarContador() {

    const contador = document.getElementById("contador");

    contador.textContent = carrito.length;
}


// Mostrar carrito
function mostrarCarrito() {

    const modal = document.getElementById("carritoModal");

    modal.style.display = "block";

    actualizarCarrito();
}


// Cerrar carrito
function cerrarCarrito() {

    const modal = document.getElementById("carritoModal");

    modal.style.display = "none";
}


// Actualizar contenido del carrito
function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");

    const totalElemento = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;


    if (carrito.length === 0) {

        lista.innerHTML =
            "<p>Tu carrito está vacío 💕</p>";

        totalElemento.textContent =
            "Total: $0";

        return;
    }


    carrito.forEach((producto, index) => {

        total += producto.precio;

        const item = document.createElement("div");

        item.classList.add("cart-item");

        item.innerHTML = `
            <span>${producto.nombre}</span>

            <span>
                $${producto.precio.toLocaleString("es-CO")}
                <button onclick="eliminarProducto(${index})">
                    ❌
                </button>
            </span>
        `;

        lista.appendChild(item);

    });


    totalElemento.textContent =
        "Total: $" + total.toLocaleString("es-CO");
}


// Eliminar producto
function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarContador();

    actualizarCarrito();
}


// =========================
// FINALIZAR COMPRA
// =========================

function finalizarCompra() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío 💕");

        return;
    }

    alert(
        "¡Gracias por tu compra en Glam Beauty! 💄💗"
    );

    carrito = [];

    actualizarContador();

    cerrarCarrito();
}


// =========================
// BUSCADOR
// =========================

function buscarProducto() {

    const texto =
        document.getElementById("buscador")
        .value
        .toLowerCase();

    const productos =
        document.querySelectorAll(".product-card");


    productos.forEach(producto => {

        const nombre =
            producto
            .getAttribute("data-name")
            .toLowerCase();

        if (nombre.includes(texto)) {

            producto.style.display = "block";

        } else {

            producto.style.display = "none";

        }

    });
}


// =========================
// FORMULARIO
// =========================

function enviarFormulario(event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value;

    alert(
        "¡Gracias, " +
        nombre +
        "! 💗 Hemos recibido tu mensaje."
    );

    document.querySelector("form").reset();
}


// =========================
// CERRAR MODAL AL HACER
// CLIC FUERA
// =========================

window.onclick = function(event) {

    const modal =
        document.getElementById("carritoModal");

    if (event.target === modal) {

        cerrarCarrito();

    }

};