// 1) while Initialize a variable = 1 and check that less than 10 using while loop and increment that value
// with +=2

var i = 1;

while(i < 10){
    console.log(i)
    i += 2;
}


//2) do while
// print 12345 in single line using do while statement. 

var count = 1;
var str = '';

do{
    str += count;
    count++;
}while(count<=5)

console.log(str)