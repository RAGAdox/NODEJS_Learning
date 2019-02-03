//CREATING A FINCTION AND STORING IT TO A VARIABLE AND EXPORT IT
/*
var counter=function(arr){
  console.log('Number of elements in the given array is '+arr.length);
};
module.exports=counter;
*/
//CREATING MULTIPLE FUNCTIONS AND EXPoRTING THEM
//method 1:-
/*
var counter=function(arr){
  console.log('Number of elements in the given array is '+arr.length);
};
var adder=function(a,b){
  console.log(`sum of the 2 variable is ${a+b}`);
}
var pi=3.14;
module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;
*/
//method 2:-
/*
module.exports.counter=function(arr){
  console.log('Number of elements in the given array is '+arr.length);
};
module.exports.adder=function(a,b){
  console.log(`sum of the 2 variable is ${a+b}`);
}
module.exports.pi=3.14;
*/
//MEthod 3:-
var counter=function(arr){
  console.log('Number of elements in the given array is '+arr.length);
};
var adder=function(a,b){
  console.log(`sum of the 2 variable is ${a+b}`);
}
var pi=3.14;
module.exports={
  counter:counter,
  adder:adder,
  pi:pi
};
