const formulario = document.getElementById("formComentario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombreComentario");
  const comentario = document.getElementById("comentario");

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

const form = document.querySelector("#formComentario");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector("#nombreComentario");
    const commentInput = document.querySelector("#comentario");

    if (nameInput.value.trim() === "") {
      nameInput.setCustomValidity("Debe ingresar un nombre");
      return;
    }

    if (commentInput.value.trim() === "") {
      commentInput.setCustomValidity("Debe ingresar un comentario");
      return;
    }

    form.submit();
  });
