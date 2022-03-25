const listaFyV = [{
    image: "../multimedia/frutas/mandarina.jpg",
    descripcion: "Mandarina",
    precio: 300,
    descuento: 200
},
{
    image: "../multimedia/frutas/manzana.jpg",
    descripcion: "Manzana",
    precio: 500,
    descuento: 400
},
{
    image: "../multimedia/frutas/naranja.jpg",
    descripcion: "Naranja",
    precio: 1000,
    descuento: 800
},
{
    image: "../multimedia/verduras/tomate.jpg",
    descripcion: "Tomate",
    precio: 340,
    descuento: 280
},
{
    image: "../multimedia/verduras/zanahoria.jpg",
    descripcion: "Zanahoria",
    precio: 300,
    descuento: 200
},
{
    image: "../multimedia/verduras/berenjena.jpg",
    descripcion: "Berenjena",
    precio: 500,
    descuento: 400
},
{
    image: "../multimedia/verduras/morrones.jpg",
    descripcion: "Morrones",
    precio: 1000,
    descuento: 800
},
{
    image: "../multimedia/frutas/banana.jpg",
    descripcion: "Banana",
    precio: 340,
    descuento: 280
}];

// document.body.onload = addElement;
const divFyV = document.getElementById("listaFyV");

const fragmentFyV = document.createDocumentFragment();

for (let i = 0; i < listaFyV.length; i++) {
    const divCard = document.createElement("div");
    divCard.classList.add("card", "col-lg-2", "col-md-5");

    const contentCard = `
    <img src="${listaFyV[i].image}" class="card-img-top" alt="...">
    <div class="card-body titulosCards">
        <h3 class="card-title titulosCards">${listaFyV[i].descripcion}</h3>
        <span class="text-muted text-decoration-line-through">$${listaFyV[i].precio}</span>
        <h5 class="card-text titulosCards">$${listaFyV[i].descuento}</h5>
        <a href="#" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar
            al Carrito</a>
    </div>
    `

    divCard.innerHTML = contentCard;
    fragmentFyV.appendChild(divCard);
}

divFyV.appendChild(fragmentFyV);


let edadVerificada = false;


if (localStorage.getItem("nombre") == null) {
    do {
        let nombreIngresado = prompt("Ingrese su nombre");
        let apellidoIngresado = prompt("Ingrese su apellido");
        let output = "Bienvenido" + " " + nombreIngresado + " " + apellidoIngresado;

        mostrarPorPantalla(output);

        // Calculo edad de la persona, solicitando fecha de nacimiento
        let diaNacimiento = prompt("Ingrese su día de nacimiento");
        let mesNacimiento = prompt("Ingrese su mes de nacimiento");
        let anioNacimiento = prompt("Ingrese su año de nacimiento");

        // Armo la cadena de string para calcular la edad
        let cumple = diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento;


        // Llamo a la función para calcular la edad
        var age = calculateAge(cumple);

        // Llamo a la función para verificar si es mayor o menor de edad
        if (edadVerificada = verificoEdad(age))
            localStorage.setItem("nombre", nombreIngresado);

        console.log(edadVerificada);

    } while (edadVerificada != true)

}






function mostrarPorPantalla(output) {
    alert(output);
}

// Función que calcula la edad en base a la fecha de nacimiento
function calculateAge(birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function verificoEdad(age) {
    // Condicionales para devolver la edad y si es mayor o menor de edad.
    if (age >= 18 && age < 120) {
        mostrarPorPantalla("Usted tiene: " + age + " años y es mayor de edad. Bienvenido !");
        return true;
    }
    else if (age < 18) {
        mostrarPorPantalla("Usted tiene: " + age + " años y es menor de edad. Página no permitida para menores.");
        return false;
    }
    else {
        mostrarPorPantalla("Verifique los datos ingresados debido a que no puede tener " + age + " años.");
        return false;
    }
}
