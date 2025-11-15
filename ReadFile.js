const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
    console.log("Please provide a file name!");
    process.exit(1);
}

const data = fs.readFileSync(filename, 'utf8');
console.log(data);
