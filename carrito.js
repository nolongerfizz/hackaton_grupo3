let carritoItems = [];  
let carritoContador = 0;   

function anadirCarrito(nombreProducto, precioProducto, tallaProducto, imagenProducto) {
    // Se usa la una funcion para comprobar si item ya esta
    let producto = carritoItems.find(item => item.name === nombreProducto && item.size === tallaProducto);

    if (producto) {
        producto.quantity++;
    } else {
        // Si el producto no existe, añadirlo al carrito con cantidad 1
        carritoItems.push({ 
            name: nombreProducto, 
            price: precioProducto, 
            quantity: 1, 
            size: tallaProducto, 
            image: imagenProducto 
        });
    }


    actualizarContador();
    actualizarModalCarrito();
}

// Función para actualizar el modal con los productos del carrito
function actualizarModalCarrito() {
    const listaDeProductos = document.getElementById('cart-products-list');
    listaDeProductos.innerHTML = ''; 

    carritoItems.forEach((item, index) => {
        const listaItems = document.createElement('li');
        listaItems.classList.add('d-flex', 'justify-content-between', 'align-items-center');
        listaItems.innerHTML = `
            <div class="d-flex">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                <div style="margin-right: 10px;">
                    <div class="fw-bold">${item.name}</div>
                    <div class="text-muted">$${item.price}</div>
                    <div class="small">Talla: ${item.size}</div>
                </div>
            </div>
            <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="actualizarCantidad(${index}, this.value)">
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        listaDeProductos.appendChild(listaItems);
    });
}


function actualizarCantidad(index, nuevaCantidad) {
    nuevaCantidad = parseInt(nuevaCantidad); // Asegurarse de que sea un número

    if (nuevaCantidad > 0) {
        carritoItems[index].quantity = nuevaCantidad;
        actualizarContador(); 
        actualizarModalCarrito(); 
    }
}


function eliminarDelCarrito(index) {
    carritoContador -= carritoItems[index].quantity; // Reducir el contador de productos
    carritoItems.splice(index, 1); // Eliminar el producto del carrito
    actualizarContador(); 
    actualizarModalCarrito();
}


function actualizarContador() {
    carritoContador = carritoItems.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = carritoContador; // Actualizar el contador visualmente
}


        document.getElementById('finalize-purchase').addEventListener('click', function() {
            alert('¡Compra finalizada! Gracias por tu compra.');
        });