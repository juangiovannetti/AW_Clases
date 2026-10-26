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

// 1 - Exportación NO nombrada (una sola por archivo)
export default productos

// 2 - Exportación nombrada
export { productos }



