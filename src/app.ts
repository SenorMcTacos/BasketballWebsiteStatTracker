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

// Game Page
const GamePageHomeStatsName = "Home"

// Stat Class Names
const TotalPointsClass = "TotalPoints"
const FieldGoalPercentage = "FieldGoalPercentage"

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

function twoClassHTMLString(classOne : string, classTwo : string) : string {
    return "." + classOne + "." + classTwo
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

    // Add Buttons
    let playerClass = new PlayerCard(playerName)
    
    // Stats to Change per Player
    let totalPointsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalPoints")) as HTMLButtonElement
    let fieldGoalPercentageHTMLStr = $(twoClassHTMLString(playerClass.name, "FieldGoalPercentage")) as HTMLButtonElement
    let fieldGoalAttemptsHTMLStr = $(twoClassHTMLString(playerClass.name, "FieldAttempts")) as HTMLButtonElement
    let threePTFieldGoalPercentageHTMLStr = $(twoClassHTMLString(playerClass.name, "ThreePTFieldGoalPercentage")) as HTMLButtonElement
    let threePTFieldGoalAtttemptsHTMLStr = $(twoClassHTMLString(playerClass.name, "ThreePTFieldGoalAttempts")) as HTMLButtonElement
    let freeThrowPercentageHTMLStr = $(twoClassHTMLString(playerClass.name, "FreeThrowPercentage")) as HTMLButtonElement
    let freeThrowAttemptsHTMLStr = $(twoClassHTMLString(playerClass.name, "FreeThrowAttempts")) as HTMLButtonElement
    let totalReboundsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalRebounds")) as HTMLButtonElement
    let totalAssistsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalAssists")) as HTMLButtonElement
    let totalBlocksHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalBlocks")) as HTMLButtonElement
    let totalStealsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalSteals")) as HTMLButtonElement

    // Buttons to add event listeners
    let undoButton = $(twoClassHTMLString(playerClass.name, "UNDOButton")) as HTMLButtonElement
    let addTwoFGButton = $(twoClassHTMLString(playerClass.name, "PlusTwoFGButton")) as HTMLButtonElement
    let minusTwoFGButton = $(twoClassHTMLString(playerClass.name, "MinusTwoFGButton")) as HTMLButtonElement
    let addThreeFGButton = $(twoClassHTMLString(playerClass.name, "PlusThreeFGButton")) as HTMLButtonElement
    let minusThreeFGButton = $(twoClassHTMLString(playerClass.name, "MinusThreeFGButton")) as HTMLButtonElement
    let addFTButton = $(twoClassHTMLString(playerClass.name, "PlusFTButton")) as HTMLButtonElement
    let minusFTButton = $(twoClassHTMLString(playerClass.name, "MinusFTButton")) as HTMLButtonElement
    let assistButton = $(twoClassHTMLString(playerClass.name, "ASTButton")) as HTMLButtonElement
    let reboundButton = $(twoClassHTMLString(playerClass.name, "RBDButton")) as HTMLButtonElement
    let stealButton = $(twoClassHTMLString(playerClass.name, "STLButton")) as HTMLButtonElement
    let blockButton = $(twoClassHTMLString(playerClass.name, "BLKButton")) as HTMLButtonElement
    let redoButton = $(twoClassHTMLString(playerClass.name, "REDOButton")) as HTMLButtonElement
    // IGNORE SUB BUTTON FOR NOW!
    // let subButton

    // Add Event Listeners
    undoButton.addEventListener('click', (event) => {
        // Do something
        console.log("Undo (NOT CODED YET")
    })
    addTwoFGButton.addEventListener('click', (event) => {
        playerClass.totalPoints += 2
        playerClass.fieldMakes += 1
        totalPointsHTMLStr.innerText = playerClass.totalPoints.toString()+ " PTS"
    })
    minusTwoFGButton.addEventListener('click', (event) => {
        playerClass.fieldMiss += 1
    })
    addThreeFGButton.addEventListener('click', (event) => {
        playerClass.totalPoints += 3
        playerClass.fieldMakes += 1
        playerClass.threeFieldMakes += 1
        totalPointsHTMLStr.innerText = playerClass.totalPoints.toString()+ " PTS"
    })
    minusThreeFGButton.addEventListener('click', (event) => {
        playerClass.fieldMiss += 1
        playerClass.threeFieldMiss += 1
    })
    addFTButton.addEventListener('click' , (event) => {
        playerClass.totalPoints += 1
        playerClass.ftMakes += 1

        totalPointsHTMLStr.innerText = playerClass.totalPoints.toString()+ " PTS"
    })
    minusFTButton.addEventListener('click', (event) => {
        playerClass.ftMiss += 1
        
    })
    reboundButton.addEventListener('click', (event) => {
        playerClass.rebounds += 1
    })
    assistButton.addEventListener('click', (event) => {
        playerClass.assists += 1
    })
    blockButton.addEventListener('click', (event) => {
        playerClass.blocks += 1
    })
    stealButton.addEventListener('click', (event) => {
        playerClass.steals += 1
    })



    HomePage.removeChild(dupeCard)
    GamePage.appendChild(dupeCard)
        
}
// Start app
initApp()

// Stat Class
class PlayerCard {
    name: string;
    totalPoints: number = 0;
    fieldMakes: number = 0;
    fieldMiss: number = 0;
    threeFieldMakes: number = 0;
    threeFieldMiss: number = 0;
    ftMakes: number = 0;
    ftMiss: number = 0;
    rebounds: number = 0;
    assists: number = 0;
    blocks: number = 0;
    steals: number = 0;

    
    constructor(playerName: string) {
        this.name = playerName
    }

    getHTMLTotalPoints() {
        return this.totalPoints
    }

    getHTMLFieldGoalPercentage() {

    }

    getHTMLFieldGoalAttempts() {

    }

    getHTMLThreePTFieldGoalAttempts() {

    }

    getHTMLThreePTFieldGoalPercentage() {

    }

    getHTMLFreeThrowAttempts() {

    }

    getHTMLFreeThrowPercentage() {

    }

    getHTMLTotalRebounds() {

    }

    getHTMLTotalAssists() {

    }

    getHTMLTotalBlocks() {

    }

    getHTMLTotalSteals() {

    }
    
}
