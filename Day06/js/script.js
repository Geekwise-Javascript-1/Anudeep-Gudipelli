/*
var fruit = ['Mango', 'Goa', 'Jack Fruit', 'Custard Apple','Apple','Lichi','Goose Berry','Peach','Kiwi'];
console.log(fruit.length);
console.log(fruit);

/*
// to add an element in an array at ending
fruit.push('banana');
console.log(fruit);
console.log(fruit.length);

// to add anything in between the elements in an array
var str = fruit.join(' ');
console.log(str);

// to delete an element from last in an arrayfruit.pop();
console.log(fruit);

// to add an element at the begining of the array
fruit.unshift('grape');
console.log(fruit);

// to delete an element at the begining of the array
fruit.shift();
console.log(fruit);
*/

/*
console.log(fruit.reverse()); // it reverses the array from last to first
console.log(fruit.sort()); // it sorts ini alphabetiical order

var num = [1, 21, 2, 98,78];
console.log(num.sort());

// sorting always done with 1st numbers, alphabets(1st capitals then small alphabets)
var alphanum = ['anudeep', 1989, ' born','GuDipelli'];
console.log(alphanum.sort());
*/

/*
 fruit.splice(x,y,str);
 x-> begin index of an element in an array,
 y-> how many to delete in an array,
 str-> what to add in an array

fruit.splice(2,0,'pomegranate');
console.log(fruit);
*/

/*
slice(x,y) To select an element/elements from an array
x-> the begin index of an element in an array,
y-> last index of an array but not included

var myFruits = fruit.slice(1,5);
console.log(myFruits);
console.log(fruit);
*/

/* if statement
if(true){
// run this code
alert('test');
}
else {
  alert(' it is false');
}
*/
/*
 var userResp = prompt('Is chicken ur fav dish:');
 if(userResp == 'yes'){
   alert('I love chicken');
 }else{
   alert('I hate it');
 }
*/
/*
var randNum = Math.floor(Math.random( ) * 11 );
//console.log(randNum);
var userGuess = parseInt( prompt(' pick a number(in between 0 - 10):'));
if(userGuess <= 10 && userGuess >=0){
  if(num == randNum){
      alert('correct!');
    }else if (num > randNum){
      alert('sorry ... too high');
    }else if( num < randNum){
      alert('sorry ... too low');
    }
}else{
  alert('I told you to pick between 0 to 10');
}
console.log(randNum);
*/
// get gender & get true or false to ice cream
//is user male
//is user female
// if user like ice cream

var resp = prompt(' Please enter ur gender:');
//var resp1 = prompt('Do you like Ice Cream?');

if (resp == 'male' || resp == 'female'){
  resp1 = prompt('Do you like Ice Cream?');
}else if(resp !='female' || resp != 'male'){
  alert(' Please enter ur gender');
}

if( resp1 == 'yes'){
  alert('I love strawberry ice cream');
}else if(resp1 == 'no'){
  alert('Thank you');
}
