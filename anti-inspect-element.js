// Detect F12 key press
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 123) { // F12 key code
        alert("DevTools is not allowed!");
        event.preventDefault();
    }
});

// Prevent file system access
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Prevent keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || event.key === 'Ctrl+Shift+I' || event.key === 'Ctrl+Shift+J') {
        event.preventDefault();
    }
});