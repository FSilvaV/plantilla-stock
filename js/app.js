const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkModeActive =
        document.body.classList.contains("dark-mode");

    if (darkModeActive) {
        themeToggle.textContent = "☀️";
        themeToggle.title = "Cambiar a modo claro";
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.title = "Cambiar a modo oscuro";
    }

});