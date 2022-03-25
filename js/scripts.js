const bordeSuperior = document.getElementById("bordeSuperior");
const bordeInferior = document.getElementById("bordeInferior");

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.add("bg-dark")
        bordeInferior.classList.add("stickyDropDown");
        bordeSuperior.classList.add("stickyDropDown");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("bg-dark");
        bordeInferior.classList.remove("stickyDropDown");
        bordeSuperior.classList.remove("stickyDropDown");
    }
}


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
