function determineMultiplier(diag, bot, side){
	return Math.sqrt(Math.pow(diag, 2) / (Math.pow(bot,2) + Math.pow(side,2)));
}

function determineNewLength(mult, bot, side){
	return Math.sqrt(Math.pow((mult)*(bot),2)+Math.pow((mult)*(side),2));
}

function getHeight(diag, bot, side){
	return side * determineMultiplier(diag, bot, side);
}

function getLength() {
 	var diag = document.getElementById("diag").value;
	var bottomCurr = document.getElementById("bottomCurr").value;
	var sideCurr = document.getElementById("sideCurr").value;
	var bottomNew = document.getElementById("bottomNew").value;
	var sideNew = document.getElementById("sideNew").value;
	var newMult = getHeight(diag, bottomCurr, sideCurr) / sideNew;
	return determineNewLength(newMult, bottomNew, sideNew);
}

function main(){
	document.getElementById("diagNew").innerHTML = Math.round(getLength() * 100)/100;
}

var Interval = setInterval(main,1000);
