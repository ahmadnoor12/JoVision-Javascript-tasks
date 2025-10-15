document.getElementById("getIpBtn").addEventListener("click", function () {
    const button = this;

    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            button.textContent = data.ip;
        })
        .catch(error => {
            button.textContent = "Error";
            console.error("Failed to fetch IP:", error);
        });
});
