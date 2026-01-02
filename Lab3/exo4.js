const fs = require("fs");

let filename = process.argv[2];   // destination file
let text = process.argv[3];       // text to save

if (!filename || !text) {
    console.log("Usage: node exo4.js <filename> \"text to save\"");
    process.exit(1);
}

// Write to file
fs.writeFile(filename, text, "utf8", (err) => {
    if (err) {
        console.error("Error writing file:", err.message);
        return;
    }

    console.log("The file has been saved!");

    // Read file contents (part 3)
    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }
        console.log("\n=== File content ===");
        console.log(data);
    });
});
