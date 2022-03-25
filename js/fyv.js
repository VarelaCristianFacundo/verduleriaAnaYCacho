class ProductoVerduleria{
    constructor (image, descripcion, precio, descuento, tipo){
        this.image = image;
        this.descripcion = descripcion;
        this.precio = precio;
        this.descuento = descuento;
        this.tipo = tipo;
    }
}

class ProductoCarrito{
    constructor (...prod){
        this.descripcion = prod[0];
        this.descuento = prod[1];
        this.imagen = prod[2];
    }
}
const listaFyV = [
    new ProductoVerduleria("../multimedia/frutas/mandarina.jpg","Mandarina",300,200,"fruta"),
    new ProductoVerduleria("../multimedia/frutas/manzana.jpg","Manzana",500,400,"fruta"),
    new ProductoVerduleria("../multimedia/frutas/naranja.jpg","Naranja",1000,800,"fruta"),
    new ProductoVerduleria("../multimedia/verduras/tomate.jpg","Tomate",340,280,"verdura"),
    new ProductoVerduleria("../multimedia/verduras/zanahoria.jpg","Zanahoria",300,200,"verdura"),
    new ProductoVerduleria("../multimedia/verduras/berenjena.jpg","Berenjena",500,400,"verdura"),
    new ProductoVerduleria("../multimedia/verduras/morrones.jpg","Morrones",1000,800,"verdura"),
    new ProductoVerduleria("../multimedia/frutas/banana.jpg","Banana",340,280,"fruta")
];
  
// document.body.onload = addElement;
const divFyV = document.getElementById("listaFyV");

// Boton para filtro
const botonFrutas = document.getElementById("frutas")
const botonVerduras = document.getElementById("verduras")

// contador de carrito
const numCarrito = document.getElementById("numCarrito");

// Array para guardar los productos del carrito
const arrayProductos = [];

let contadorVeces = 0;

cargarProductos (listaFyV);

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13)         
        cargarProductos (listaFyV);
}

function mensajeTodos(){
    contadorVeces = contadorVeces +1;
    if (contadorVeces == 1)    
        alert ("Presione Enter para volver a todos los productos")    
}

botonFrutas.onclick = () => {
    contadorVeces = 0;
    
    const frutas = [];
    listaFyV.map((el) => {
        if (el.tipo == "fruta")
            frutas.push(el)
    });

    cargarProductos(frutas);
}


botonVerduras.onclick = () => {
    contadorVeces = 0;
    
    const verduras = [];
    listaFyV.map((el) => {
        if (el.tipo == "verdura")
            verduras.push(el)
    });

    cargarProductos(verduras);    
}


function cargarProductos (miLista){
    const fragmentFyV = document.createDocumentFragment();

    while (divFyV.hasChildNodes()) {
        divFyV.removeChild(divFyV.firstChild);
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
        fragmentFyV.appendChild(divCard);
    }

    divFyV.appendChild(fragmentFyV);

    // Traigo los botones con la classname y capturo el evento onclick, para sumar 1 al carrito.
    const btnsAgregar = document.getElementsByClassName("btnAgregar");

    [].forEach.call(btnsAgregar, element => {
        element.onclick = (e) => {             
            const {nombre} = e.target.dataset;                      
            const productoSeleccionado = JSON.parse(nombre);

            const prodCarrito = new ProductoCarrito(productoSeleccionado.descripcion, productoSeleccionado.descuento, productoSeleccionado.image);            
        
            arrayProductos.push(prodCarrito);
            numCarrito.textContent = arrayProductos.length;

            localStorage.setItem ("Productos Carrito", JSON.stringify(arrayProductos));              
            
        }
    });
}