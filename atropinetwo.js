function atropine() {
  var select = document.getElementById("conc-select");
  const rxConc = document.getElementById("rxConc").value
  var value = select.options[select.selectedIndex].value;
  if (value == rxConc) {
      document.getElementById("prescriptionResult").innerHTML = "Correct";
      document.getElementById("prescriptionResult").style.color = "#40bf40";
  } else {
      document.getElementById("prescriptionResult").innerHTML = "Incorrect";
      document.getElementById("prescriptionResult").style.color = "#ff471a"; 
  }
  if ((rxConc == 0.5) || (rxConc == 0.1)) {
      document.getElementById("additionNote").innerHTML = "CAUTION: This is the HIGH concentration";
  } else {
      document.getElementById("additionNote").innerHTML = " "
  }

}

function sheet() {
var mixtureNum = document.getElementById("mix#").value;
var formulaNum = document.getElementById("formulaID").value;
const rxConc = document.getElementById("rxConc").value
if ((rxConc == 0.01 && mixtureNum == 0822 && formulaNum == 4303) || 
 (rxConc == 0.02 && mixtureNum == 3215 && formulaNum == 4305) || 
 (rxConc == 0.02 && mixtureNum == 3138 && formulaNum == 4305) ||
 (rxConc == 0.015 && mixtureNum == 3347 && formulaNum == 4304) ||
 (rxConc == 0.025 && mixtureNum == 3040 && formulaNum == 4307) ||
 (rxConc == 0.03 && mixtureNum == 3651 && formulaNum == 3792) ||
 (rxConc == 0.05 && mixtureNum == 3039 && formulaNum == 4308)||
 (rxConc == 0.5 && mixtureNum == 3048 && formulaNum == 1374))
{
  document.getElementById("sheetResult").innerHTML = "Correct";
  document.getElementById("sheetResult").style.color = "#40bf40";
} else {
  document.getElementById("sheetResult").innerHTML = "Incorrect";
  document.getElementById("sheetResult").style.color = "#ff471a";
}

} 

function bottleConc() {
  const rxConc = document.getElementById("rxConc").value
  const bottleConc = document.getElementById("bottleConc").value
  if (rxConc == bottleConc) {
      document.getElementById("bottleConcResult").innerHTML = "Correct";
      document.getElementById("bottleConcResult").style.color = "#40bf40";
  } else {
      document.getElementById("bottleConcResult").innerHTML = "Incorrect";
      document.getElementById("bottleConcResult").style.color = "#ff471a";
  }

}

function bottleNum() {
  var mixtureNum = document.getElementById("mix#").value;
  const bottleNum = document.getElementById("bottleMix#").value;
  if (mixtureNum == bottleNum) {
      document.getElementById("bottleNumResult").innerHTML = "Correct";
      document.getElementById("bottleNumResult").style.color = "#40bf40"; 
  } else {
      document.getElementById("bottleNumResult").innerHTML = "Incorrect";
      document.getElementById("bottleNumResult").style.color = "#ff471a";
  }
}

function finalCheck (){
if(document.getElementById("prescriptionResult").innerHTML == "Correct" &&
document.getElementById("bottleNumResult").innerHTML == "Correct" &&
document.getElementById("bottleConcResult").innerHTML == "Correct" &&
document.getElementById("sheetResult").innerHTML == "Correct" ) {
  window.alert("PERFECT! GO AHEAD and dispense the medication!")
} else {
  window.alert("WARNING. You did not pass all the steps. Please check again")
  }
};