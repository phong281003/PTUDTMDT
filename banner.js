/* Cập nhật trang thanh toán */
document.addEventListener('DOMContentLoaded', function() {
    // Update totals when quantity changes
    var quantityInputs = document.querySelectorAll('.quantity-input');

    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener('change', function() {
            updateTotals();
        });
    }

    function updateTotals() {
        var totalQuantity = 0;
        var totalCost = 0;

        // Calculate total quantity and cost for each product
        quantityInputs.forEach(function(input) {
            var price = parseInt(input.getAttribute('data-price'));
            var quantity = parseInt(input.value);
            var productTotal = price * quantity;
            totalQuantity += quantity;
            totalCost += productTotal;
        });

        // Update the DOM
        document.getElementById('total-quantity').textContent = totalQuantity;
        document.getElementById('total-cost').innerHTML = formatPrice(totalCost) + '<sub>đ</sub>';
        document.getElementById('subtotal-cost').innerHTML = `<p style="color:rgb(0, 0, 0); font-weight: bold;">${formatPrice(totalCost)}<sub>đ</sub></p>`;
    }

    function formatPrice(price) {
        // Format the price as needed, for example:
        return price.toLocaleString('vi-VN');
    }
});