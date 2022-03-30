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
        // <td>${producto.descuento}</td>
        // <td>
        //     <button class="btn btnAgregar btn-dark">
        //         <i class="bi-trash me-1" data-desc=${producto.descripcion} id="borrar"></i>
        //     </button>
        // </td>


        divCard.innerHTML = fila;
        fragmentProductos.appendChild(divCard);
    });
    tabla.appendChild(fragmentProductos);
}


var borrar = document.getElementById("borrar");

// usuario.insertAdjacentText ("afterbegin", localStorage.getItem("nombre"));

// usuario.onmouseover = openDoor;
// usuario.onmouseleave = closeDoor;
// borrar.onclick = sacarProducto;


function vaciarCarrito() {
    localStorage.removeItem("productosCarrito");
    swal({
        title: "Carrito Vacio!",
        text: "Ha removido todos los productos del carrito!",
        icon: "success",
        button: "Gracias!",
    });
}



function sacarProducto(e) {
    const { desc } = e.target.dataset;
    const productoSeleccionado = JSON.stringify(desc);
    console.log(productoSeleccionado);
    // localStorage.removeItem("nombre");
}