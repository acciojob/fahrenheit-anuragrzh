function toFahrenheit(celsius) {
 // Write your code here
	let feh = celsius*(9/5)+32; 
	let realFeh=feh.toFixed(2);
	
	    return realFeh;
}
 
// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));

