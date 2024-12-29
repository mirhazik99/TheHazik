document.getElementById("login-btn").addEventListener("click", function () {
    const phone = document.getElementById("phone").value;
    const name = document.getElementById("name").value;
    const countryCode = document.getElementById("country-code").value;

    if (!phone || !name) {
        alert("Please fill in all fields.");
        return;
    }

    // Save data locally
    localStorage.setItem("phone", countryCode + phone);
    localStorage.setItem("name", name);

    // Show loading screen
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("loading-screen").style.display = "block";

    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-screen").style.display = "block";

        // Display saved name
        document.getElementById("username").textContent = name;
    }, 4000);
});

// Sidebar toggle
document.getElementById("menu-btn").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
});

// Handle downloads
document.querySelectorAll(".download-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const downloadLink = this.dataset.link;

        alert("Redirecting to download...");
        setTimeout(() => {
            window.open(downloadLink, "_blank");
        }, 3000);
    });
});
