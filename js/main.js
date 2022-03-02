//PSEUDO CODE:
//The temperature converter should change from celsius to farenheit 
//I should be able to input a number and change it from celsius to farenheit
//The temperature converter should also allow me to type the numbers into the converter
// Formula Celsius to Fahrenheit(0°C × 9/5) + 32 = 32°F

// I want to add in fahrenheit to celsius next
// Formula Fahrenheit to Celsius (0°F − 32) × 5/9 = -17.78°C



//start with event listener to convert the value on click
document.querySelector('#fahrenheitBtn').addEventListener('click', convert)

//when click happens, it will run based on these instructions in the function
function convert() {
    //need the value that is in celsius
    let temp = document.querySelector('#cel').value
    //convert from celsius to fahrenheit
    temp = temp * 9/5 + 32
    //show it
    document.querySelector('#showFahrenheitValue').innerText = temp
}

//start with event listener to convert the value on click
document.querySelector('#celsiusBtn').addEventListener('click', convert)

//when click happens, it will run based on these instructions in the function
function convert() {
    //need the value that is in fahrenheit
    let temp = document.querySelector('#fah').value
    //convert from fahrenheit to celsius
    temp = temp - 32 * 5/9
    //show it
    document.querySelector('#showCelsiusValue').innerText = temp
}