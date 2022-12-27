// 1) Print name of the day based on the value of the day variable by using the switch statement.
 var day = 5;
 var dayname = ""

 switch(day){
    case 1:
        dayname = "Sunday";
        console.log(dayname);
        break;
    case 2:
        dayname = "Monday";
        console.log(dayname);
        break;
    case 3:
        dayname = "Tuesday";
        console.log(dayname);
        break;
    case 4:
        dayname = "Wednessday";
        console.log(dayname);
        break;
    case 5:
        dayname = "Thursday";
        console.log(dayname);
        break;
    case 6:
        dayname = "Friday";
        console.log(dayname);
        break;
    case 7:
        dayname = "Saturday";
        console.log(dayname);
        break;
    default:
        console.log("Wrong input");
    
    
 }


 //2) Find the usage of Date().getDay() and print the current day using switch statement.

 var day = new Date().getDay();

 var dayname = ""

 switch(day){
    case 0:
        dayname = "Sunday";
        console.log(dayname);
        break;
    case 1:
        dayname = "Monday";
        console.log(dayname);
        break;
    case 2:
        dayname = "Tuesday";
        console.log(dayname);
        break;
    case 3:
        dayname = "Wednessday";
        console.log(dayname);
        break;
    case 4:
        dayname = "Thursday";
        console.log(dayname);
        break;
    case 5:
        dayname = "Friday";
        console.log(dayname);
        break;
    case 6:
        dayname = "Saturday";
        console.log(dayname);
        break;
    default:
        console.log("Wrong input");
    
 }