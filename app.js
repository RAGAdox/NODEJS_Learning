//CHECKING IF NODE WAS INSTALLED PROPERLY
//console.log('Hii this is my first program in node js');
//global objects in node js
/*
setTimeout(function(){
  console.log('3 sec have passed');
},3000);
*/
/*
var time=0
setInterval(function(){
  time=time+2
  console.log('time elasped :- '+time+'seconds');
},2000);
var timeout=setInterval(function(){
  time=time+2;
  console.log('time elasped :- '+time+'seconds');
  if(time>5)
  {
    console.log('10 seconds has passed \nclearing interval');
    clearInterval(timeout);
  }
},2000);*/
//some more global objects
//console.log('current directory $'+__dirname);
//console.log('current file $'+__filename);

//normal function in javascript
/*
function sayHi(){
  console.log('Hii ');
}
sayHi();
*/
//function Expression
/*
var sayBye=function(){
  console.log('Bye ...');
}
sayBye();
*/
//module patterns in node js
//made a function stored in a variable counter in the file count.js

var counter=require('./count');
console.log(counter([1,2,3,4,5,6,7]));



























//creating a local serverin node.js
var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
