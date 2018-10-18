function whatToWear () {
	var result = "Since it is "; 
	var tempFahr = prompt("What is the temperature outside?", "Enter temp. in degrees F");
	var eventType = prompt("What type of event are you attending?", "casual, semi-formal, formal?");
	
	result = result + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear ";

	if (eventType === "casual") {
		result = result + "something comfy";
	}
	else if (eventType === "semi-formal") {
		result = result + "a polo";
	}
	else if (eventType === "formal") {
		result = result + "a suit";
	}
	else result = result + "a tank top";
	
	result = result + " and ";
	
	if (parseInt(tempFahr, 10) < 54) {
		result = result + "a coat";
	}
	else if (parseInt(tempFahr, 10) >= 54 && parseInt(tempFahr, 10) <=70) {
		result = result + "a jacket";
	}
	else if (parseInt(tempFahr, 10) > 70) {
		result = result + "no coat";
	}
	else result = result + "a duster";
	
	result = result + ".";
	
	console.log(result);
}

whatToWear();