const { isUtf8 } = require('buffer');
const fs =require('fs');
const path=require('path');
const fileDir=path.join(__dirname,'CRUDoperation');
const filePath=`${fileDir}/file.js`;

//we can create files
fs.writeFileSync(filePath,'file is successfully created');

//we can read files
fs.readFile(filePath,'utf-8',(err, data) => {
    if(!err) console.log(data);
})

// we can update the file
fs.appendFile(filePath,' add infront of file',(err, data) => {
    console.log('file added')
});