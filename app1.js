//asincroni way
const fs = require('fs');
fs.writeFileSync('output1.txt','output1.txt');
fs.readFile('input.txt',"utf8",(err,result)=>
    {
        if(err)
        {
            console.log(err.message);
            return;
        }
        fs.writeFile('output1.txt',result+"\n\nProcessed by Node.js",(err,result)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('End!');
        }
    )
    })
    
//second way
//const input = __dirname + "/input.txt";
//const output = __dirname + "/output1.txt";