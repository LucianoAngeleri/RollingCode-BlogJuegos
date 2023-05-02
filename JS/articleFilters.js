// 1 Obtener el input
const input_filtro_articulos = document.getElementById("input_filtro_articulos");

// 2 Agregarle el evento keyup que se dispara cada vez que el usuario presiona
// una tecla y la suelta. El parametro e es el evento que dispara keyup
// e.target = la propiedad target devuelve el input desde el cual estamos escribiendo
// e.target.value = devuelve cada letra o tecla que el usuario presiona y suelta en su teclado
input_filtro_articulos.addEventListener("keyup", e => {
    //console.log(e.target.value); = devuelve cada tecla que pulsa el usuario
    //console.log(typeof e.key);

    // 3 Guardamos todos los articulos cuya clase les puse articulos en una variable, en un arreglo
    const articulos = document.querySelectorAll(".articulos");
    //console.log(articulos);
    // 4 Ahora recorremos todos los articulos con un forEach
    articulos.forEach((articulo)=>{
        // 5 Seleccionamos todos los elementos dentro del nodo articulo que tengan la clase .titulos_articulos
        // es decir metemos en un array todos los titulos de los articulos
        // 6 luego con el forEach recorremos cada uno de esos titulos
        articulo.querySelectorAll(".titulos_articulos").forEach(titulos =>{

            // 7 en este if traemos el textContent de cada titulo, lo convertimos a minusculas con toLowerCase
            // luego con .includes(e.target.value.toLowerCase()) verificamos si incluye e.target.value.toLowerCase = cuyo valor sera cada
            // tecla que escriba el usuario y al final convertimos cada tecla a minusculas con toLowerCase, con el fin de
            // que no importe si el usuario usa mayusculas o minusculas tanto las letras que escriba como el titulo de los articulos
            // los transformaremos a minusculas para compararlos.
            if(titulos.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                articulo.classList.remove("remover_articulo");
            }else{
                articulo.classList.add("remover_articulo");
            }
        })
    });
});