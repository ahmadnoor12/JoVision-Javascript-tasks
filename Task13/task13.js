document.getElementById("submitBtn").addEventListener("click", function () {
    const nameValue = document.getElementById("nameInput").value.trim();

    if (!nameValue) {
        alert("Please enter a name.");
        return;
    }

    const apiUrl = `https://api.agify.io?name=${encodeURIComponent(nameValue)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch age");
            }
            return response.json();
        })
        .then(data => {
          
            const { name, age } = data;

            alert(`Your name is: ${name}\nYour age is: ${age}`);
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
});
