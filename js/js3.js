const fs=require("fs");
 function content(err,data){
    if(err){
        console.log("error occured");
        return;
    } else{                      
    console.log(data);
    }
 }
 fs.readFile("a.txt" , "utf-8",content);

 fs.readFile("c.txt" , "utf-8",content);

 console.log("done!!");

//////////////////////////////////////////////////////////
 fs.readFile("b.txt" , "utf-8",function(err,data){
    if(err){
        console.log("error occured");
        return;
    } else{
        console.log(data);
    }
 });

 ///setTimeout
    console.log("hey there!!");
    function timeout(){
        console.log("timeout done!!");
    }
    setTimeout(timeout,3000);

    console.log("i am done!!");


    //settimeout
    setTimeout(function(){
        console.log("3 seconds done!!");
    },3000);