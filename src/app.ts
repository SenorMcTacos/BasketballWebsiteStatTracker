// npx tsc --watch , use this to start auto compile ts

var $ = function(id: any) {return document.querySelector(id)};
var $$ = function(classname: any) {return document.querySelectorAll(classname)};

// Header Buttons
const HeaderB = $$(".HeaderB")
const Pages = $$(".Pages")
const HomePageB = $("#HomePageB")

// Pages
const HomePage = $("#HomePage") as HTMLDivElement
const GamePage = $("#GamePage") as HTMLDivElement
const BoxScorePage = $("#BoxScorePage") as HTMLDivElement
const HistoryPage = $("#HistoryPage") as HTMLDivElement

// Player Card Template
const PlayerCardTemplate = $("#PlayerCardTemplate") as HTMLDivElement

// Home Page Buttons
const NewGameB = $("#NewGameB")
const ContinueGameB = $("#ContinueGameB")

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

    // Test
    NewGameB.addEventListener("click", (event : any) => {
        createPlayerCards("David")
    })
    ContinueGameB.addEventListener("click", (event : any) => {
        console.log($$(".Player"))
    })
    
}

// Create Player Cards
function createPlayerCards(playerName : string) {
    // Clone PlayerCardTemplate
    let dupeCard = PlayerCardTemplate.cloneNode(true) as HTMLDivElement
    dupeCard.removeAttribute('id')
    HomePage.appendChild(dupeCard)

    let dupeCardElements = $$(".Player") as NodeList
    // Set class of new card to differentiate from template
    for (let i = 0; i < dupeCardElements.length / 2; ++i) {
        let element = dupeCardElements[i] as HTMLElement
        element.classList.remove("Player")
        element.classList.add(playerName)
    }

    HomePage.removeChild(dupeCard)
    GamePage.appendChild(dupeCard)
        
}
// Start app
initApp()
