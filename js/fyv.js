class ProductoVerduleria{
    constructor (image, descripcion, precio, descuento, tipo){
        this.image = image;
        this.descripcion = descripcion;
        this.precio = precio;
        this.descuento = descuento;
        this.tipo = tipo;
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

const fragmentFyV = document.createDocumentFragment();
const fragmentFrutas = document.createDocumentFragment();
const fragmentVerduras = document.createDocumentFragment();
let contadorVeces = 0;

for (let i = 0; i < listaFyV.length; i++) {
    const divCard = document.createElement("div");
    divCard.classList.add("card", "col-lg-2", "col-md-5");

    const contentCard = `
    <img src="${listaFyV[i].image}" class="card-img-top" alt="...">
    <div class="card-body titulosCards">
        <h3 class="card-title titulosCards">${listaFyV[i].descripcion}</h3>
        <span class="text-muted text-decoration-line-through">$${listaFyV[i].precio}</span>
        <h5 class="card-text titulosCards">$${listaFyV[i].descuento}</h5>
        <a href="#" class="btn btnAgregar btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar
            al Carrito</a>
    </div>
    `

    divCard.innerHTML = contentCard;
    fragmentFyV.appendChild(divCard);
}

divFyV.appendChild(fragmentFyV);


let edadVerificada = false;

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13) {

        while (divFyV.hasChildNodes()) {
            divFyV.removeChild(divFyV.firstChild);
        }

        
        for (let i = 0; i < listaFyV.length; i++) {
            const divCard = document.createElement("div");
            divCard.classList.add("card", "col-lg-2", "col-md-5");
        
            const contentCard = `
            <img src="${listaFyV[i].image}" class="card-img-top" alt="...">
            <div class="card-body titulosCards">
                <h3 class="card-title titulosCards">${listaFyV[i].descripcion}</h3>
                <span class="text-muted text-decoration-line-through">$${listaFyV[i].precio}</span>
                <h5 class="card-text titulosCards">$${listaFyV[i].descuento}</h5>
                <a href="#" class="btn btnAgregar btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar
                    al Carrito</a>
            </div>
            `
        
            divCard.innerHTML = contentCard;
            fragmentFyV.appendChild(divCard);
        }


        divFyV.appendChild(fragmentFyV);


    }    
}

function mensajeTodos(){
    contadorVeces = contadorVeces +1;
    console.log (contadorVeces)
    if (contadorVeces == 1)
    {        
        alert ("Presione Enter para volver a todos los productos")
    }
}

// Boton para filtro
const botonFrutas = document.getElementById("frutas")
const botonVerduras = document.getElementById("verduras")

botonFrutas.onclick = () => {
    contadorVeces = 0;
    while (divFyV.hasChildNodes()) {
        divFyV.removeChild(divFyV.firstChild);
    }
    const frutas = [];
    listaFyV.map((el) => {
        if (el.tipo == "fruta")
            frutas.push(el)
    });

    for (let i = 0; i < frutas.length; i++) {
        const divCard = document.createElement("div");
        divCard.classList.add("card", "col-lg-2", "col-md-5");

        const contentCard = `
        <img src="${frutas[i].image}" class="card-img-top" alt="...">
        <div class="card-body titulosCards">
            <h3 class="card-title titulosCards">${frutas[i].descripcion}</h3>
            <span class="text-muted text-decoration-line-through">$${frutas[i].precio}</span>
            <h5 class="card-text titulosCards">$${frutas[i].descuento}</h5>
            <a href="#" class="btn btnAgregar btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar
                al Carrito</a>
        </div>
        `

        divCard.innerHTML = contentCard;
        fragmentFrutas.appendChild(divCard);
    }

// Traigo los botones con la classname y capturo el evento onclick, para sumar 1 al carrito.

    divFyV.appendChild(fragmentFrutas);
    const btnsAgregar = document.getElementsByClassName("btnAgregar");

    [].forEach.call(btnsAgregar, element => {
        element.onclick = () => {
            console.log("llegue")
            numCarrito.textContent = parseInt(numCarrito.textContent) + 1;

        }
    });
}


botonVerduras.onclick = () => {
    contadorVeces = 0;
    while (divFyV.hasChildNodes()) {
        divFyV.removeChild(divFyV.firstChild);
    }
    const verduras = [];
    listaFyV.map((el) => {
        if (el.tipo == "verdura")
            verduras.push(el)
    });

    for (let i = 0; i < verduras.length; i++) {
        const divCard = document.createElement("div");
        divCard.classList.add("card", "col-lg-2", "col-md-5");

        const contentCard = `
        <img src="${verduras[i].image}" class="card-img-top" alt="...">
        <div class="card-body titulosCards">
            <h3 class="card-title titulosCards">${verduras[i].descripcion}</h3>
            <span class="text-muted text-decoration-line-through">$${verduras[i].precio}</span>
            <h5 class="card-text titulosCards">$${verduras[i].descuento}</h5>
            <a href="#" class="btn btnAgregar btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar
                al Carrito</a>
        </div>
        `

        divCard.innerHTML = contentCard;
        fragmentVerduras.appendChild(divCard);
    }

    divFyV.appendChild(fragmentVerduras);
    const btnsAgregar = document.getElementsByClassName("btnAgregar");

    [].forEach.call(btnsAgregar, element => {
        element.onclick = () => {
            console.log("llegue")
            numCarrito.textContent = parseInt(numCarrito.textContent) + 1;

        }
    });
}


const numCarrito = document.getElementById("numCarrito");
const btnsAgregar = document.getElementsByClassName("btnAgregar");

[].forEach.call(btnsAgregar, element => {
    element.onclick = () => {
        numCarrito.textContent = parseInt(numCarrito.textContent) + 1;
    }
});
