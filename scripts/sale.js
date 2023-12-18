// Khởi tạo số giờ sale
var initHours = 0;
var initMinutes = 10;
var initSeconds = 50;

var hours = document.getElementById("count-down-hours");
var minutes = document.getElementById("count-down-minutes");
var seconds = document.getElementById("count-down-seconds");

// Cập nhật số giờ sale trên giao diện
hours.innerHTML = initHours.toString().padStart(2, "0");
minutes.innerHTML = initMinutes.toString().padStart(2, "0");
seconds.innerHTML = initSeconds.toString().padStart(2, "0");

// Bộ đếm giờ tự động mỗi 1s
var intervalId = setInterval(() => {
    initSeconds -= 1;

    if (initSeconds <= 0) {
        initMinutes -= 1;

        if (initMinutes == 0 && initHours == 0) {
            initSeconds = 0;
            initHours = 0;
            initSeconds = 0;
            clearInterval(intervalId);
            hours.innerHTML = initHours.toString().padStart(2, "0");
            minutes.innerHTML = initMinutes.toString().padStart(2, "0");
            seconds.innerHTML = initSeconds.toString().padStart(2, "0");

            return;
        }

        initSeconds = 60;

        if (initMinutes <= 0) {
            initMinutes = 60;
            initHours -= 1;
        };
    };

    hours.innerHTML = initHours.toString().padStart(2, "0");
    minutes.innerHTML = initMinutes.toString().padStart(2, "0");
    seconds.innerHTML = initSeconds.toString().padStart(2, "0");
}, 1000)