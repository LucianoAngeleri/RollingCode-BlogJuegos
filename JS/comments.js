const formulario = document.getElementById("formComentario");

const nombre = document.getElementById("nombreComentario");
const comentario = document.getElementById("comentario");

nombre.addEventListener("input", validateName);
comentario.addEventListener("input", validateComment);

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateName() && validateComment()) {
    addComment(nombre.value, comentario.value);
    document.getElementById("formComentario").reset();
  } else {
    nombre.reportValidity();
    comentario.reportValidity();
  }
});

function addComment(nombre, comentario) {
  const parentElement = document.getElementById("list-commets");
  const childElement = document.createElement("li");
  const element = parentElement.appendChild(childElement);

  element.innerHTML = `<div class="card mb-3 shadow rounded-4">
  <div class="card-body">
    <div class="d-flex flex-row align-items-baseline gap-3">
      <i class="bi bi-person-circle fs-1"></i>
      <h5 class="card-title">${nombre}</h5>
    </div>
    <p class="card-text">
      <i class="bi bi-quote fs-3"></i>
      ${comentario}
    </p>
    <p class="card-text text-end">
      <small class="text-muted">Last updated 3 mins ago</small>
    </p>
  </div>
</div>`;
}

function validateName() {
  if (nombre.validity.valueMissing) {
    nombre.setCustomValidity("Debe ingresar un nombre");
    return false;
  } else {
    nombre.setCustomValidity("");
    return true;
  }
}

function validateComment() {
  if (comentario.validity.valueMissing) {
    comentario.setCustomValidity("Debe ingresar un comentario");
    return false;
  } else {
    comentario.setCustomValidity("");
    return true;
  }
}
