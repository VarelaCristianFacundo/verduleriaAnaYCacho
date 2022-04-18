class ProductoCarrito{
    constructor (...prod){
        this.descripcion = prod[0];
        this.descuento = prod[1];
        this.imagen = prod[2];
    }
}

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
        <td>
            <button class="btn btnBorrar btn-dark" data-nombre='${JSON.stringify(producto)}'>X</button>
        </td>
        `


        divCard.innerHTML = fila;
        fragmentProductos.appendChild(divCard);
    });
    tabla.appendChild(fragmentProductos);
}

const btnsBorrar = document.getElementsByClassName("btnBorrar");


const validacionNombre = localStorage.getItem("nombre");
if (validacionNombre != null) {
    usuario.insertAdjacentText("afterbegin", localStorage.getItem("nombre"))
}
else {
    usuario.insertAdjacentText("afterbegin", "Login")
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
    }).then(function () {
        window.location = "./fyv.html";
    });
}

function removerProducto() {    
    swal({
        title: "Producto Removido!",
        text: "Ha removido el producto del carrito!",
        icon: "info",
        button: "Gracias!",
    }).then(function () {
        window.location = "./micarrito.html";
    });
}

function sacarProducto(e) {
    const { desc } = e.target.dataset;
    const productoSeleccionado = JSON.stringify(desc);
    console.log(productoSeleccionado);
}



[].forEach.call(btnsBorrar, element => {
    element.onclick = (e) => {             
        const carritoActualizado = [];
        const {nombre} = e.target.dataset;                      
        const productoSeleccionado = JSON.parse(nombre);

        const prodCarrito = new ProductoCarrito(productoSeleccionado.descripcion, productoSeleccionado.descuento, productoSeleccionado.image); 
                   
        carrito.forEach ((prod) => {
            if (prodCarrito.descripcion != prod.descripcion)   
                carritoActualizado.push(prod);
        })
        localStorage.removeItem("productosCarrito");
        localStorage.setItem ("productosCarrito", JSON.stringify(carritoActualizado));
        removerProducto();

        // Array para guardar los productos del carrito
        // const arrayProductos = JSON.parse(localStorage.getItem ("productosCarrito")) || [];
        // arrayProductos.push(prodCarrito);
        numCarrito.textContent = arrayProductos.length;
        
                      
        
    }
});