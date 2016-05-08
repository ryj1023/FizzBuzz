$(document).ready(function(){
 

for (var i = 1; i <= 100; i++)
{
var a = i%15 == 0;
var b = i%3 == 0;
var c = i%5 == 0;

	if (a)
	{	
	$('#list').append('<li class="numbers"> <span>' + "FizzBuzz" + '</span> </li>');
	}
	else if (b)
	{
	$('#list').append('<li class="numbers"> <span>' + "Fizz" + '</span> </li>');
	}

	else if (c)
	{
	$('#list').append('<li class="numbers"> <span>' + "Buzz" + '</span> </li>');
	}
	else 
		
	$('#list').append('<li class="numbers"> <span>' + i + '</span> </li>');	
}

});
