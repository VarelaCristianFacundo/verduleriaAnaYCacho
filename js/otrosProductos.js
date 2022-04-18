// Constructor de producto
class OtrosProductos {
    constructor(image, descripcion, precio, descuento) {
        this.image = image;
        this.descripcion = descripcion;
        this.precio = precio;
        this.descuento = descuento;
    }
}

class ProductoCarrito {
    constructor(...prod) {
        this.descripcion = prod[0];
        this.descuento = prod[1];
        this.imagen = prod[2];
    }
}

// Array de productos hardcodeado
const otrosProductos = [
    new OtrosProductos("../multimedia/otrosProductos/aceite450.jpg", "Aceite", 300, 200),
    new OtrosProductos("../multimedia/otrosProductos/aceiteOliva450.jpg", "Oliva", 500, 400),
    new OtrosProductos("../multimedia/otrosProductos/detergente450.jpg", "Detergente", 1000, 800),
    new OtrosProductos("../multimedia/otrosProductos/harina450.jpg", "Harina", 340, 280),
    new OtrosProductos("../multimedia/otrosProductos/jugo450.jpg", "Jugo", 300, 200),
    new OtrosProductos("../multimedia/otrosProductos/lataCoca450.jpg", "CocaCola", 500, 400),
    new OtrosProductos("../multimedia/otrosProductos/lavandina450.jpg", "Lavandina", 1000, 800),
    new OtrosProductos("../multimedia/otrosProductos/yerba450.jpg", "Yerba", 340, 280)
];


// Array de productos para traer desde API
const otrosProductosApi = [];


// Traigo valores de los productos mediante la API de precios cuidados:
// https://d3e6htiiul5ek9.cloudfront.net/prod/productos?id_categoria=01&array_sucursales=10-2-109&limit=100 (// &limit = Cantidad de productos que quiero traer, en este caso 12)
// Al pasar el ID a la siguiente API obtengo la imagen:
// https://imagenes.preciosclaros.gob.ar/productos/"ID".jpg

async function getProductos (){
    let productoApi = await fetch ("https://d3e6htiiul5ek9.cloudfront.net/prod/productos?id_categoria=07&array_sucursales=10-2-109&limit=12")
    const data = await productoApi.json();
    // console.log(data.productos);
    
    data.productos.forEach ((prodApi) => {
        otrosProductosApi.push (
            new OtrosProductos (
                "https://imagenes.preciosclaros.gob.ar/productos/"+prodApi.id+".jpg",
                prodApi.nombre, 
                parseInt (prodApi.precioMax), 
                parseInt (prodApi.precioMin))
        )

    })
    // Llamo a la función cargarProductos y le paso el Array generado mediante el fetch()
    cargarProductos(otrosProductosApi);
    console.log(otrosProductosApi);
    // cargarProductos(otrosProductos)
    // console.log(otrosProductos);
}

// Llamo a la función para hacer el fetch de los productos
getProductos();

// Esta función funciona para los productos del array declarado arriba otrosProductos[]
// cargarProductos(otrosProductos);


// document.body.onload = addElement;
const productosElement = document.getElementById("otrosProductos");

// contador de carrito
const numCarrito = document.getElementById("numCarrito");

let contadorVeces = 0;

// Valido nombre y lo pusheo al local storage
const validacionNombre = localStorage.getItem("nombre");
if (validacionNombre != null) {
    usuario.insertAdjacentText("afterbegin", localStorage.getItem("nombre"))
}
else {
    usuario.insertAdjacentText("afterbegin", "Login")
}

// Movimiento visual de la puerta al pasar el raton por encima
usuario.onmouseover = openDoor;
usuario.onmouseleave = closeDoor;

// desloguearse mediante onclick
usuario.onclick = desloguearse;

// Función para cargar los productos, recibiendo un array como parámetro
function cargarProductos(miLista) {
    const fragmentProductos = document.createDocumentFragment();

    while (productosElement.hasChildNodes()) {
        productosElement.removeChild(productosElement.firstChild);
    }

    for (let i = 0; i < miLista.length; i++) {
        const divCard = document.createElement("div");
        divCard.classList.add("card", "col-lg-2", "col-md-5");

        const { image, descripcion, precio, descuento } = miLista[i];
        {/* <img src="${image}" class="card-img-top" alt="..."></img> */}
        
        const contentCard = `
        <object data="${image}" type="image/jpeg">
            <img src="https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg" style=margin-left:35%;margin-top:30%;margin-bottom:40% alt="No hay imagen"/>
        </object>
        
        <div class="card-body titulosCards">
            <h3 class="card-title titulosCards">${descripcion}</h3>
            <span class="text-muted text-decoration-line-through">$${precio}</span>
            <h5 class="card-text titulosCards">$${descuento}</h5>
            <button class="btn btnAgregar btn-dark" data-nombre='${JSON.stringify(miLista[i])}'>Agregar
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
            const { nombre } = e.target.dataset;     
            console.log(nombre);       
            const productoSeleccionado = JSON.parse(nombre);
            console.log (productoSeleccionado);

            const prodCarrito = new ProductoCarrito(productoSeleccionado.descripcion, productoSeleccionado.descuento, productoSeleccionado.image);
            
            // Array para guardar los productos del carrito
            const arrayProductos = JSON.parse(localStorage.getItem("productosCarrito")) || [];

            arrayProductos.push(prodCarrito);
            numCarrito.textContent = arrayProductos.length;

            localStorage.setItem("productosCarrito", JSON.stringify(arrayProductos));
            Toastify({
                text: "IR AL CARRITO",
                className: "success",
                duration: 3000,
                destination: "../pages/micarrito.html",
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(90deg, #323232 55%, #e63946)",
                }
            }).showToast();
        }
    });
}