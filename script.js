document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.getElementById("aboutLink");

    aboutLink.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({
            behavior: "smooth"
        });
    });
});

function scrollToAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// Funktion zum Anzeigen und Verbergen des Dropdown-Menüs
function toggleMenu() {
    const menuItems = document.querySelector(".menu-items");
    menuItems.classList.toggle("show");
}
