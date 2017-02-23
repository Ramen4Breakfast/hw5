var total = 0;
var receipt = [];
arrayLength = 0

function addMushroom() {
    total++;
    document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
    receipt.push("Mushrooms");
}

function addOlive() {
    total++;
    document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
    receipt.push("Olives");
}

function addPepper() {
    total++;
    document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
    receipt.push("Peppers");
}

function clearAll() {
    total = 0;
    receipt = []
    document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
    document.getElementById('receipts').innerHTML = "Please Select Toppings";
}

function typeTotal() {
    document.getElementById('typeTotal').innerHTML = "Your Number of Toppings: " + total;
}

function printReceipt() {
    document.getElementById("receipts").innerHTML = receipt;
}

function Ordering() {
    var myString = document.getElementById("order").value;
    console.log(myString);
    var Order = myString.split(",");
    for (var i = 0; i < Order.length; i++) {
        receipt.push(Order[i]);
    }
    total = receipt.length;
    document.getElementById('total').innerHTML = "Your Number of Toppings: " + total;
}