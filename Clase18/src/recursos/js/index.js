// Arreglo de productos (cada producto es un objeto)
const productos = [
    {
        nombre: "Correa",
        imagen: "recursos/imagenes/Productos/perrito con correa.jpg",
        alt: "perro salchicha",
        descripcion: "correa pequeña",
        talles: ["S", "M", "L"],
        precio: 5000
    },
    {
        nombre: "Correa",
        imagen: "recursos/imagenes/Productos/perrito con correa.jpg",
        alt: "perro salchicha",
        descripcion: "correa mediana",
        talles: ["M", "L"],
        precio: 6500
    },
    {
        nombre: "Correa",
        imagen: "recursos/imagenes/Productos/perrito con correa.jpg",
        alt: "perro salchicha",
        descripcion: "correa grande",
        talles: ["L"],
        precio: 8000
    }
]

// Función de renderizado
// 1er parámetro -> referencia del contenedor (elemento del DOM)
// 2do parámetro -> arreglo de productos
// retorno       -> String con el HTML listo para asignar con innerHTML
const renderizarProductos = (contenedor, productos) => {
    // Si no existe el contenedor en el DOM, no hay dónde renderizar
    if (!contenedor) {
        console.error("renderizarProductos: no se encontró el contenedor")
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
            <button>Agregar al carro</button>
        </article>
        `
    })

    return productosHTML
}

// Referenciamos un elemento del DOM a partir de su ID
const contenedorProductos = document.getElementById("contenedor-productos")

// Renderizamos el String devuelto con innerHTML
if (contenedorProductos) {
    contenedorProductos.innerHTML = renderizarProductos(contenedorProductos, productos)
}
