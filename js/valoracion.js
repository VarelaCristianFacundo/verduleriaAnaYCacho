const validacionNombre = localStorage.getItem("nombre");
console.log(validacionNombre);
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