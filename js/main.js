//PSEUDO CODE:
//The temperature converter should change from celsius to farenheit 
//I should be able to input a number and change it from celsius to farenheit
//The temperature converter should also allow me to type the numbers into the converter

//start with event listener to convert the value on click
document.querySelector('#fahrenheit').addEventListener('click', convert)

//when click happens, it will run based on these instructions in the function
function convert() {
    //need the value that is in celsius
    let temp = document.querySelector('#cel').value
    //convert from celsius to fahrenheit
    temp = temp * 9/5 + 32
    //show it
    document.querySelector('#showConvertedValue').innerText = temp
}