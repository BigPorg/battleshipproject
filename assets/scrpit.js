var isWin = false;
var playAgain = document.querySelector("#play-again")
var startBtn = document.querySelector("#start")
let hitCount = 0;
let totalCount = 0;
var x = "howdy";
playAgain.addEventListener("click", dosomething);
function dosomething(event) {
    console.log(event)
    $(".clickableBox").removeClass("clicked")
}
const getQuote = () => {
    fetch('https://api.quotable.io/random/?q=success&inspirational')
        .then(response => response.json())
        .then(data => {
            console.log(`${data.content} —${data.author}`)
            x = data.content;
        })
    console.log(getQuote());
}
const getGif = () => {
    let APIKEY = "78VYi2ISF7hIwm3mH9druhI2uTEI1uuA";
    //  https://developers.giphy.com/dashboard/
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        document.getElementById("quote-home").addEventListener("click", event => {
            event.preventDefault(); //to stop the page reload
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=sinking`;
            let str = document.getElementById("search").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(content => {
                    //  data, pagination, meta
                    console.log(content.data);
                    console.log("META", content.meta);
                    let fig = document.createElement("figure");
                    let img = document.createElement("img");
                    let fc = document.createElement("figcaption");
                    img.src = content.data[0].images.downsized.url;
                    img.alt = content.data[0].title;
                    fc.textContent = content.data[0].title;
                    fig.appendChild(img);
                    fig.appendChild(fc);
                    let out = document.querySelector(".out");
                    out.insertAdjacentElement("afterbegin", fig);
                    document.querySelector("#search").value = "";
                })
                .catch(error => {
                    console.error(error);
                });
        });
    }
}
document.querySelector("#clickableBox").addEventListener("click", function (event) {
    // console.log("testing")
    if (event.target.getAttribute("class") === "clickableBox") {
        if ((event.target.id == 00) || (event.target.id == 11) || (event.target.id == 22) || (event.target.id == 15)
            || (event.target.id == 16) || (event.target.id == 17) || (event.target.id == 18)
            || (event.target.id == 75) || (event.target.id == 86) || (event.target.id == 97) || (event.target.id == 37)
            || (event.target.id == 38) || (event.target.id == 39) || (event.target.id == 40)
            || (event.target.id == 41) || (event.target.id == 69) || (event.target.id == 80)) {
            console.log("That is a hit");
            event.target.classList.add("clicked");
            totalCount++;
            hitCount++;
            console.log(totalCount);
            console.log(hitCount);
            if (hitCount == 17) {
                console.log('You won!');
                fetch('https://api.quotable.io/random/?q=success&inspirational')
                    .then(response => response.json())
                    .then(data => {
                        console.log(`${data.content} —${data.author}`)
                        x = JSON.stringify(`${data.content} —${data.author}`)
                        var y = JSON.stringify(`${data.content} —${data.author}`);
                        document.getElementById("quote-home").innerHTML = y;
                    })
                return 'You win!'
                // then load the quote
            }
        } else {
            console.log("Ya missed");
            totalCount++;
            console.log(totalCount);
            if (totalCount == 40) {
                console.log('You lose.')
                let APIKEY = "78VYi2ISF7hIwm3mH9druhI2uTEI1uuA";
                let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=sinking.gif`;
                console.log(url);
                fetch(url)
                    .then(response => response.json())
                    .then(content => {
                        //  data, pagination, meta
                        console.log(content.data);
                        console.log("META", content.meta);
                        let fig = document.createElement("figure");
                        let img = document.createElement("img");
                        let fc = document.createElement("figcaption");
                        img.src = content.data[0].images.downsized.url;
                        img.alt = content.data[0].title;
                        fc.textContent = content.data[0].title;
                        fig.appendChild(img);
                        fig.appendChild(fc);
                        document.getElementById("quote-home").innerHTML = url;
                    })
                }
        }
    }
});