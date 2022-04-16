const carrito = JSON.parse(localStorage.getItem("productosCarrito"));

cargarCarrito("tabla");

function cargarCarrito(id) {

    const fragmentProductos = document.createDocumentFragment();

    const tabla = document.getElementById(id);

    carrito.forEach(producto => {
        const divCard = document.createElement("tr");
        const fila = `                
        <td>${producto.descripcion}</td>
        <td>${producto.descuento}</td>
        <td>
            <img class="mainMiCarrito__estiloTablas" src="${producto.imagen}"
                alt="${producto.descripcion}">
        </td>
        `


        divCard.innerHTML = fila;
        fragmentProductos.appendChild(divCard);
    });
    tabla.appendChild(fragmentProductos);
}

const validacionNombre = localStorage.getItem("nombre");
if (validacionNombre != null)
{
    usuario.insertAdjacentText ("afterbegin", localStorage.getItem("nombre"))
}
else{
    usuario.insertAdjacentText ("afterbegin", "Login")
}

usuario.onmouseover = openDoor;
usuario.onmouseleave = closeDoor;
usuario.onclick = desloguearse;

var borrar = document.getElementById("borrar");


function vaciarCarrito() {
    localStorage.removeItem("productosCarrito");
    swal({
        title: "Carrito Vacio!",
        text: "Ha removido todos los productos del carrito!",
        icon: "info",
        button: "Gracias!",
    }).then(function() {
        window.location = "./fyv.html";
    });
}

function sacarProducto(e) {
    const { desc } = e.target.dataset;
    const productoSeleccionado = JSON.stringify(desc);
    console.log(productoSeleccionado);
}