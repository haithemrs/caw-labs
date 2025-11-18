const fs = require("fs");

let filename = process.argv[2];

if (!filename) {
    console.log("Please provide a file name!");
    process.exit(1);
}

fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data);
});
