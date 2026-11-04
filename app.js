const fs = require('fs'); // Import Node.js core module
const path = require('path');
const dirpath =path.join(__dirname,'/input');

const files = [];

for (let i = 1; i <= 10; i++) {
    files.push(path.join(dirpath, `a${i}.txt`));
}
let result = '';
for (let i = 0; i < files.length; i++) 
    {
    const content = fs.readFileSync(files[i], 'utf8');
    const lines = content.split(/\r?\n/);
    const selectedLines = lines.slice(0, i + 1);
    result += selectedLines.join('\n') + '\n';
}
fs.writeFileSync('output.txt', result, 'utf8');
console.log('Copy completed successfully!');