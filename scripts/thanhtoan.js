// Lấy tổng tiền ở trang GIAO HÀNG
var totalOrderValue = localStorage.getItem("totalOrderValue");

if (!totalOrderValue) {
    totalOrderValue = 0;
}

totalOrderValue = parseFloat(totalOrderValue);

// CẬP NHẬT TỔNG TIỀN ở trong thanh toán 
document.getElementById("total-cost").innerHTML = new Intl.NumberFormat('en-DE').format(totalOrderValue);

// Bắt sự kiện khi chọn phương thức thanh toán
function onChangePaymentMethod(e) {
    const externalPaymentMethod = ["bankTransfer", "momo"];

    if (!externalPaymentMethod.includes(e.value)) {
        document.querySelector("#external-payment").style.display = "none";
        return;
    }

    document.querySelector("#external-payment").style.display = "";

    if (e.value === "momo") {
        document.querySelector("#bank-account-name").value = "Nguyễn Đào Như Ánh";
    }

    if (e.value === "bankTransfer") {
        document.querySelector("#bank-account-name").value = "Nguyen Dao Nhu Anh";
    }
}