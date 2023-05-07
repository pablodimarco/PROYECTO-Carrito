// variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    // cuando agregas un curso presionando 'agregar al carrito'
    listaCurso.addEventListener('click', agregarCurso);
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

// lee el contenido del html al que le dimos click y extrae la info del curso
function leerDatosCurso(curso){
    console.log(curso);

    // creacion de un objeto con el contenido del curso que seleccionamos
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // el text content extrae el texto de la etiqueta
    // el getAttribute toma el atributo data id de la etiqueta a
    console.log(infoCurso);
}

