// Detect F12 key press
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 123) { // F12 key code
        alert("DevTools is not allowed!");
        event.preventDefault();
    }
});