const fs = require('fs'); // Import Node.js core module
const path = require('path');
const dirpath =path.join(__dirname,'/input');

const files = [];  // Create an empty array to store the paths of the input files
// Loop from 1 to 10 to create the paths for the 10 text files
for (let i = 1; i <= 10; i++) {
    files.push(path.join(dirpath, `a${i}.txt`));
}
let result = '';  // Create an empty string to store all the selected content
// Loop through all 10 files
for (let i = 0; i < files.length; i++) 
    {
    const content = fs.readFileSync(files[i], 'utf8');
    const lines = content.split(/\r?\n/);
    const selectedLines = lines.slice(0, i + 1);
    result += selectedLines.join('\n') + '\n';  // Add the selected lines to the result, followed by a new line
}
fs.writeFileSync('output.txt', result, 'utf8');
console.log('Copy completed successfully!'); // Display a success message in the terminal