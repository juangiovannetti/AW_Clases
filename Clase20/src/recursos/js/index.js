import productos from './productos.js'
import { renderizarCatalogo, filtrarPorTalle } from './funciones.js'

const contenedorProductos = document.getElementById("contenedor-productos")
const filtroTalle = document.getElementById("filtro-talle")

const mostrar = (talle) => {
    const lista = talle ? filtrarPorTalle(productos, talle) : productos
    contenedorProductos.innerHTML = renderizarCatalogo(contenedorProductos, lista)
}

if (contenedorProductos) {
    mostrar("")   // al cargar, muestra todo
    filtroTalle.addEventListener("change", (e) => mostrar(e.target.value))
}

