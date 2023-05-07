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
        console.log('agregando al carrito...');
    }
};