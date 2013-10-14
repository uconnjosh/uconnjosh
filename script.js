
$(function() {
	var countto = parseInt(prompt("How high would you like me to count?"));
		var array = [];
		for (var index = 1; index <= countto; index += 1) {
			array.push(index);}


array.forEach(function(fizzbuzz) {
if (fizzbuzz%15 === 0) {
$('#numbers').append("FizzBuzz" + "<br/><br/>");
} else if (fizzbuzz%3 === 0) {
$('#numbers').append("Fizz" + "<br/><br/>");
} else if (fizzbuzz%5 === 0) {
$('#numbers').append("Buzz" + "<br/><br/>");
} else {
$('#numbers').append(fizzbuzz + "<br/><br/>");
};
});




});
