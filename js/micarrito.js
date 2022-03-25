const carrito = JSON.parse(localStorage.getItem("productosCarrito"));

cargarCarrito ("tabla");

function cargarCarrito (id){
    
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