// npx tsc --watch , use this to start auto compile ts

var $ = function(id: any) {return document.querySelector(id)};
var $$ = function(classname: any) {return document.querySelectorAll(classname)};

// Header Buttons
const HeaderB = $$(".HeaderB")
const Pages = $$(".Pages")
const HomePageB = $("#HomePageB")

// Initialize Website
function initApp() {
    console.log(HeaderB)
    var balls = document.createElement("p")
    balls.innerText = HeaderB[1].innerText
    balls.classList.add
    // Add header button functionality
    HeaderB.forEach((headers) => {
        // Make buttons "hide" to switch tabs
        headers.addEventListener("click", (event: any) => {
            Pages.forEach((page) => {
                if (page.id != headers.id.slice(0, -1)) {
                    page.classList.add("hidden")
                }
                else {
                    page.classList.remove("hidden")
                    console.log("Revealing " + page.id)
                }
            })
        })
    })


    
}

// Start app
initApp()
