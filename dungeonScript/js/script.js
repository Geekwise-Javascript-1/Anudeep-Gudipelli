var greet = document.querySelector('header > span');
if(!localStorage.getItem('hero') ){
  localStorage.setItem('hero', prompt('what is hero name?') );
  localStorage.setItem('hp', 15);
  greet.textContent = 'Hello, ' + localStorage.getItem('hero');
  alert('Greetings ' + localStorage.getItem('hero') + ' to Dungeon Script');
}else{
      greet.textContent = 'Welcome back, ' + localStorage.getItem('hero');
}

var hero = {
  name: localStorage.getItem('hero'),
  hp: localStorage.getItem('hp')
};
localStorage.setItem('heroObj', JSON.stringify(hero));

var monsters = [];
var monTypes = [ 'dragon','troll','wolf','homonculus','ogre','bat','hipster'];
var monster;
function Monster(name, hp){
      this.name = name,
      this.hp = hp
}
function generateMonters(){
  var totMonters = Math.round(Math.random() * 10);
  console.log('total monsters:'+ totMonters);
  for(var i=0; i < totMonters; i++){
    monsters[i] = new Monster();
    monsters[i].name = monTypes[Math.floor(Math.random() * monTypes.length) ];
    monsters[i].hp = Math.ceil(Math.random() * 10);
  }
  console.log(monsters)
}

generateMonters();
var tableHolder = document.getElementById('table');
var maze, cells, thisCell, exitCell;

var n = document.getElementById('n');
n.addEventListener( 'click', function(){
         moveNorth();
});

var e = document.getElementById('e');
e.addEventListener('click', function(){
      moveEast();
});

var s = document.getElementById('s');
s.addEventListener('click', function(){
      moveSouth();
});

var w = document.getElementById('w');
w.addEventListener( 'click', function(){
    moveWest();
});

function moveNorth(){
       statusCell(thisCell, 'inactive' );
       thisCell = [ thisCell[0]-1, thisCell[1] ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}
function moveEast(){
              statusCell(thisCell, 'inactive');
       thisCell = [ thisCell[0], thisCell[1]+1 ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}
function moveSouth(){
             statusCell(thisCell, 'inactive');
       thisCell = [ thisCell[0]+1, thisCell[1] ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}
function moveWest(){
             statusCell(thisCell, 'inactive');
       thisCell = [ thisCell[0], thisCell[1]-1 ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}

addEventListener('keydown', function(evt){
              evt.preventDefault();
       if( (evt.keyCode === 87 || evt.keyCode === 38) && !n.disabled){
           moveNorth();
       }else if( (evt.keyCode === 68 || evt.keyCode === 39) && !e.disabled ){
            moveEast();
       }else if( (evt.keyCode === 83 || evt.keyCode === 40) && !s.disabled ){
            moveSouth();
       }else if( (evt.keyCode === 65 || evt.keyCode === 37) && !w.disabled){
           moveWest();
       }
});

 var grid = function(y,x){
     var totalCells = y * x;
     cells = [];
     var visited = [];

     for ( i = 0; i < y; i++){
       cells[i] = [];
       visited[i] = [];

          for ( j=0; j < x; j++ ){
              cells[i][j] = [ 0, 0, 0, 0];
              visited[i][j] = false;
          }
     }

     var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x)];
     var path = [ currentCell ];

     visited[currentCell[0]][currentCell[1]] = true;
     var numOfVisited = 1;

     while( numOfVisited < totalCells ){
        var possible = [
            [ currentCell[0]-1, currentCell[1], 0, 2 ],
            [ currentCell[0], currentCell[1]+1, 1, 3 ],
            [ currentCell[0]+1, currentCell[1], 2, 0 ],
            [ currentCell[0], currentCell[1]-1, 3, 1 ]
          ];

          var neighbors = [];

          for(var k = 0; k < 4; k++){
            if(

              possible[k][0] > -1 &&
              possible[k][0] < y &&
              possible[k][1] > -1 &&
              possible[k][1] < x &&
              !visited[ possible[k][0] ] [ possible[k][1] ]

            ){
               neighbors.push( possible[k] );
             }

        }

        if( neighbors.length ){
            var next = neighbors[ Math.floor(Math.random() * neighbors.length) ];
            cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;
            cells[ next[0] ][ next[1] ][ next[3] ] = 1;
            visited[ next[0] ][ next[1] ] = true;

            numOfVisited++;
            currentCell = [ next[0], next[1] ];
            path.push(currentCell);
        }else{
           currentCell = path.pop();

        }
     }

gridStart(path);

}(8,8);

function gridStart(path){
    gridBuilder();
    thisCell = statusCell( path[0], 'active' );
    exitCell = statusCell( path[path.length - 1], 'finish' );
    checkWalls();
}

function statusCell(cell, status){
      if(maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.contains('exit')){
          alert('You Won !!!!');
          location.reload();
      }
     switch(status){
         case 'active':
            maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('active');
            break;
         case 'inactive':
             maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.remove('active');
             maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('visited');
             break;
         case 'finish':
             maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('exit');
             break;
     }
     return cell;
}

function gridBuilder(){
      maze = document.createElement('table');
      tableHolder.appendChild(maze);
            for( i = 0; i < cells.length; i++ ){
         maze.insertRow(i);

         for( j = 0; j < cells.length; j++ ){
            maze.firstChild.childNodes[i].insertCell(j);
            thisCell = maze.firstChild.childNodes[i].childNodes[j];

              for ( var k = 0; k < 4; k++ ){
                 switch(k)  {
                    case 0:
                      cells[i][j][k] ?
                      thisCell.classList.remove('bt') :
                      thisCell.classList.add('bt');
                      break;
                    case 1:
                        cells[i][j][k] ?
                        thisCell.classList.remove('br') :
                        thisCell.classList.add('br');
                        break;
                    case 2:
                        cells[i][j][k] ?
                        thisCell.classList.remove('bb') :
                        thisCell.classList.add('bb');
                        break;
                    case 3:
                        cells[i][j][k] ?
                        thisCell.classList.remove('bl') :
                        thisCell.classList.add('bl');
                        break;
                }
            }
        }
    }
}

function checkWalls(){
    var walls = cells[ thisCell[0] ][ thisCell[1] ];

    for( var i = 0; i < 4; i++ ){
        switch( i ){
           case 0:

              walls[i] ? n.disabled = false : n.disabled = true;
              break;
           case 1:

              walls[i] ? e.disabled = false : e.disabled = true;
              break;
           case 2:

               walls[i] ? s.disabled = false : s.disabled = true;
               break;
           case 3:

                walls[i] ? w.disabled = false : w.disabled = true;
                break;

        }
    }
}

function encounter(){
  console.log(monsters.length);
  console.log(cells.length);
  console.log(cells[0].length);

  var probEnc = Math.round(monsters.length / (cells.length * cells[0].length) * 100 );
  console.log( probEnc + ' % probability of encounters');

  var chanceEnc = Math.ceil(Math.random() * 100);
  console.log('Chance of encounter:' + chanceEnc);
  if(chanceEnc <= probEnc){
      console.log('you ran into a baddie!');
      monster = monsters.splice(Math.floor(Math.random * monsters.length), 1)[0];
            alert('You have encountered ' + monster.name +' !!');
      battle(monster);
  }
}

function battle(player){
  console.log(player);
  console.log(hero);
  var takingDamage;
  if(player.name === hero.name){
    takingDamage = monster;
  }else{
      takingDamage = hero;
  }
  while (player.hp > 0 && takingDamage.hp > 0) {
    console.log(player.name + ' has ' + player.hp);

    var hit = Math.ceil(player.hp / 3);
    takingDamage.hp -= hit;

    console.log(takingDamage.name + ' has taken ' + hit + ' damage');
    checkIfAlive(takingDamage, hit);
  }
}

function checkIfAlive(takingDamage, hit){
    console.log(takingDamage.name + ' has ' + takingDamage.hp);

    if(takingDamage.hp <= 0){
      if(takingDamage.name === hero.name){
        alert('you are dead!');
        location.reload();
      }else{
        alert('You have defeated the monster');
      }

    }else{
      if(takingDamage.name === hero.name){
        alert('you have taken '+ hit + ' damage from the combat!');
        battle(hero);
      }else{
        alert('You shot the ' + monster.name +' for ' + hit + '!!');
        battle(monster);
      }
    }
}
