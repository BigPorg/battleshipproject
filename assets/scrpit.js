var ships //tracks current coordinates of the ships on the board?
var destroyer //takes 2 spaces
var submarine //takes 3 spaces
var cruiser //takes 3 spaces
var battleship //takes 4 spaces
var carrier //takes 5 spaces
var isWin = false;
var playAgain = document.querySelector("#play-again")
var startBtn = document.querySelector("#start")

playAgain.addEventListener("click", dosomething);
function dosomething(event) {
    console.log(event)
$(".clickableBox").removeClass("clicked")
}


document.querySelector("#clickableBox").addEventListener("click", function(event) {
    console.log("testing")
    if(event.target.getAttribute("class") === "clickableBox"){
        console.log(event.target);
        console.log(event.target.id);

    if((event.target.id == 00) || (event.target.id == 11) || (event.target.id == 22) || (event.target.id == 15)
    || (event.target.id == 16) || (event.target.id == 17) || (event.target.id == 18)
    || (event.target.id == 75) || (event.target.id == 86) || (event.target.id == 97) || (event.target.id == 37) 
    || (event.target.id == 38) || (event.target.id == 39) || (event.target.id == 40)
    || (event.target.id == 41) || (event.target.id == 69) || (event.target.id == 80))
    {
        console.log("That is a hit");
        event.target.classList.add("clicked");
    } else {
        console.log("Ya missed");  }
    
    }
        
    

});