
console.log('INICIO DEL PROGRAMA');

    function crearProducto(nombre, costo, precioVenta) {
        return {
            nombre: nombre,
            costo: costo,
            precioVenta: precioVenta,
            calcularGanancia: function() {
                return this.precioVenta - this.costo;
            }
        };
    }

        function mostrarResultado(producto) {
        console.log("Detalles del producto:");
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Marca: ${producto.marca}`);
        console.log(`Costo: $${producto.costo}`);
        console.log(`Precio de venta: $${producto.precioVenta}`);
        
        
        const ganancia = producto.calcularGanancia();
        console.log(`Ganancia: $${ganancia}`);

        if (ganancia > 0) {
            console.log("¡Excelente! Hay ganancia.");
        } else if (ganancia < 0) {
            console.log("¡Cuidado! Hay pérdida.");
        } else {
            console.log("El costo y el precio de venta son iguales, no hay ganancia ni pérdida.");
        }
    }

        //prompt solo temporal para la entrega--
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    let marcaProducto = prompt("Ingrese la marca del producto:");
    let costoProducto = parseFloat(prompt("Ingrese el costo del producto:"));
    let precioVentaProducto = parseFloat(prompt("Ingrese el precio de venta del producto:"));
    
    
        if (isNaN(costoProducto) || isNaN(precioVentaProducto)) {
            alert("Por favor, ingrese valores numéricos válidos.");
    } else {
        
        const miProducto = crearProducto(nombreProducto, costoProducto, precioVentaProducto);

        
        mostrarResultado(miProducto);
    }

