(function(){
var todo = [];
var item = prompt('Enter your first item');
/*
NOT OKAY:
Esc === null
cancle === null
Enter === ''
okay === ''
spaces

OKAY:
spaces....entry....more spaces
*/
if(isValid(item) ){
  addTodo(item);
  checkIfMore();
}
function isValid(item){
  if(item !== null) {
      if( item.trim() !== '' && !parseInt(item)){
        //console.log(item);
        return true;
      } else{
      alert('invalid Input');
      return false;
      }
    } else{
      alert('invalid Input');
      return false;
    }
}

function addTodo(item){
  todo.push(item);
}

function checkIfMore(item){
  for(var moreTodo = true; moreTodo;){
    if(confirm('want to add more?')){
      askMore();
    } else{
    moreTodo = false;
    craftMsg();
    }
  }
}

function askMore(){
  var item = prompt('enter another item');
  if(isValid(item) ){
    addTodo(item);
  }
}

function craftMsg(){
  var msg ='';
  for(var i=0; i< todo.length;i++){
    msg +=' -' + todo[i].trim() +'\n';
  }
  alert('My list of Items are: \n' +msg);
}
})();
