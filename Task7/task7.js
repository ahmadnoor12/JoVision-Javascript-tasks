function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();
