let mysql = require("mysql");
let inquirer = require("inquirer");

var connection = mysql.createConnection({
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
    console.log("connected as id " + connection.threadId + "\n");
    createItem();
});

function createItem() {
    console.log("Adding a new item...\n");
    inquirer.prompt([
        {
            type: "input",
            name: "product",
            message: "Name of product?"
        },
        {
            type: "input",
            name: "dept",
            message: "Department?"
        },
        {
            type: "input",
            name: "price",
            messagess: "Price of product?"
        },
        {
            type: "input",
            name: "quantity",
            message: "Quantity of product available?"
        }
    ]).then(function (item) {
        var query = connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: item.product,
                department_name: item.dept,
                price: item.price,
                stock_quantity: item.quantity
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " item added!\n");
            }
        );

        console.log(query.sql);
    })
}