document.getElementById("getIpBtn").addEventListener("click", function () {
    const button = this;

    fetch("https://api.ipify.org?format=json") // غيّر الرابط للاختبار: api.ipify.orgx
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            button.textContent = data.ip;
        })
        .catch(error => {
            alert("Error fetching IP: " + error.message);
        });
});
