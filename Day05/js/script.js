// create 3 variables: firstname, middlename, lastname
function myName(){
  var fname = 'Anudeep';
  var mname = 'Kumar';
  var lname = 'Gudipelli';
}
myName();
// //IIFE - Immediately invoked function executable
// ( function(){
//   var fname = 'Anudeep';
//   var mname = 'Kumar';
//   var lname = 'Gudipelli';
//   console.log(fname);
// }() );
/*
function getNums(){
  var a = parseInt(prompt('Enter a Number:') );
  var b = parseInt(prompt('Enter another Number:') );
  console.log(a);
  console.log(b);
  console.log(doMath(a, b) );
}
getNums();

function doMath(num1, num2){
  return num1 + num2;
}*/

/*
 1. write 2 functions
   // 1st declaration: accepting 1 parameters
   // 2nd expression: invoking Immediately
 2. create a variable asking the user for the favorite movie
 3. the expression calls the declaration passing the argument
 4. pass in this variable through declaration calls
 5. declaration will have: "my favorite movie is: " save to a variable
 6. finally the declaration alerts a concatinatio of the string and parameter

function dec(movie){
  var msg = "My fav movie is: ";
   return msg + movie;
};

var exp = function (){
  var favMovie = prompt('What is ur fav Movie:');
  console.log(dec(favMovie) );
  alert(dec(favMovie) );
}();
*/

/*
Loops: 1. for
      2. while
      3. do/while
*/

// for Loops
 var fruits = ['Mango', 'Goa', 'Jack Fruit', 'Custard Apple','Apple','Lichi','Goose Berry','Peach','Kiwi' ];
 console.log(fruits);
 //console.log(fruits[4]);

 for (var i = 0; i < fruits.length; i++){
   console.log(fruits[i]);
 }

// create 2 arrays: 1. monster array & assign 5 monster, 2.strength & assign 5 numbers
// create a for loop to pick corresponding monsters and strength to form a msg
// e.g. dragon has a strength of 100 points

var monster = ['sakini','daniki','pisaachi','saitan','mohini'];
var strength = ['100','200','300','400','500'];
for(var j = 0; j < monster.length; j++){
  console.log(monster[j] +' has a strength of ' + strength[j] +' points' );
}

//while
var monster = ['sakini','daniki','jaganmohini','saitan','mohini'];
console.log(monster);
var i = 0;
while(i < monster.length){
  console.log(monster[i] +' has a strength of ' + strength[i] +' points' );
  i++;
}

//do while
