
    <title>Botón de Pago PayPal con Suma de Montos</title>
    <script src="https://www.paypal.com/sdk/js?client-id=AcGQ9AhzKvFvQotKuE-Kj0BCCEKfDoIFDB7UYJPPfJlRWDS6xFs-W1--u2bZIwhhwc4O7i8Dm6xH1ljS"></script>


    <select id="options" onchange="sumar()">
        <option value="597.00"> One property</option>
        <option value="497.00"> Two to Nine Listings</option>
        <option value="397.00"> Ten or more</option>
    </select>

    <label for="quantity">Property Listings:</label>
    <input type="number" id="quantity" min="1" value="1" onchange="sumar()">

    <div id="paypal-button-container"></div>

    <script>
        var totalAmount = 0;

        // Reemplaza "YOUR_PAYPAL_CLIENT_ID" con tu ID de cliente de PayPal
        paypal.Buttons({
            style: {
                layout: 'horizontal',
                color: 'blue'
            },
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: totalAmount
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Pago completado por: ' + details.payer.name.given_name);
                    // Aquí puedes agregar lógica adicional después de que se haya completado el pago.
                });
            }
        }).render('#paypal-button-container');

        function sumar() {
            var selectedOption = document.getElementById('options').value;
            var quantityInput = document.getElementById('quantity');
            var quantity = parseInt(quantityInput.value);
            
            if (selectedOption === '597.00') {
                // Si la opción es "One property", la cantidad se establece en 1 y el total se calcula sin sumar
                quantityInput.value = 1;
                quantityInput.disabled = true;
                totalAmount = selectedAmount;
            } else {
                // Si la opción es distinta a "One property", habilitar el campo de cantidad y realizar la suma normal
                quantityInput.disabled = false;
                totalAmount = selectedAmount * quantity;
            }
            
            if (selectedOption === '497.00') {
                // Deshabilitar el campo de entrada si se selecciona "Two to Nine Listings"
                quantityInput.disabled = false;
                quantityInput.setAttribute('min', '2');
                quantityInput.setAttribute('max', '9');
                if (quantity < 2) {
                    quantityInput.value = 2;
                }
            } else if (selectedOption === '397.00') {
                // Deshabilitar el campo de entrada si se selecciona "Ten or more"
                quantityInput.disabled = false;
                quantityInput.setAttribute('min', '10');
                quantityInput.removeAttribute('max');
                if (quantity < 10) {
                    quantityInput.value = 10;
                }
            } else if (selectedOption === '') {
                // Habilitar el campo de entrada para las otras opciones
                quantityInput.disabled = false;
                quantityInput.removeAttribute('min');
                quantityInput.removeAttribute('max');
            }
            
            var selectedAmount = parseFloat(selectedOption);
            totalAmount = selectedAmount * quantity;
        }

        // Calcular el total inicial cuando se carga la página
        sumar();
    </script>
