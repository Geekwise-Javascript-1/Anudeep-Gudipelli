/*alert('test');
var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate() );
console.log(theDate.getDay() );
console.log(theDate.getMonth() );
console.log(theDate.getUTCDay() );
console.log(theDate.toLocaleString('hi',{weekday: 'long'}) );
 //create a variable for first name & prompt user
 //lastname
 //var for birthday and promt user (formatting: mm/dd/yyyy)
// alert "Matthew higley's birthday is Saturday October 2nd 1999"

/*var fName = prompt('what is ur First Name?');
console.log(fName);
var lName = prompt('what is ur Last Name?');
console.log(lName);
var bDate = new Date(prompt ('what is your birthday:mm/dd/yyyy'));
console.log(bDate);
alert(fName+
      ' '+ 
      lName +
      "'s birthday is "+bDate.toLocaleString('us-en', {weekday:'long'}) + 
      ' ' +
      bDate.toLocaleString('us-en',{month:'long'}) +
      ' ' +
      bDate.getDate() +
      ', ' +
      bDate.getFullYear());*/
/*String Object manipulation
var fName = prompt('Enter your Name:');
var lName = prompt('Enter ur Last Name:');
console.log(fName); 
console.log(fName.length);
//alert();
console.log(fName.indexOf('p') );
console.log(fName.charAt(0));
console.log(fName.charAt(fName.length-1));
//console.log( fName.concat(' ').concat(lName) );
var name = fName.concat(' ').concat(lName);
console.log(name);
console.log(name.substring(0,fName.length));
console.log( fName.toLowerCase() );// to convert to Lower Case
console.log(fName.toUpperCase() );// to convert to Upper Case
console.log(fName.trim(),lName.trim() );// trim removes the unwanted spaces(when the name starts)*/

var firstName= prompt('enter ur firstname:');
//console.log(firstName);
var lastName = prompt('enter ur lastname:')
//console.log(lastName);
firstName = firstName.toLowerCase();
lastName = lastName.toLowerCase();
firstName = (firstName.charAt(0).toUpperCase()+firstName.substr(1,firstName.length-1));
console.log(firstName);
lastName = (lastName.charAt(0).toUpperCase()+ lastName.substr(1,lastName.length-1));
console.log(lastName);
name = firstName.concat(' ').concat(lastName);
alert(name);
console.log(name);



