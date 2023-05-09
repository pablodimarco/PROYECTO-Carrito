// variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
// carrito de compras vacio
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {
    // cuando agregas un curso presionando 'agregar al carrito'
    listaCurso.addEventListener('click', agregarCurso);

    // eliminar un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar el carrito de compras
    vaciarCarritoBtn.addEventListener('click', () => {
        
        // vaciamos el arreglo
        articulosCarrito = [];

        limpiarHTML(); // elimina todo el html
    });
};

// funciones 
function agregarCurso(e) {
    // prevent default para evitar que haga un salto de linea cuando presionamos el boton
    e.preventDefault();

    // .target.classList.contains para consultar si en el elemento que estamos seleccionando tiene una clase llamada 'agregar-carrito'
    if(e.target.classList.contains('agregar-carrito')) {
        // console.log('agregando al carrito...');
        // parentElement selecciona el elemento padre de donde seleccionamos, en este caso agregar al carrito
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
};

// elimina un curso del carrito 
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        // llamada para que actualice el html
        carritoHTML();
    }
};


// lee el contenido del html al que le dimos click y extrae la info del curso
function leerDatosCurso(curso){
    // console.log(curso);

    // creacion de un objeto con el contenido del curso que seleccionamos
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    // el text content extrae el texto de la etiqueta
    // el getAttribute toma el atributo data id de la etiqueta a
    

    carritoHTML();

}

// muestra el carrito de compras en el html
function carritoHTML() {
    // Limpiar el html antes de mostrarlo debido a que se duplican los elementos sino
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {

        // de esta forma creamos una constante por cada elemento la cual es de valor curso, de esta manera nos ahorramos acceder mediante el '.' 
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> 
        img src="${imagen}" width="100"
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>`;

         // agrega el html del carrito en el tbody
         contenedorCarrito.appendChild(row);
    });

}

// elimina los cursos del tbody 
function limpiarHTML() {
    // forma lenta de limpiar
    // contenedorCarrito.innerHTML = '';

    // con un while se elimina de manera mas rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
};