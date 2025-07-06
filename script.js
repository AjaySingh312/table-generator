let tableNumber = parseInt(prompt("Starting table number:"));
let SecNum = parseInt(prompt("Ending table number:"));
let output = document.getElementById("output");


if (SecNum >= tableNumber) {
    for (let i = tableNumber; i <= SecNum; i++) {
        let tableHTML = " ";
        for (let j = 1; j <= 10; j++) {
            let result = i * j;
            output.innerHTML += `${i} x ${j} = ${result}<br>`;
        }
        output.innerHTML += `<div style="margin-bottom: 30px;">${tableHTML}</div>`;
    }
} else {
    alert("Enter valid values");
}

