const formulario = document.getElementById("formComentario");

const nombre = document.getElementById("nombreComentario");
const comentario = document.getElementById("comentario");

nombre.addEventListener("input", validateName);
comentario.addEventListener("input", validateComment);

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  validateName();
  validateComment();

  addComment(nombre.value, comentario.value);
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

  document.getElementById("formComentario").reset();
}

function validateName() {
  if (nombre.value.trim() === "") {
    nombre.setCustomValidity("Debe ingresar un nombre");
    nombre.reportValidity();
  } else {
    nombre.setCustomValidity("");
  }
}

function validateComment() {
  if (comentario.value.trim() === "") {
    comentario.setCustomValidity("Debe ingresar un comentario");
    comentario.reportValidity();
  } else {
    comentario.setCustomValidity("");
  }
}
