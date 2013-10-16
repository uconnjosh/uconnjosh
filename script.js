
$(function() {
	var countto = parseInt(prompt("How high would you like me to count?"));  //Prompts the user for input, and converts data from string to interger
		var array = [];
		for (var index = 1; index <= countto; index += 1) {
			array.push(index);} 	 //This is a loop that fills up the array with digits, up to the number 'countto' which is the number inputted by the user.


array.forEach(function(fizzbuzz) {
if (fizzbuzz%15 === 0) {
$('#numbers').append("FizzBuzz" + "<br/><br/>");  /*If a number is divisible by both 3 and 5, it is also divisible by 15. 
											This inspects each number in the array, and if it is divisible by 15, 
											'fizzbuzz' is printed to the 'numbers' span in my HTML. This is actually accomplished by using %, which 
											returns the remainder when one number is divisible by another. Here
											I have an if function setup such that it finds the remainder, and if 
											it is 0, it will print 'fizzbuzz' */ 
} else if (fizzbuzz%3 === 0) {
$('#numbers').append("Fizz" + "<br/><br/>");  //The same occurs for numbers evenly divisible by 3, except here the comp. will print "fizz"
} else if (fizzbuzz%5 === 0) {
$('#numbers').append("Buzz" + "<br/><br/>");   //And if divisible by 5, 'buzz.'
} else {
$('#numbers').append(fizzbuzz + "<br/><br/>");  //Finally, if not divisible by 3 or 5, the computer will print the number.
};
});




});
