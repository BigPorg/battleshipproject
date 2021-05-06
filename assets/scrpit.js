var gameBoard
var ships //tracks current coordinates of the ships on the board?
var destroyer //takes 2 spaces
var submarine //takes 3 spaces
var cruiser //takes 3 spaces
var battleship //takes 4 spaces
var carrier //takes 5 spaces
var startButton
// var whosTurn
var moveDisplay
var coordinates
var isWin = false;
var playAgain = document.querySelector("#play-again")
var startBtn = document.querySelector("#start")

playAgain.addEventListener("click", dosomething);
function dosomething(event) {
    console.log(event)
}


startBtn.addEventListener("click", startgame);
function startgame(event) {
    isWin = false;
    console.log(event)
}



var dimensionx = 10;
var grid = new Array(dimensionx);

var i, j, row, box, board_face;

var board = document.getElementById('gameBoard');

for (i = 0; i < grid.length; i++) {
    grid[i] = new Array(dimensionx);
    grid[i].fill('~');
    row = document.createElement('tr');
    for (j = 0; j < grid[i].length; j++) {
        box = document.createElement('td');
        box.setAttribute('id', "" + i + j);
        box.setAttribute("data-x", j)
        box.setAttribute("data-y", i)
        box.setAttribute("class", "clickablebox")
        row.appendChild(box);
    }
    board.appendChild(row);
}

function update_board() {
    board_face = board.getElementsByTagName('td');
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid.length; j++) {
            elem = board_face.namedItem("" + i + j);
            elem.textContent = grid[i][j];
        }
    }
}

update_board();

document.querySelector("#gameBoard").addEventListener("click", function(event) {
    if(event.target.getAttribute("class") === "clickablebox"){
        console.log(event.target);
        console.log(event.target.id);

    if((event.target.id == 00) || (event.target.id == 10) || (event.target.id == 20) || (event.target.id == 30)
    || (event.target.id == 25) || (event.target.id == 26) || (event.target.id == 27)
    || (event.target.id == 56) || (event.target.id == 66) || (event.target.id == 76) || (event.target.id == 86) 
    || (event.target.id == 96) || (event.target.id == 22) || (event.target.id == 23)
    || (event.target.id == 71) || (event.target.id == 72) || (event.target.id == 73))
    {
        console.log("That is a hit");
    } else {
        console.log("Ya missed");  }
    
    }
        
    

})



// function receiveAttack() {
    //     // player clicks (click event) opponents game board
    //     //the game board
    //     //takes coordinates
    //     // compairs it to the placement of the ships. 
    //     //is player selection = current ship placement?
    // }



    // function hit() {
        //     // if ship is hit
        // then mark it on the board

        //     //if not, record move?
        // }



        //---------------------TIE IN MOVIE QUOTE API AFTER ANY SHIP IS DESTROYED---------------------??



        // EXAMPLE FROM CLASS BELOW. SERVER SIDE API 04. But instead of populating a list on click;
        // make this generate a quote if you sink a ship. Here is the API I was thinking about using:
        // https://rapidapi.com/juanroldan1989/api/moviequotes

        // function getApi() {

            //     var requestUrl = 'https://api.github.com/users/octocat/repos';


            //     fetch(requestUrl)
            //         .then(function (response) {
            //             return response.json();
            //         })
            //         .then(function (data) {
            //             for (var i = 0; i < data.length; i++) {
            //                 var listItem = document.createElement('li');   <------ Might need to consider another way to display the quote? 
            //                 listItem.textContent = data[i].html_url;
            //                 repoList.appendChild(listItem);
            //             }
            //         });
            // }

            // fetchButton.addEventListener('click', getApi); <------ Instead of adding an event listener to a button 
            // we might want to connect it to the function SUNK() below.

            //-------------------------------------------------------------------------------------------??



            // function sunk(params) {

            // }


            // function gameOver()
// game ends once one players ships have all been sunk.
