let form = document.getElementById("form");
let input = document.getElementById("input");
let solution = document.getElementById("solution");

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
  let answer = convertFrom.innerHTML[0] == 'C'? cToF(input.value) : fToC(input.value);
  document.getElementById("answer").innerHTML = answer;
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(convertFrom.innerHTML[0]);
    showAnswer();

});