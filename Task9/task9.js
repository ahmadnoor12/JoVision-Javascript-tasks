document.getElementById("getIpBtn").addEventListener("click", function () {
    const display = document.getElementById("ipDisplay");
    display.textContent = "Loading...";

    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            display.textContent = "Your IP address is: " + data.ip;
        })
        .catch(error => {
            display.textContent = "Error fetching IP: " + error;
        });
});
