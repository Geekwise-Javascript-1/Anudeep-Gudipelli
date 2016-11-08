/*
// Alert Box
console.log('this is test message');
alert('This is an alert message,\n  do not fall in Love');
alert(4 + 6);*/

/*
// Confirm Box
var userResp = confirm(' Do you like Vodka?');
console.log(userResp);*/

/*
//Promt Box
//var userResp = prompt('What is your name?');
var userNum = prompt('What is your fav Number?')
console.log( parseInt(userNum) );*/

// ask user for the first name , last name and age, place
// ask to confirm the place
//alert the first and last name(concatenate)
//console log age

/*var fname = prompt('what is your first name?');
var lname = prompt('what is your Last name?');
var age = prompt('what is your age?');
var place = prompt('where are you from?');
var userResp = confirm('Are you from ' + place);
alert(fname +" " +lname);
console.log(age);*/

/*Math Operations
var a = 5;
var b = 6;
var sum = a + b;
console.log(sum); // addition

var diff = a - b;
console.log(diff);// subtraction

var mul = a * b;
console.log(mul);// multiplication

var div = a / b;
console.log(div); // division

var mod = a % b;
console.log(mod); // Modulas*/

/*ask user to pick any number between  1 to 100,multiple user number by 4, nultiple the new number by 5, divide the new number by the original number,from the new number subtract 7,alert the response
var a = prompt('enter any number: ');
console.log(a);
var a = parseInt(a);
 var b = a * 4;
console.log(b);
var c = b * 5;
console.log(c);
 var d = c / a;
console.log(d);
var s = d - 7;
console.log(s)
alert(' Result is ' +s);*/

// Math Obejct
var random = Math.random();
console.log(random);

var roundNum = Math.round(3.567);
console.log(roundNum);

var floorNum = Math.floor(6.999);
console.log(floorNum);

var ceilNnum = Math.ceil(6.4);
console.log(ceilNnum);

//create a random number between 1 - 100 and alert that number

var a = Math.random();
console.log(a);

a = a * 100;
console.log(a);

a = Math.ceil(a)
console.log(a);

alert(a);
