// for loop
// 1) Using for loop print an output as mentioned below:
//  1
//  3
//  5
//  7
//  9 

for(var i = 1; i <= 9; i+=2 ){
    console.log(i)
}

console.log("\n");
// 2) Using for loop and if statement print an output as follows:
//  1
//  3
//  5
//  7
//  9
//  11 

for(var i = 1; i <= 11; i+=2 ){
    console.log(i)
}

console.log('\n');

// for in loop
// 2) Declare an object like this const object = { a: 1, b: 2, c: 3 }; and print 2 outputs as mentioned using
// for in loop.
// You have to use two for in loops.
//  a: 1
//  b: 2
//  c: 3
//  and
//  1
//  2
//  3 

const object = { a: 1, b: 2, c: 3 };

var key;

for(key in object){
    console.log(key+": "+object[key])
}

console.log('\n');

for(key in object){
    console.log(object[key])
}
