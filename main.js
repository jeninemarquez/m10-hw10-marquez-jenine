// It is always helpful to use comments in your code!

//Print "212" immediately inside the span with the ID "boiling-temp" using an arrow function
const boilingTemp = document.getElementById('boiling-temp');

const printBoiling = () => {boilingTemp.innerText = "212"};

printBoiling();


//Print "32" immediately inside the span with the ID "freezing-temp" using an arrow function

const freezingTemp = document.getElementById('freezing-temp');

const printFreezing = () => {freezingTemp.innerText = "32"};

printFreezing();


//Any number of your choice prints immediately inside of the span with the ID "water-temp"

const waterTemp = document.getElementById('water-temp');

const printWater = () => {waterTemp.innerText = "80"};

printWater();

//setTimeOut()

const boiling = document.getElementById("boiling");
const frozen = document.getElementById("frozen");
const goodTemp = document.getElementById("good-temp");


function waterMessage(){
    setTimeout( () => {
        if (waterTemp > 212) {
            boiling.classList.remove('hide');
            boiling.classList.add('show');
        }
        else if (waterTemp < 32) {
            frozen.classList.remove('hide');
            frozen.classList.add('show');
        }
        else {
            goodTemp.classList.remove("hide");
            goodTemp.classList.add("show");
        }
    },3000);
} 

waterMessage();