let cartCount = 0; // Variable para llevar el conteo de los productos en el carrito
        let cartItems = []; // Array para almacenar los productos en el carrito

        // Función para agregar productos al carrito
        function addToCart(productName, productPrice) {
            // Comprobar si el producto ya está en el carrito
            let product = cartItems.find(item => item.name === productName);
        
            if (product) {
                // Si el producto ya existe, aumentar la cantidad
                product.quantity++;
            } else {
                // Si el producto no existe, añadirlo al carrito con cantidad 1
                cartItems.push({ name: productName, price: productPrice, quantity: 1 });
            }
        
            // Actualizar el contador de productos en el carrito
            updateCartCount();
            // Actualizar el modal con los productos
            updateCartModal();
        }

        // Función para actualizar el modal con los productos del carrito
        function updateCartModal() {
            const cartProductsList = document.getElementById('cart-products-list');
            cartProductsList.innerHTML = ''; // Limpiar la lista antes de actualizar

            cartItems.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('d-flex', 'justify-content-between', 'align-items-center');
                listItem.innerHTML = `
                    ${item.name} - $${item.price} 
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
                `;
                cartProductsList.appendChild(listItem);
            });
        }

        // Función para actualizar la cantidad de un producto en el carrito
        function updateQuantity(index, newQuantity) {
            newQuantity = parseInt(newQuantity); // Asegurarse de que sea un número
        
            if (newQuantity > 0) {
                cartItems[index].quantity = newQuantity;
                updateCartCount(); // Volver a actualizar el contador
                updateCartModal(); // Volver a actualizar el modal
            }
        }

        // Función para eliminar productos del carrito
        function removeFromCart(index) {
            cartCount -= cartItems[index].quantity; // Reducir el contador de productos
            cartItems.splice(index, 1); // Eliminar el producto del carrito
            updateCartCount(); // Actualizar el contador de productos
            updateCartModal(); // Actualizar la lista del carrito en el modal
        }

        function updateCartCount() {
            cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cart-count').innerText = cartCount; // Actualizar el contador visualmente
        }


        // Función para finalizar la compra
        document.getElementById('finalize-purchase').addEventListener('click', function() {
            alert('¡Compra finalizada! Gracias por tu compra.');
            // Aquí puedes redirigir a una página de confirmación o realizar otras acciones
        });