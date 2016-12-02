var hero = {
    //name: prompt('What is your hero name')
};// empty 'hero' object
//console.log(hero);

var monsters = []; // empty mosters array
var monTypes = ['dragon','Troll','wolf','ogre','homunculus','bat','hipster'];

var tableHolder = document.getElementById('table');
var maze, cells,thisCell;

function moveNorth(){
    console.log('Moving North');
}
moveNorth();

function moveEast(){
    console.log('Moving East');
}
moveEast();

function moveSouth(){
    console.log('Moving South');
}
moveSouth();

function moveWest(){
    console.log('Moving West');
}
moveWest();

var grid = function(y,x){
    console.log(y,x);
    var totalCells = y * x;
     cells = [];
    var visited = [];
    for(var i = 0; i < y; i++ ){
      cells[i] = [];
      visited[i] = [];

    for(var j=0; j < x; j++){
      cells[i][j] = [0,0,0,0];
      visited[i][j] = false;
    }// end of for loop of x
  }//end of for loop of y
  var currentCell = [ Math.floor(Math.random() * y) , Math.floor(Math.random()*x) ];
  console.log('the starting cell:'+ currentCell);

  var path = [ currentCell ];
  console.log('path:' +path);

  visited[ currentCell[0] ][ currentCell[1] ] =  true;
  var numOfVisited = 1;
  while(numOfVisited < totalCells){
    var possible = [
        [ currentCell[0]-1, currentCell[1], 0, 2],
        [ currentCell[0], currentCell[1]+1, 1, 3],
        [ currentCell[0]+1, currentCell[1], 2, 0],
        [ currentCell[0], currentCell[1]-1, 3, 1]
      ];
      var neighbors = [];
      console.log('check all 4 direction');
      console.log(possible);
      console.log('of the 4 sides, does a cell exist in each direction');
      for(var k = 0; k < 4; k++){
          if(possible[k][0] > -1 &&
             possible[k][0] < y &&
             possible[k][1]> -1 &&
             possible[k][1] < x &&
             !visited[ possible[k][0] ][possible[k][1] ]){
               neighbors.push(possible[k] );
             } //end of !visited
      } //end of for loop
      console.log(neighbors);
      //numOfVisited++;
      if(neighbors.length){
        var next = neighbors[Math.floor(Math.random() * neighbors.length)];
        console.log('\n\r of the available directions, randomly select one.\n\r The selected cell to move to is :'+next+'\n\r');
        cells[ currentCell[0] ][currentCell[1] ][ next[2] ] = 1;
        console.log('cells[currentCell[0] ][currentCell[1] ][next[2] ]: cells['+currentCell[0]+']['+currentCell[1]+']['+next[2]+'] = 1');

        cells[next[0] ][next[1] ][next[3] ] = 1;
        console.log('cells[next[0] ][next[1] ][next[3] ]: cells['+next[0]+']['+next[1]+']['+next[3]+']');
        visited[next[0] ][next[1] ] = true;
        console.log('visited[next[0] ][next[1] ]: visited['+next[0]+' ]['+next[1]+' ] = true');
        numOfVisited++;
        currentCell = [next[0],next[1] ];
        console.log('\n\rcurrent: '+currentCell+ '\n\r');
        path.push(currentCell);
        console.log('path');
      } //end of if loop
      else{
        currentCell = path.pop();
        console.log('\n\r no neighbors found. CurrentCell:' +currentCell+'\n\r');
      }//end of else loop
  } // end of while loop
gridBuilder();
}(8,8);

function gridBuilder(){
  maze = document.createElement('table');
  tableHolder.appendChild(maze);

  for(var i = 0; i < cells.length; i++){
    maze.insertRow(i);

    for(j = 0; j < cells[i].length; j++){
      //console.log(maze);
      maze.firstChild.childNodes[i].insertCell(j);
      thisCell = maze.firstChild.childNodes[i].childNodes[j];

      for(var k = 0; k < 4; k++){
        switch (k) {
          case 0:
            cells[i][j][k] ? thisCell.classList.remove('bt') : thisCell.classList.add('bt');
            break;
          case 1:
            cells[i][j][k] ? thisCell.classList.remove('br') : thisCell.classList.add('br');
            break;
          case 2:
            cells[i][j][k] ? thisCell.classList.remove('bb') : thisCell.classList.add('bb');
            break;
          case 3:
            cells[i][j][k] ? thisCell.classList.remove('bl') : thisCell.classList.add('bl');
            break;


        }//end of switch
      }// end of for loop of k
    }// end of for loop of j
  }// end of for loop of i
}// end of function gridBuilder
