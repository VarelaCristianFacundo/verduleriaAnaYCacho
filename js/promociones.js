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