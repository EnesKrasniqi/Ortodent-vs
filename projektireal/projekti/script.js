function myFunction() {
    alert("Une quhem Sokol Krasniqi profesor ne Univerzitetin e Kosoves...");
    
  }


function myyFunction(){
document.getElementById("niveli").style.backgroundColor = "darkblue";
document.getElementById("niveli").style.color = "red";
}

function puna(){
    document.getElementById("puna").style.backgroundColor = "darkblue";
    document.getElementById("puna").style.color = "red";
    }

function thenia(){
        document.getElementById("thenia").style.backgroundColor = "darkblue";
        document.getElementById("thenia").style.color = "red";
}

    var x, y;
    x = 10 + 10;
    y = x * 5;
    document.getElementById("variablat").innerHTML = y;


const Emri = {
niveli: "ass.dr.prof:",
firstName:"Sokol",
lastName: "Krasniqi",
      fullName: function() {
        return this.niveli + " " + this.firstName + " " + this.lastName;
      }
}
document.getElementById("niveli").innerHTML = Emri.fullName();