document.getElementById("submitBtn").addEventListener("click", function () {
    const nameValue = document.getElementById("nameInput").value;
    const ageValue = document.getElementById("ageInput").value;
    const timestamp = new Date().toLocaleString();

    const userInfo = {
        name: nameValue,
        age: ageValue,
        timestamp: timestamp
    };

    const { name, age, timestamp: time } = userInfo;

    alert(`Your name is: ${name}\nYour age is: ${age}\nTimestamp: ${time}`);
});
