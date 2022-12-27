//1. Check 2 integers and print its an integer.
var a = 10;
var b = 20;

if(a == b){
    console.log("Its an integer");
}

//2. Check 2 strings which is equal or not. 
var a = "hello";
var b = "hello";

if(a == b){
    console.log("String are equal");
}

//3. Declare a variable if it is string print it is string else print it is integer

var a = 10;

if(typeof(a) == "string"){
    console.log("string");
}else{
    console.log("integer");
}

//4. Create your own program using if else if statement.

var a = 40, b = 20;

if(a > b){
    console.log("a is greater than b");
}else if(a < b){
    console.log("b is greater than a");
}else{
    console.log("a equal to b");
}