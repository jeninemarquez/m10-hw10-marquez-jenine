// It is always helpful to use comments in your code!

//Print "212" immediately inside the span with the ID "boiling-temp" using an arrow function
const boilingTemp = document.getElementById('boiling-temp');

const printBoiling = () => {boilingTemp.innerText = "212"};

printBoiling();


//Print "32" immediately inside the span with the ID "freezing-temp" using an arrow function

const freezingTemp = document.getElementById('freezing-temp');

const printFreezing = () => {freezingTemp.innerText = "32"};

printFreezing();


//setTimeOut()
setTimeout(function() {

},3000);