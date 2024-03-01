document.getElementById("startButton").addEventListener("click", function() {
    fetch('/start_motion_detection')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});
