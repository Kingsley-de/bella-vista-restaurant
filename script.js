console.log("Bella Vista website loaded 🚀");
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

// toggle menu
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// close menu when clicking a link
links.forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
