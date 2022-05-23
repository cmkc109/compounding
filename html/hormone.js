
let btn = document.getElementById("submitRatio");
btn.addEventListener('click', event => {
    myFunction();
  });

  function myFunction () {
    var biestObj = document.getElementById("ratio-select")
    var biestValue = biestObj.options[biestObj.selectedIndex].value; 
    var vehicleVolume = document.getElementById ("vehicle-select")
    var vehicleValue = vehicleVolume.options[vehicleVolume.selectedIndex].value; 
    jsVolume = document.getElementById("prescribed").value; 



if (biestValue == 8020 && vehicleValue == 0.2) {
        let biestDosePerDay = document.getElementById("biestDose").value
        document.getElementById ("e3DosePerDay").innerHTML = biestDosePerDay * 0.8;
        document.getElementById ("e2DosePerDay").innerHTML = biestDosePerDay * 0.2;
        document.getElementById ("e3DoseTotal").innerHTML = biestDosePerDay * 0.8 / 0.2 * jsVolume 
        document.getElementById ("e2DoseTotal").innerHTML = biestDosePerDay * 0.2 / 0.2 * jsVolume
        document.getElementById ("e3DoseTotalGm").innerHTML = (biestDosePerDay * 0.8 / 0.2 * jsVolume)/1000
        document.getElementById ("e2DoseTotalGm").innerHTML = (biestDosePerDay * 0.2 / 0.2 * jsVolume)/1000
} else if  (biestValue == 5050 && vehicleValue == 0.2) {
        let biestDosePerDay = document.getElementById("biestDose").value
        document.getElementById ("e3DosePerDay").innerHTML = biestDosePerDay * 0.5;
        document.getElementById ("e2DosePerDay").innerHTML = biestDosePerDay * 0.5;
        document.getElementById ("e3DoseTotal").innerHTML = biestDosePerDay * 0.5 / 0.2 * jsVolume
        document.getElementById ("e2DoseTotal").innerHTML = biestDosePerDay * 0.5 / 0.2 * jsVolume
        document.getElementById ("e3DoseTotalGm").innerHTML = (biestDosePerDay * 0.5 / 0.2 * jsVolume)/1000
        document.getElementById ("e2DoseTotalGm").innerHTML = (biestDosePerDay * 0.5 / 0.2 * jsVolume)/1000
        console.log(document.getElementById ("e3DosePerDay").innerHTML);
} else {
    console.log ("Error")
}
}

// Testosterone section

let btnTest = document.getElementById("submitTest");
btnTest.addEventListener('click', event => {
    testFunction();
  });

function testFunction () {
jsTestInMg = document.getElementById("testDose").value; 
jsVolume = document.getElementById("prescribed").value; 
const vehicleVolume = document.getElementById ("vehicle-select")
vehicleValue = vehicleVolume.options[vehicleVolume.selectedIndex].value; 
document.getElementById("testDoseTotalMg").innerHTML = jsTestInMg / vehicleValue * jsVolume;
document.getElementById("testDoseTotalGm").innerHTML = jsTestInMg / vehicleValue * jsVolume / 1000;


}

// Progesterone section

let btnProg= document.getElementById("submitProg");
btnProg.addEventListener('click', event => {
  progFunction();
});

function progFunction () {
jsProgInMg = document.getElementById("progDose").value;
jsVolume = document.getElementById("prescribed").value;
const vehicleVolume = document.getElementById("vehicle-select");
vehicleValue = vehicleVolume.options[vehicleVolume.selectedIndex].value; 
document.getElementById("progDoseTotalMg").innerHTML = jsProgInMg / vehicleValue * jsVolume;
document.getElementById("progDoseTotalGm").innerHTML = jsProgInMg / vehicleValue * jsVolume / 1000;

}

// DHEA section
let btnDHEA = document.getElementById("subtDHEA");
btnDHEA.addEventListener('click', event => {
  dheaFunction();
});

function dheaFunction () {
  jsDHEAInMg = document.getElementById('dheaDose').value;
  jsVolume = document.getElementById("prescribed").value;
  const vehicleVolume = document.getElementById("vehicle-select");
  vehicleValue = vehicleVolume.options[vehicleVolume.selectedIndex].value;  
  document.getElementById("dheaDoseTotalMg").innerHTML = jsDHEAInMg / vehicleValue * jsVolume;
  document.getElementById("dheaDoseTotalGm").innerHTML = jsDHEAInMg / vehicleValue * jsVolume / 1000;
}




// Hiding section

function hideProgesterone() {
    var x = document.getElementById("progesterone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function hideDHEA() {
    var x = document.getElementById("DHEA");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function hideBIEST() {
    var x = document.getElementById("biest");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function hideTestosterone() {
    var x = document.getElementById("testosterone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }