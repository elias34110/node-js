let arr = [5, 0, 3, 0, 8, 0, 2, 7];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    count += (arr[i] === 0) ? 1 : 0;
}

console.log("Number of zeros:" +count);