document.getElementById("myButton").addEventListener("click",function(){
let numbers=[];
for(let i=0;i<=100;i++){
    numbers.push(i);
}
let sum =0;
for (let i=0;i<numbers.length;i++){ 
    sum+=numbers[i];
}
console.log("sum of numbers from 0 to 100 is : ",sum)
});