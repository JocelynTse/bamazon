CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50),
price DEC(10,2) NOT NULL,
stock_quantity INTEGER NOT NULL
);

INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES ('toothbrush', 'health', 4.00, 20);
    
INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('toothpaste', 'health', 5.00, 20);

INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('fork', 'kitchen', 10.00, 20);
    
INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('knife', 'kitchen', 15.00, 20);

INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('notebook', 'office', 5.00, 20);
    
INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('pen', 'office', 4.00, 20);

INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('shirt', 'clothing', 25.00, 20);
    
INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('pants', 'clothing', 30.00, 20);

INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('doll', 'toy', 20.00, 20);
    
INSERT INTO
	products (product_name, department_name, price, stock_quantity)
VALUES
	('dollhouse', 'toy', 40.00, 20);