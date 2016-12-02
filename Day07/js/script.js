/*
(function(){
    var createTodoList = function(){
    var todo = [];
    todo.push( prompt('What is the first item on your todo list?') );
    for(var moreTodo = true; moreTodo;){
      if(confirm('Any more Items?') ){
        addTodoItem(todo);
      }else {
        moreTodo = false;
        printTodoList(todo);
      }
    }
  }();

  function addTodoItem(todoArray){
    todoArray.push( prompt('What is the next todo item?') );
  }

  function printTodoList(todoArray){
    var msg = ' ';
    for(var i = 0; i<todoArray.length; i++){
      msg += '-' + todoArray[i] + '\n';
    }
    alert('My list of items to purchase: \n' +msg);
  }
}();
*/
