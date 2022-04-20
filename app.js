// Q No 1

/*
var num = 3.45214;
var num1 = Math.round(3.45214);
var num2 = Math.floor(3.45214);
var num3 = Math.ceil(3.45214);
document.write("Number:"+ num + "<br>" + "Round of value:"+ num1+ "<br>"+ "Floor value of the Number: " +
num2 +"<br>"+"Ceil Value of the Number: "+ num3 + + "<br>");
*/


//Q No 2

/*
var num = -2.673;
var num1 = Math.round(-2.673);
var num2 = Math.floor(-2.673);
var num3 = Math.ceil(-2.673);
document.write("Number: " + num + "<br>" + " Round of floor: " + num1 + "<br>"+ " Floor Value of the Number: " +
num2 + "<br>" + "Ceil Value of the Number: " + num3);
*/



//Q No 3

/*
var num1 = -4;
var num2 = Math.abs(num1);
document.write("The absolute value of " + num1 + " is " + num2);
*/



// Q No 4

/*
var a = Math.floor(Math.random() * 6) + 1;
document.write("random dice value: " + a);
*/



//Q No 5

/*
var num1 = 1;
var num2 = 2;
var num3 = Math.random() *2;
var num4 = Math.floor (num3)
if (num4 === 0) {
    document.write("2 <br> Random Coin Value: Head ")
}else if(num4 === 1)
{
    document.write("1 <br> Random Coin Value: Tail ")
}
*/


//Q No 6

/*
var a = Math.floor(Math.random() * 100) + 1;
document.write("random number between 1 and 100 : " + a);
*/

//Q No 7

/*
var user = (prompt("Enter your weight in kilograms"));
document.write("The weight of user is " + user );
*/

//Q No 8

/*
var num = Math.floor(Math.random() * 10);
console.log(num);
var gnum = prompt("Enter a number between 1 and 10");
if (gnum == num)
console.log("Congratulations");
else
console.log(" Try Again! "); ///////