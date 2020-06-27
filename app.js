function getNumber(num){

	var result=document.getElementById(output);
	output.value += num;
}
function clearbtn(){

	var result=document.getElementById(output);
	output.value ="";
}
function show(){

	var result=document.getElementById(output);
	output.value = eval(output.value);
	console.log(output.value);
}
function Result(){

	var result=document.getElementById(output);
	console.log(output.value);
}

