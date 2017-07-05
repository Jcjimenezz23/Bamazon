//require necessary packages
var inquirer = require("inquirer");
var mysql = require("mysql");

//create the mysql connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: " ",
	database: "Bamazon"
});

//making sure user inputs valid integer

 function validInput(value) {
 	var integer = Number.isInteger(parseFloat(value));
 	var sign = Math.sign(value);

 	if (integer && (sign === 1)) {
 		return true;
 	}else {
 		return "Enter a whole non-zero number";
 	}
 }

 //function that will prompt the user all items available to buy 
function promptItems() {

	// Prompt the user to select an item they would like to purchase
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

		// Query db to confirm that the given item ID exists in the desired quantity
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			// If the user has selected an invalid item ID, data attay will be empty
			// console.log('data = ' + JSON.stringify(data));

			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				displayInventory();

			} else {
				var itemData = data[0];

				// If the quantity requested by the user is in stock
				if (quantity <= itemData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! Placing order!');

					// Construct the updating query string
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (itemData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your order has been placed! Your total is $' + itemData.price * quantity);
						console.log('Thank you for shopping with us, your business is highly appreciated.');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock, your order can not be placed.');
					console.log('Please exchange your order.');
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}

function displayStocks() {
	//create the db query string
	queryStr = "SELECT * FROM products";

	//db query
	connection.query(queryStr, function(err, data) {
		if(err) throw err;
		console.log("Current Inventory: ");
		console.log("-------------\n");

		var store = " ";
		for (var i = 0; i < data.length; i++) {
			store = '';
			store += 'Item ID: ' + data[i].item_id + '  //  ';
			store += 'Product Name: ' + data[i].product_name + '  //  ';
			store += 'Department: ' + data[i].department_name + '  //  ';
			store += 'Price: $' + data[i].price + '\n';

			console.log(store);
		}

		console.log("---------------------\n");

		//prompt the user what they would like to purchase
		promptUserPurchase();
	})

}

//function that will run Bamazon
function runBamazon() {

	//will display the current inventory
	displayInventory(); 
}

runBamazon();

