
console.log("WELCOME ON AHAD CURRENCY CONVERTER");

import inquirer from "inquirer";

let conversion = {
    "PKR":{
        "USD": 0.0036,
        "EUR": 0.0033,
        "WON": 4.87,
        "YEN": 0.53,
        "PKR": 1
    },
    "USD":{
        "PKR": 277.45,
        "EUR": 0.91,
        "WON": 1349.97,
        "YEN": 147.66,
        "USD": 1
    },
    "EUR":{
        "PKR": 302.07,
        "USD": 1.10,
        "WON": 1489.22,
        "YEN": 162.95,
        "EUR": 1
    },
    "WON":{
        "PKR": 0.21,
        "USD": 0.00074,
        "EUR": 0.00067,
        "YEN": 0.11,
        "WON": 1
    },
    "YEN":{
         "PKR": 1.88,
         "USD": 0.0068,
         "EUR": 0.0061,
         "WON": 9.14,
         "YEN": 1
    }
};


const answer:{
    from: "PKR" | "USD" | "EUR" | "WON" | "YEN",
    to: "PKR" | "USD" | "EUR" | "WON" | "YEN",

    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select the currency you want to convert from",
        choices: ["PKR", "USD", "EUR", "WON", "YEN"],
            default: "PKR",
    },
    {
                type: "list",
                name: "to",
                message: "Select the currency you want to convert to",
                choices: ["PKR", "USD", "EUR", "WON", "YEN"]
    },
    {
                type: "number",
                name: "amount",
                message: "Enter the amount you want to convert",
    }
]);

    const {from,to,amount} = answer

    if (from && to && amount) {
        let result = conversion[from][to] * amount
        console.log(`your conversion from ${from} to ${to} is ${result}` );
        
    } else {
        console.log("invalid input");
        
    }
            