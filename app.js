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
//now to access the function we use the following snippet
/*
var counter=require('./count');
console.log(counter([1,2,3,4,5,6,7]));
*/
//importing multiple functions from other file method 1 & method 2 & method 3:-
/*
var stuff=require('./count');
console.log(stuff.counter([1,2,3,4,5,6,7]));
console.log(stuff.adder(10,111));
console.log(`PI=${stuff.pi}`);
*/


//EVENT MODULE
//events module is present in NODEJS library so we dont have to provide a path for events
//Example 1
/*
var event=require('events');
var myEmitter=new event.EventEmitter(); //creating a EventEmitter
myEmitter.on('someEvent',function(msg){
  console.log(msg);
});
myEmitter.emit('someEvent','the Event was emmited');//manually  emitting the custome event
*/
//Example 2
/*var events=require('events');
var util=require('util');
var Person=function(name){
  this.name=name;
};
util.inherits(Person,events.EventEmitter);
var a=new Person('a');
var b=new Person('b');
var c=new Person('c');
var people=[a,b,c];
people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name+" said "+mssg);
  });
});
a.emit('speak','hey how are You ?');*/
//LECT 8 complete
//READING AND WRITING FILE using node .js
//synsronous method of reading and writing
/*var fs=require('fs');
var readme=fs.readFileSync('readme.txt','utf8');
console.log(readme);
fs.writeFileSync('writeme.txt',readme+"\nthis is writeme.txt");*/
//asyncronous method of reading and writing
/*var fs=require('fs');
fs.readFile('readme.txt','utf8',function(err,data){
  console.log(data);
  fs.writeFile('write.txt',data,function(err,data){
    console.log("written");
    
  })
});
console.log("this was a async method of reading the file");*/
//LEcture 9 complete
//deleting files
/*var fs=require('fs');
fs.unlink('write.txt',function(err){
  if(err==null)
    console.log('file deleted successfully');
  else
    console.log(err);
});*/
//Creating and removing directories
//var fs=require('fs');
//create dir
/*fs.mkdirSync('stuff');*/
//remove dir
/*fs.rmdirSync('stuff');*/
//in async method
/*fs.mkdir('folder',function(err){
  if(err==null)
    console.log('dir created successfully');
  else
    console.log(err);
    
});
fs.rmdir('folder',function(err){
  if(err==null)
    console.log('dir removed successfully');
  else
    console.log(err);
    
});*/
//creating a direcory and writing into it 
/*fs.mkdir('dir',function(err){
  if(err==null)
  {
    fs.writeFile('./dir/write.txt','this file is written after directory is created',function(err){
      if(err==null)
        console.log("file written successfully");
    });
  }
});*/
//to remove this dir .
//in node js non empty folders cant be removed by rmdir .we have to clear it first and then remove it
/*fs.unlink('./dir/write.txt',function(err){
  if(err==null)
  fs.rmdir('dir',function(err){
    if(err==null)
      console.log('dir removed successfully');
    else
      console.log(err);
      
  })
});*/
//CLIENTS AND SERVERS IN NODE js 
/*var http=require('http');
var server=http.createServer(function(req,res){
  console.log('request made from '+req.url);
  
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hii from node server');
});
server.listen(3000);
console.log('Listening to port 3000');*/


















/*

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
*/
