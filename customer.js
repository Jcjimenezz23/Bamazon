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

 