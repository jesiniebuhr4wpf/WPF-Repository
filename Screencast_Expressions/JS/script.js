//Expressions


var a = 2;       //sets up the variable and defines with value of 2
b = a + 3;       //add 3 to a
console.log(b);

//include an assignment operator in order to store the result of the expression.


//Arithmetic Operators

//finding the are of a triangle which is half of width times height

var width = 4;
var height = 5;
var area = width * height/2;  //be sure to follow order of operations
console.log(area);


//Modulo Operator
    //finding the remainder of a division

var remainder = 32 % 10;     //using percent sign gives us the remainder when divisor goes into dividend
            //even numbers will never have remainder when divided by 2, remainder will be 1
console.log(remainder);


//Order of Operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average sum of the items divided by the number of items

var average = (quiz1 + quiz2 + quiz3 + quiz4)/2;        //don't forget PEMDAS
console.log(average);


//Using Arrays in Expressions

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];      //don't forget to use array access notation
console.log(total);








