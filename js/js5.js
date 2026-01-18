//settimeout

//return an object of promise class
const { resolve } = require("path");

function setTimeoutPromisified(ms){
     let p = new Promise(resolve=> setTimeout(resolve , ms));
      return p;  //returning the object of promise class
}

function callback(){ 
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);