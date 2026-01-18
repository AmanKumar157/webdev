
//heavy i/o operation
//reading files from file system

const fsa= require("fs");
const data = fsa.readFileSync("a.txt","utf-8");   //bytes ,hex ---encoading
console.log(data);


