
function createRange(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Button 1
document.getElementById("btn1").addEventListener("click", function () {
    let arr = createRange(0, 100);
    let filtered = arr.filter(num => num % 3 !== 0);
    console.log("Button 1 - Removed numbers divisible by 3:", filtered);
});
// Button 2
document.getElementById("btn2").addEventListener("click", function () {
    let arr = createRange(0, 100);
    let extra = createRange(100, 150);
    let combined = arr.concat(extra);
    console.log("Button 2 - Added numbers 100 to 150:", combined);
});

// Button 3
document.getElementById("btn3").addEventListener("click", function () {
    let arr = createRange(0, 100);
    let modified = arr.map(num => num + 3);
    console.log("Button 3 - Each number + 3:", modified);
});

//Button 4
document.getElementById("btn4").addEventListener("click", function () {
    let arr = createRange(0, 100);
    let sliced = arr.slice(20, 41); // slice from index 20 to 40 (inclusive)
    console.log("Button 4 - Elements from index 20 to 40:", sliced);
});

//Button 5
document.getElementById("btn5").addEventListener("click", function () {
    let arr = createRange(0, 100);
    shuffleArray(arr);
    console.log("Button 5 - Shuffled array:", arr);

    let sortedDesc = arr.slice().sort((a, b) => b - a);
    console.log("Button 5 - Sorted descending:", sortedDesc);
});
