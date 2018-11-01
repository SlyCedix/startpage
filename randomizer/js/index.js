function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function generate() {  
  var rand = Math.round(Math.random() * 100);
  document.getElementById("randomNumber").innerHTML = rand;
  
  if( rand > 60 ){
    document.getElementById("wrapper").style.backgroundColor = "#69F0AE";
    if(rand == 100){
       document.getElementById("payment").innerHTML = '$' + document.getElementById("paid").value * 4.00;
    } else if(rand > 95){
       document.getElementById("payment").innerHTML = '$' + document.getElementById("paid").value * 2.00; 
    } else if(rand > 90){
       document.getElementById("payment").innerHTML = '$' + document.getElementById("paid").value * 1.75;
    } else if(rand > 80){
       document.getElementById("payment").innerHTML = '$' + document.getElementById("paid").value * 1.50;
    } else {
       document.getElementById("payment").innerHTML = '$' + document.getElementById("paid").value * 1.25;
    }
  } else {
    document.getElementById("payment").innerHTML = "$0";
    document.getElementById("wrapper").style.backgroundColor = "#FF5252";
  }
}