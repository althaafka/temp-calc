let form = document.getElementById("form");
let input = document.getElementById("input");
let solution = document.getElementById("solution");
let convertFrom = document.getElementById("unit").innerHTML[1];

cToF = function(celcius) {
    let ans = celcius * 9 / 5 + 32;
    document.getElementById("answer").innerHTML = `${celcius}°C = ${ans}°F`;
    solution.innerHTML = `
        <p>°F = (°C x (9 / 5)) + 32</p>
        <p>°F = (${celcius} x (9 / 5)) + 32</p>
        <p>°F = (${celcius} x 1.8) + 32</p>
        <p>°F = ${celcius * 1.8} + 32</p>
        <p>°F = ${ans}</p>
    `;
}

fToC = function(fahrenheit) {
    let ans = (fahrenheit - 32) * 5 / 9;
    document.getElementById("answer").innerHTML = `${fahrenheit} °F = ${ans.toFixed(4)} °C`;
    solution.innerHTML = `
        <p>°C = (°F - 32) x (5 / 9)</p>
        <p>°C = (${fahrenheit} - 32) x (5 / 9)</p>
        <p>°C = (${fahrenheit - 32}) x (5 / 9)</p>
        <p>°C = ${fahrenheit - 32} x (0.556)</p>
        <p>°C = ${ans.toFixed(4)}</p>
    `;
}

function reverse(){
    console.log("reverse");
    if (convertFrom == 'C'){
        convertFrom = 'F';
        document.getElementById("convertTo").innerHTML = "Fahrenheit to Celsius";
        document.getElementById("unit").innerHTML = "°F";
    } else {
        convertFrom = 'C';
        document.getElementById("convertTo").innerHTML = "Celsius to Fahrenheit";
        document.getElementById("unit").innerHTML = "°C";
    }
    resetAll();
}

resetAll = function() {
    console.log("reset");
    document.getElementById("input").value = "";
    document.querySelector(".output").style.visibility = "hidden";
    document.getElementById("answer").innerHTML = "";
}


showAnswer = function() {
  document.querySelector(".output").style.visibility = "visible";
  convertFrom == 'C'? cToF(Number(input.value)) : fToC(Number(input.value));
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(convertFrom);
    showAnswer();
});

