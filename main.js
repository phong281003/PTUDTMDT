let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active')
}
document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử .trangchu-text
    const trangchuText = document.querySelector(".trangchu-text");

    // Thêm lớp "show" để hiển thị và kích hoạt hiệu ứng
    trangchuText.classList.add("show");
});
// Lưu trữ số lượng sản phẩm trong giỏ hàng
let cartCount = 0;

document.querySelector('.search-box').onclick = () => {
    search.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const trangchuText = document.querySelector(".trangchu-text");
    trangchuText.classList.add("show");

    // Lấy tất cả các nút "Đặt ngay" trong khung sản phẩm
    const addToCartButtons = document.querySelectorAll('.box .btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Tăng số lượng sản phẩm trong giỏ hàng
            cartCount++;
            updateCartCount(); // Cập nhật số lượng hiển thị trên giỏ hàng
        });
    });
});

// Cập nhật số lượng sản phẩm hiển thị trên giỏ hàng
function updateCartCount() {
    const cartIcon = document.querySelector('.cart span');
    cartIcon.textContent = cartCount;
    cartIcon.style.display = 'inline-block';
}

// Chuyển tab bên Product
document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll('.tab__btn');
    var contents = document.querySelectorAll('.khungsanpham');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var target = this.getAttribute('data-target');

            // Loại bỏ class 'active-tab' khỏi tất cả các tab
            tabs.forEach(function (tab) {
                tab.classList.remove('active-tab');
            });

            // Ẩn tất cả các khung sản phẩm
            contents.forEach(function (content) {
                content.classList.remove('active-content');
                content.style.display = 'none';
            });

            // Thêm class 'active-tab' vào tab được chọn
            this.classList.add('active-tab');

            // Hiển thị khung sản phẩm tương ứng với tab được chọn
            document.querySelector(target).classList.add('active-content');
            document.querySelector(target).style.display = 'flex'; // Sử dụng 'flex' để giữ nguyên layout của khung sản phẩm
        });
    });
});
/* Cập nhật trang thanh toán */
document.addEventListener('DOMContentLoaded', function () {
    // Update totals when quantity changes
    var quantityInputs = document.querySelectorAll('.quantity-input');

    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener('change', function () {
            updateTotals();
        });
    }

    function updateTotals() {
        var totalQuantity = 0;
        var totalCost = 0;

        // Calculate total quantity and cost for each product
        quantityInputs.forEach(function (input) {
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
document.getElementById('addToCartBtn').addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của nút (tránh chuyển trang hoặc cuộn lên đầu)
    event.preventDefault();
});

document.getElementById('shippingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Implement the submission logic here, e.g., sending data to a server
});

function updateDistricts() {
    var city = document.getElementById('city').value;
    var districtSelect = document.getElementById('district');
    districtSelect.innerHTML = ''; // Clear existing options

    if (city == 'hcm') {
        // Add districts for Ho Chi Minh City
        var districts = ['Quận 1', 'Quận 3', 'Quận 5', 'Quận 2', 'Quận 7', 'Thủ Đức'];
        districts.forEach(function (district) {
            districtSelect.innerHTML += '<option value="' + district + '">' + district + '</option>';
        });
    } else if (city == 'hanoi') {
        // Add districts for Hanoi
        var districts = ['Hoàng Mai', 'Thanh Xuân', 'Bắc Từ Liêm', 'Đông Anh', 'Tây Hồ', 'Nam Từ Liêm'];
        districts.forEach(function (district) {
            districtSelect.innerHTML += '<option value="' + district + '">' + district + '</option>';
        });
    }

    calculateShipping();
}
/* Trang shop làm đổi màu khi chuyển tab */
const paginationButtons = document.querySelectorAll('.page-link');

// Hàm để lấy phần cuối của URL (tên trang)
function getBaseURL(url) {
    return url.substring(url.lastIndexOf('/') + 1);
}

// Lấy phần cuối của URL trang hiện tại
const currentPage = getBaseURL(window.location.href);

// Lặp qua các nút và kiểm tra URL
paginationButtons.forEach(button => {
    if (currentPage === getBaseURL(button.getAttribute('href'))) {
        button.classList.add('active'); // Thêm lớp "active" cho nút trang hiện tại
    }
});

/* Tính phí giỏ hàng */
function calculateShipping() {
    var city = document.getElementById('city').value;
    var district = document.getElementById('district').value;
    // Lấy giá tạm tính
    var subTotalCost = document.querySelector('#subtotal-cost').innerHTML;
    var shippingCost = 0;

    if (city == 'hcm') {
        if (['Quận 1', 'Quận 3', 'Quận 5'].includes(district)) {
            shippingCost = 15000;
        } else if (['Quận 2', 'Quận 7', 'Thủ Đức'].includes(district)) {
            shippingCost = 30000;
        }
    } else if (city == 'hanoi') {
        if (['Hoàng Mai', 'Thanh Xuân', 'Bắc Từ Liêm'].includes(district)) {
            shippingCost = 30000;
        } else if (['Đông Anh', 'Tây Hồ', 'Nam Từ Liêm'].includes(district)) {
            shippingCost = 40000;
        }
    }

    // Lấy giá tạm tính + phí ship
    var subTotalCostVal = parseInt(subTotalCost.replaceAll('.', '')) + shippingCost;

    document.getElementById('shippingCost').value = shippingCost + ' đ';

    // Cập nhật tổng tiền hàng
    document.getElementById('totalOrderValue').innerHTML = new Intl.NumberFormat('en-DE').format(subTotalCostVal);

    localStorage.setItem('totalOrderValue', subTotalCostVal);
}

document.getElementById('shippingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Implement the submission logic here, e.g., sending data to a server
});

/* chuyển tab bên giao hàng */

/* Tính tổng giá trị phần giao hàng */

/* Trang thanh toán */
document.getElementById('applyVoucher').addEventListener('click', function () {
    var voucherCode = document.getElementById('voucher').value;
    // Xử lý mã khuyến mãi/voucher
    alert("Mã voucher được áp dụng: " + voucherCode);
    // Cập nhật tổng tiền hàng nếu có sự thay đổi do voucher
});
/* Nội dung thanh toán */

/* Trang tài khoản */
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.account__tab');
    var contents = document.querySelectorAll('.tab__content');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (item) {
                item.classList.remove('active-tab');
            });

            contents.forEach(function (content) {
                content.classList.remove('active-tab');
            });

            this.classList.add('active-tab');
            var targetTab = this.getAttribute('data-target');
            document.querySelector(targetTab).classList.add('active-tab');
        });
    });
});







