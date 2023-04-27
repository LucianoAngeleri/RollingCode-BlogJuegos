// 4 = Obtenemos el tema configurado del usuario
let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "light";


// 6 = Obtenemos el icono que se muestra segun sea tema claro u oscuro
let iconThemeShow = document.querySelector("#iconThemeShow");

// 5 = inmediatamente cambiamos el tema por el temaConfigurado que trajimos del localStorage
cambiarTema(temaConfigurado);

// 1 = Primero obtener los botones light y dark
let btn_light = document.querySelector("#btn_light");
let btn_dark = document.querySelector("#btn_dark");

// 2 = Segundo crear los eventos para cuando hagan click en uno de esos botones
// y que llame a la funcion cambiarTema y le pasamos light o dark segun cada boton
btn_light.addEventListener("click",() => cambiarTema("light"));
btn_dark.addEventListener("click",() => cambiarTema("dark"));

// 3 = Crear la funcion cambiar tema
function cambiarTema(color){

    // Debemos obtener el elemento html
    let htmlElement = document.querySelector("html");
    // Ahora debemos agregarle el atributo data-bs-theme con su valor en color
    htmlElement.setAttribute("data-bs-theme", color);

    // Debemos guardar esta info en el localStorage
    localStorage.setItem("theme", JSON.stringify(color));

    // 7 = Dependi si color es "light" o "dark"
    // modificaremos la clase del icono para mostrar
    // ya sea el icono de sol o de luna
    if(color === "dark"){
        iconThemeShow.classList.remove("bi-brightness-high-fill");
        iconThemeShow.classList.add("bi-moon-fill");
    }else if(color === "light"){
        iconThemeShow.classList.remove("bi-moon-fill");
        iconThemeShow.classList.add("bi-brightness-high-fill");
    }
}