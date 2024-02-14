let form = document.getElementById("form");
let input = document.getElementById("input");
let solution = document.getElementById("solution");
let convertFrom = document.getElementById("unit").innerHTML[1];

cToF = function(celcius) {
    solution.innerHTML = `
        <p>°F = (°C x (9 / 5)) + 32</p>
        <p>°F = (${celcius} x (9 / 5)) + 32</p>
        <p>°F = (${celcius} x 1.8) + 32</p>
        <p>°F = ${celcius * 1.8} + 32</p>
        <p>°F = ${celcius * 1.8 + 32}</p>
    `
  return celcius * 9 / 5 + 32;
}

fToC = function(fahrenheit) {
    solution.innerHTML = `
        <p>°C = (°F - 32) x (5 / 9)</p>
        <p>°C = (${fahrenheit} - 32) x (5 / 9)</p>
        <p>°C = (${fahrenheit - 32}) x (5 / 9)</p>
        <p>°C = ${(fahrenheit - 32) * 5 / 9}</p>
    `
    return (fahrenheit - 32) * 5 / 9;
}

showAnswer = function() {
  document.querySelector(".output").style.visibility = "visible";
  let answer = convertFrom == 'C'? cToF(input.value) : fToC(input.value);
  document.getElementById("answer").innerHTML = answer;
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(convertFrom);
    showAnswer();
});

function reverse(){
    if (convertFrom == 'C'){
        convertFrom = 'F';
        document.getElementById("convertTo").innerHTML = "Fahrenheit to Celsius";
        document.getElementById("unit").innerHTML = "°F";
        document.getElementById("answer-unit").innerHTML = "Celcius (°C)";
    } else {
        convertFrom = 'C';
        document.getElementById("convertTo").innerHTML = "Celsius to Fahrenheit";
        document.getElementById("unit").innerHTML = "°C";
        document.getElementById("answer-unit").innerHTML = "Fahrenheit (°F)";
    }
}

function reset(){
    console.log("reset");
    document.getElementById("input").value = "";
    document.querySelector(".output").style.visibility = "hidden";
}

