'use strict';

// It is always helpful to use comments in your code!

//Print "212" immediately inside the span with the ID "boiling-temp" using an arrow function
var boilingTemp = document.getElementById('boiling-temp');

var printBoiling = function printBoiling() {
    boilingTemp.innerText = "212";
};

printBoiling();

//Print "32" immediately inside the span with the ID "freezing-temp" using an arrow function

var freezingTemp = document.getElementById('freezing-temp');

var printFreezing = function printFreezing() {
    freezingTemp.innerText = "32";
};

printFreezing();

//Any number of your choice prints immediately inside of the span with the ID "water-temp"

var waterTemp = document.getElementById('water-temp');

var printWater = function printWater() {
    waterTemp.innerText = "80";
};

printWater();

//setTimeOut()

var boiling = document.getElementById("boiling");
var frozen = document.getElementById("frozen");
var goodTemp = document.getElementById("good-temp");

function waterMessage() {
    setTimeout(function () {
        if (waterTemp > 212) {
            boiling.classList.remove('hide');
            boiling.classList.add('show');
        } else if (waterTemp < 32) {
            frozen.classList.remove('hide');
            frozen.classList.add('show');
        } else {
            goodTemp.classList.remove("hide");
            goodTemp.classList.add("show");
        }
    }, 3000);
}

waterMessage();