var PRODUCT = [];

// Lấy danh sách sản phẩm để tạo PRODUCT phục vụ việc sắp xếp theo giá
var boxes = document.querySelectorAll("#bestseller .box");

boxes.forEach(box => {
    var childs = box.children;

    // Img1
    var img1 = childs[0];
    // Img2 
    var img2 = childs[1];

    var title = childs[2];

    var price = childs[3].innerHTML;
    price = price.slice(0, price.length - 32)
    price = parseFloat(price.replaceAll(".", ""));
    var reviews = childs[4];

    PRODUCT.push({
        img1: img1.getAttribute("src"),
        altImg1: img1.getAttribute("alt"),
        img2: img2.getAttribute("src"),
        altImg2: img2.getAttribute("alt"),
        title: title.innerHTML,
        price: price,
        reviews: reviews.innerHTML,
    });
});

PRODUCT.sort(function (a, b) { return a.price - b.price; });

const filter = document.querySelector("#filter");

filter.addEventListener("change", function (e) {
    var sortDirection = e.target.value;

    if (sortDirection == 1) {
        PRODUCT.sort(function (a, b) { return a.price - b.price; });
    }

    if (sortDirection == 2) {
        PRODUCT.sort(function (a, b) { return b.price - a.price; });
    }

    reloadUI();
});


function reloadUI() {
    var bestSeller = document.querySelector("#bestseller")
    bestSeller.innerHTML = '';

    PRODUCT.forEach(p => {
        bestSeller.innerHTML +=
            `
        <div class="box" onclick="window.location.href='sproduct.html';">
            <img src="${p.img1}" alt="${p.altImg1}">
            <img src="${p.img2}" alt="${p.altImg2}" class="hover-img">
            <h3>${p.title}</h3>
            <span>${new Intl.NumberFormat('en-DE').format(p.price)}<span class="underline">đ</span></span>
            <i class='bx bxs-star'>${p.reviews}</i>
            <a href="#" class="btn">Đặt ngay</a>
            <a href="sproduct.html" class="chitiet">Xem chi tiết</a>
        </div>
        `;
    });
}

reloadUI();
