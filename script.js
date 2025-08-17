function toFahrenheit(celsius) {
 // Write your code here
	const feh = celsius*(9/5)+32; 
	let realFeh=feh.toFixed(2);
	console.log(realFeh);
	  
}
 
// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));

