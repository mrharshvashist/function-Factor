var numberInp = document.getElementById("number");
var btn = document.getElementById("solveBtn");
var result = document.getElementById("result");

function calculateFactors() {
    var number = parseInt(numberInp.value);
    var factors = [];

    for (var i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            factors.push(i, number / i);
            if (i === number/i) {
                factors.pop(number/i); // If i is the square root of number, add it only once
            }
        }
        	
        result.innerText =  factors.join(", ");
    }
}
numberInp.addEventListener("input", calculateFactors);
function enterfunc(event) {
        if (event.key = "Backspace" && numberInp.value.length === 1) {
            result.innerText = "";
            
        }
}
numberInp.addEventListener("keydown", enterfunc)