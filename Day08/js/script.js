var h1Name = document.getElementById('name');
h1Name.innerHTML = 'Sandeep Gudipelli';



var userInput = prompt('What day is it?');
/*
if(userInput =='monday'){
  alert('correct, the day is' + userInput);
}else if (userInput == 'tuesday') {

}
*/
switch (userInput) {
  case 'monday': alert('correct, the day is' +userInput);
  break;
  case 'tuesday': alert('idoit its ' +userInput+ ' get up and work');
  break;
  default:
    alert('that\'s no day');
}
