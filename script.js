// Js trình
// Hiệu ứng cuộn mượt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Hiệu ứng khi cuộn xuống
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// Khởi tạo hiệu ứng ẩn ban đầu
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section").forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.5s ease-in-out";
    });
});
