CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES  (01, 'Water Bottle', 'Grocery', 1.00, 999),
		(02, 'Gillete Fusion Razor', 'Cosmetics', 14.99, 690),
		(03, 'Italian Bread', 'Grocery', 2.99, 400),
		(04, ' Paper Towels', 'Grocery', 4.25, 100),
		(05, 'Greek Cheese', 'Produce', 0.35, 200),
		(06, 'Gum', 'Produce', 1.25, 10000),
		(07, 'Green Apples', 'Grocery', 1.45, 239),
		(08, 'Almond Milk', 'Grocery', 4.50, 200),
		(09, 'Pacifier', 'Children', 2.75, 476),
		(10, 'Toilet Paper', 'Grocery', 12.99, 575),
		(11, 'Baby Wipes', 'Children', 1.50, 423),
		(12, 'Soccer Ball', 'Sports', 39.99, 155),
		(13, 'Medicine Ball', 'Sports', 7.99, 88),
		(14, 'Black Crew Neck Tee', 'Clothing', 5.55, 125),
		(15, 'Nike Shorts', 'Clothing', 44.99, 250),
		(16, 'Gold Fish Food', 'Pet', 2.99, 157),
		(17, 'Cranberry Juice', 'Produce', 12.50, 160),
		(18, 'Cough Syrup', 'Pharmacy', 19.95, 5),
		(19, 'Allergy Pills', 'Pharmacy', 4.25, 550),
		(20, 'Tropicana Orange Juice', 'Grocery', 4.25, 430);
        