// 封面動畫
document.addEventListener("DOMContentLoaded", function () {
    var wrapper = document.querySelector(".wrapper svg");
    function draw() {
        if (wrapper) {
            wrapper.classList.add("active");
        }
    }
    setTimeout(draw, 300);
});
