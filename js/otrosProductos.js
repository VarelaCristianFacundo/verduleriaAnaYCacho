class OtrosProductos{
    constructor (image, descripcion, precio, descuento){
        this.image = image;
        this.descripcion = descripcion;
        this.precio = precio;
        this.descuento = descuento;
    }
}

class ProductoCarrito{
    constructor (...prod){
        this.descripcion = prod[0];
        this.descuento = prod[1];
        this.imagen = prod[2];
    }
}
const otrosProductos = [
    new OtrosProductos("../multimedia/otrosProductos/aceite450.jpg","Aceite",300,200),
    new OtrosProductos("../multimedia/otrosProductos/aceiteOliva450.jpg","Oliva",500,400),
    new OtrosProductos("../multimedia/otrosProductos/detergente450.jpg","Detergente",1000,800),
    new OtrosProductos("../multimedia/otrosProductos/harina450.jpg","Harina",340,280),
    new OtrosProductos("../multimedia/otrosProductos/jugo450.jpg","Jugo",300,200),
    new OtrosProductos("../multimedia/otrosProductos/lataCoca450.jpg","CocaCola",500,400),
    new OtrosProductos("../multimedia/otrosProductos/lavandina450.jpg","Lavandina",1000,800),
    new OtrosProductos("../multimedia/otrosProductos/yerba450.jpg","Yerba",340,280)
];
  
  
// document.body.onload = addElement;
const productosElement = document.getElementById("otrosProductos");


// contador de carrito
const numCarrito = document.getElementById("numCarrito");

let contadorVeces = 0;

cargarProductos (otrosProductos);

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

function cargarProductos (miLista){
    const fragmentProductos = document.createDocumentFragment();

    while (productosElement.hasChildNodes()) {
        productosElement.removeChild(productosElement.firstChild);
    }

    for (let i = 0; i < miLista.length; i++) {
        const divCard = document.createElement("div");
        divCard.classList.add("card", "col-lg-2", "col-md-5");

        const {image, descripcion, precio, descuento} = miLista[i];
    
        const contentCard = `
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body titulosCards">
            <h3 class="card-title titulosCards">${descripcion}</h3>
            <span class="text-muted text-decoration-line-through">$${precio}</span>
            <h5 class="card-text titulosCards">$${descuento}</h5>
            <button class="btn btnAgregar btn-dark" data-nombre=${JSON.stringify(miLista[i])}>Agregar
                al Carrito</button>
        </div>
        `
    
        divCard.innerHTML = contentCard;
        fragmentProductos.appendChild(divCard);
    }

    productosElement.appendChild(fragmentProductos);

    // Traigo los botones con la classname y capturo el evento onclick, para sumar 1 al carrito.
    const botonAgregar = document.getElementsByClassName("btnAgregar");

    [].forEach.call(botonAgregar, element => {
        element.onclick = (e) => {             
            const {nombre} = e.target.dataset;                      
            const productoSeleccionado = JSON.parse(nombre);

            const prodCarrito = new ProductoCarrito(productoSeleccionado.descripcion, productoSeleccionado.descuento, productoSeleccionado.image); 
                       
            // Array para guardar los productos del carrito
            const arrayProductos = JSON.parse(localStorage.getItem ("productosCarrito")) || [];

            arrayProductos.push(prodCarrito);
            numCarrito.textContent = arrayProductos.length;

            localStorage.setItem ("productosCarrito", JSON.stringify(arrayProductos));              
            Toastify({
                text: "IR AL CARRITO",
                className: "info",
                duration: 3000,
                destination: "../pages/micarrito.html",
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
        }
    });
}