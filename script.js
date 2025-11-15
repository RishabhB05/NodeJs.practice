//this will take the add function from math.js and use it here
// const {add, subtract,multiply, divide } = require('./math');

// const addition= add(5, 7);
// console.log(`The sum of 5 and 7 is: ${addition}`);

// const subtraction= subtract(10, 4);
// console.log(`The difference of 10 and 4 is: ${subtraction}`);

// const multiplication= multiply(3, 6);
// console.log(`The product of 3 and 6 is: ${multiplication}`);

// const division= divide(20, 5);
// console.log(`The quotient of 20 and 5 is: ${division}`);




const fs = require('fs');

//sync file creation
//while sync returns the data after completion
fs.writeFileSync('.test.txt', 'This is a test file created using Node.js fs module.');
//async file creation
//async does not return anything 
fs.writeFile('.test.txt', 'This is a test file created using Node.js fs module.');


//async file reading
//while async uses callback to return the data after completion
fs.readFile('./.test.txt', 'utf8', (err, data) => {
    if (err) {  
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

//read file sync
//while sync returns the data after completion
const result = fs.readFileSync('./.test.txt', 'utf8');
console.log('File contents (sync):', result);


//append to a file sync
//why this is usefull: suppose we making a webserver log.txt and whenever we get incomming request we we store the ip address of the user in log.txt so we can append the ip address to log.txt whenever we get a request
fs.appendFileSync('.test.txt', '\nThis is an appended line (sync).');

