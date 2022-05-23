let btn = document.getElementById("submitButton");
btn.addEventListener('click', event => {
  myFunction();
});

function myFunction () {
   
jsweight = document.getElementById("weight").value ;
jsdrugname = document.getElementById("drugname").value; 
jsconcentration = document.getElementById("concentration").value;
jslowerrange = document.getElementById("lowerrange").value;  
jsUpperRange = document.getElementById("upperrange").value;  

let multiplyByLowWeight = jsweight * jslowerrange 
document.getElementById("multiplybylowweight").innerHTML = multiplyByLowWeight

let multipleByHighWeight = jsweight * jsUpperRange
document.getElementById("upperRangeWeight").innerHTML = multipleByHighWeight


jsDosePerDay = document.getElementById ("dosePerDay").value 

if (jsDosePerDay >= multiplyByLowWeight && jsDosePerDay < multipleByHighWeight) {
  document.getElementById("doseRangeConfirm").innerHTML = "Within range" 
  document.getElementById("doseRangeConfirm").style.color = "#40bf40";
} else {
  document.getElementById("doseRangeConfirm").innerHTML = " WARNING : Not at within range. Please double check dose !"
  document.getElementById("doseRangeConfirm").style.color = "#ff471a";
}

let jsVolumePerDay = jsDosePerDay / jsconcentration 
document.getElementById ("volumePerDay").innerHTML = jsVolumePerDay

let jsVolumePerTwoWeeks = jsVolumePerDay * 14
document.getElementById ("volumePerTwoWeeks").innerHTML = jsVolumePerTwoWeeks



}

let btnTwo = document.getElementById("submitButtonTwo");
btnTwo.addEventListener('click', event => {
  mySecondFunction();
});

function mySecondFunction() {

jsVolumeCompounded = document.getElementById("volumeCompounded").value

let jsIngredientMg = jsconcentration * jsVolumeCompounded;
document.getElementById ("ingredientInMg").innerHTML = jsIngredientMg

let jsIngredientG = jsIngredientMg/1000;
document.getElementById ("ingredientInGram").innerHTML = jsIngredientG;
}
