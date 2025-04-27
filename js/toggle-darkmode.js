// JavaScript to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("darkmode");
    document.getElementById('content').classList.toggle("darkmode");
    document.getElementById('top-header').classList.toggle("darkmode");
    document.getElementById('bottom-footer').classList.toggle("darkmode");
}
