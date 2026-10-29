import productos from './productos.js'
import { renderizarCatalogo, filtrarPorTalle } from './funciones.js'

// Referenciamos elementos del DOM a partir de su ID
const contenedorProductos = document.getElementById("contenedor-productos")
const filtroTalle = document.getElementById("filtro-talle")
const botonEvento = document.getElementById("boton-evento")
const dialogo = document.getElementById("dialogo")
const carrito = document.getElementById("carrito")

// Arreglo con los id de los productos agregados al carrito
const productoCarrito = []

// Escuchador: abre el diálogo (modal)
botonEvento.addEventListener("click", () => {
    dialogo.showModal()
})

// Asigna el evento "click" a cada botón "Agregar al carro".
// Hay que volver a llamarla después de cada render: innerHTML crea
// botones nuevos y los listeners de los anteriores se pierden.
const asignarEventosCarrito = () => {
    const botonesCarrito = contenedorProductos.querySelectorAll(".boton-carrito")

    botonesCarrito.forEach((boton) => {
        boton.addEventListener("click", () => {
            const idProducto = parseInt(boton.dataset.id)
            productoCarrito.push(idProducto)
            console.log(productoCarrito)
            carrito.textContent = productoCarrito.length
        })
    })
}

const mostrar = (talle) => {
    const lista = talle ? filtrarPorTalle(productos, talle) : productos
    contenedorProductos.innerHTML = renderizarCatalogo(contenedorProductos, lista)
    asignarEventosCarrito()
}

mostrar("")   // al cargar, muestra todo
filtroTalle.addEventListener("change", (e) => mostrar(e.target.value))
