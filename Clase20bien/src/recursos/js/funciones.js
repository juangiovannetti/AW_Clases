// Recibe el contenedor (elemento del DOM) y el arreglo de productos.
// Devuelve un String con el HTML listo para asignar con innerHTML.
const renderizarCatalogo = (contenedor, productos) => {
    if (!contenedor) {
        console.error("renderizarCatalogo: no se encontró el contenedor")
        return ""
    }

    let productosHTML = ""
    productos.forEach((producto) => {
        productosHTML += `
        <article>
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.alt}" width="350"
                     onerror="this.onerror=null;this.src='./recursos/imagenes/huella.png'">
            </picture>
            <p>
                ${producto.descripcion}
            </p>
            <ul>
                <li>
                    Talles ${producto.talles.join(" ")}
                </li>
                <li>
                    Precio $${producto.precio}
                </li>
            </ul>
            <button class="boton-carrito" data-id="${producto.id}">Agregar al carro</button>
        </article>
        `
    })

    return productosHTML
}

 
// Funciones de filtrado
function filtrarPorTalle(arreglo, talle) {
    // filter -> deja pasar solo los productos cuyo arreglo de talles incluye el buscado
    return arreglo.filter((producto) => {
        return producto.talles.includes(talle.toUpperCase()) // devuelve true o false
    })
}

// exportaciones nombradas
export { renderizarCatalogo, filtrarPorTalle }
