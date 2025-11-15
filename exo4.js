const fs = require('fs');

const filename = process.argv[2];
const text = process.argv[3];

if (!filename || !text) {
    console.log("Usage: node exo4.js <filename> <text>");
    process.exit(1);
}

fs.writeFileSync(filename, text);
console.log("The file has been saved!");

const data = fs.readFileSync(filename, 'utf8');
console.log(data);
