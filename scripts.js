var total = 0;
var receipt = [];
var myString = document.getElementById("order").value;

function showString()
{
	console.log(order);
}

function addMushroom()
{
	total++;
	document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
	receipt.push ("Mushrooms");
}

function addOlive()
{
	total++;
	document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
	receipt.push ("Olives");
}

function addPepper()
{
	total++;
	document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
	receipt.push ("Peppers");
}

function clearAll()

{
	
	total = 0;
	receipt = []
  	document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
  	document.getElementById('receipt').innerHTML = "Please Select Toppings";

}

function typeTotal()

{
	document.getElementById('typeTotal').innerHTML = "Your Number of Toppings: " + total;

}

function printReceipt()
{

	document.getElementById("receipt").innerHTML = receipt;

}