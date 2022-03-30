const loginButton = document.getElementById("login");
const loginSection = document.getElementById("loginSection");

loginButton.onclick = () => {
    const nombreUsuario = document.getElementById("user").value;
    const passwordUsuario = document.getElementById("password").value;    
    
    if (passwordUsuario == "varela"){
        loginSection.classList.add("hiddenVisibility");
        localStorage.setItem("nombre", nombreUsuario);
        swal({
            title: "Bienvenido !",
            text: "Las mejores ofertas por estar suscripto!",
            icon: "success",
            button: "Acceder a la tienda"
        }).then(function() {
            window.location = "./pages/fyv.html";
        });
    }
    else{

    }
    
}