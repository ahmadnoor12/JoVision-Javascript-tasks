document.getElementById("myButton").addEventListener("click", function () {
    let numbers = [];
    let evenSum = 0;

    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
        if (i % 2 ===0) {
            evenSum += i;
        }
    }

    console.log("Sum of even numbers from 0 to 100 is:", evenSum);
});
