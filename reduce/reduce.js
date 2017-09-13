import fs from 'fs';

// reduce is the multi tool of list transformations
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount;
// }

// 0 is the starting point for our sum
// The second argument is the iterated item
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

// 'split' splits a string into an array
var output = fs.readFileSync('./data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(' '))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers;
    }, {});

console.log('output', JSON.stringify(output, null, 2))