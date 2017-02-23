var total = 0;
var receipt = [];

console.log("myString");

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

	function Order() {
  
  var myString = document.getElementById("order").value;
	var Order = myString.split(",");
  
  for (var i=0; i<Order.length; i++) {
		Order[i] = Order[i].trim();


	receipt.push (Order[i]);
	}
}
