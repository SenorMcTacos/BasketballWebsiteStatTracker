var $ = function(id) {return document.getElementById(id)};
var $$ = function(classname) {return document.getElementsByClassName(classname)};

// Header Buttons
const HeaderB = $$(".HeaderB")
const HomePageB = $("#HomePageB")

// Start Website
function initApp() 
{
    console.log(HeaderB)
    var balls = document.createElement("p")
    balls.innerText = HeaderB[1]
    document.appendChild(balls)

    HomePageB.addEventListener( (event) => 
    {
        for (headers in HeaderB) 
        {
            headers.classList.add("hidden")
        } 
    })
}

// Start app
initApp()
dfasdaf