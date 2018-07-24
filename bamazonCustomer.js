let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
  });

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as ID " + connection.threadId);
    listProducts();
});

function listProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " || Product: " + res[i].product_name + " | Price: $" + res[i].price);
        };
    });
    placeOrder();
};

function placeOrder() {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the ID for the product you would like to purchase?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
        }
    ]).then(function (order) {
        let query = "SELECT stock_quantity FROM products WHERE ?";
        connection.query(query, { item_id: order.id }, function (err, res) {
            if (err) throw err;
            console.log(res);
        })
    })
}