//fucntion declaration
function helloWorldDec(){
alert('Hello Anudeep!');
}
//helloWorldDec();

//funtion expression
var helloWorldExp = function(){
  alert('Again Hello ANUDEEP!');
};
//helloWorldExp();
        /* or
var helloWorldExp = function(){
  alert('Again Hello ANUDEEP!');
}();*/

//Hoisting- brings variable names and function declarations to the top

/* write 3 function declaration and function expression
  1. Greeting function - alert
  2. claculate function - mathematical operation(alert result)
  3. console a color array
 */
function greetings(){
    alert('Hello Anudeep Greetings for the day!');
}
greetings();

function addition(){
    var answer = 1 + 1;
    alert(answer);
}
addition();

function colorArray(){
    var color = ['white','black','red'];
    console.log(color);
}
colorArray();

var greetingExp = function(){
    alert('Hello Anudeep Greetings for the day!');
}();

var addExp = function(){
    var answer = 1 + 1;
    alert(answer);
}();
 var colorAExp = function(){
     var color = ['white','black','red'];
    console.log(color);
 }();



// Parameters and Arguments

function helloDec(name){  // parameters is a variable that is used in the function
    alert('hello ' + name);
}
helloDec('Anudeep');

// argument is what is passed in when we call the function
var helloExp = function(first, last){
    alert('hi '+first+' '+last)
}('anudeep','gudipelli');



/*write 3 function declaration & expressions
   1. for greeting functionn - pass in first and last name
   2. for the calculation function - pass in two number
   3. for color function - pass in three colors
*/

function greetings(name){
    alert('Hello '+ name +' Greetings for the day!');
}
greetings('Anudeep');

function addition(num1,num2){
    var answer = num1 + num2;
    alert(answer);
}addition(4,5);

function colorArray(color1,color2,color3){
        console.log(color1+' ' + color2+" " + color3);
}colorArray('red','white','black');

var greetingExp = function(fname, lname){
    alert('Hello '+fname+' '+lname+' Greetings for the day!');
}('Anudeep','Gudipelli');

var addExp = function(n1,n2){
    var answer = n1 * n2;
    alert(answer);
}addExp(6,6);

var colorAExp = function(c1,c2,c3){

    console.log(c1+' '+c2+' '+c3);
 }('red','black','white');



// Funtion from a Function
function hello(fname){
    var msg = 'Hello, ' +fname;
    console.log(msg);
    popup(msg);
}
hello('anudeep');

function popup(x){
    alert(x);
}

/* write 3 function declarations
    1. 1st function will expect  first name and calls the 2nd function
    2. 2nd function will except the first name  and concatenate to  the last name
    3. 3rd function will alert out:" hello first , last name

    */
function fname(f){
    lname(f);
}
fname('anudeep');

function lname(f){
    var name = f + ' gudipelli';
    pop(name);
}

function pop(msg){
    alert('Hello '+ msg);
}
