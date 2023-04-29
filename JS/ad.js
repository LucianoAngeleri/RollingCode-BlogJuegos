//Obtenemos mediante ID los elementos HTML del modal de anuncio
const modalAd = new bootstrap.Modal(document.getElementById("modalAd"))

//Definimos una funcion para mostrar el modal de anuncio
function mostrarModal() {
    modalAd.show()
}
//Usamos setTimeout para mostrar el anuncio luego de 4 segundos
setTimeout(mostrarModal, 4000);