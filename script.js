// Ẩn dropdown khi click ra ngoài
document.addEventListener("click", function(event) {
    let menu = document.getElementById("dropdownMenu");
    let button = event.target.closest("button");

    if (!menu.contains(event.target) && button === null) {
        menu.classList.add("hidden");
    } else if (button) {
        menu.classList.toggle("hidden");
    }
});

// Load navbar từ file navbar.html
function loadNavbar() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });
}
