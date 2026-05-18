// npx tsc --watch , use this to start auto compile ts
var $ = function (id) { return document.querySelector(id); };
var $$ = function (classname) { return document.querySelectorAll(classname); };
// Header Buttons
const HeaderB = $$(".HeaderB");
const Pages = $$(".Pages");
const HomePageB = $("#HomePageB");
// Pages
const HomePage = $("#HomePage");
const GamePage = $("#GamePage");
const BoxScorePage = $("#BoxScorePage");
const HistoryPage = $("#HistoryPage");
// Player Card Template
const PlayerCardTemplate = $("#PlayerCardTemplate");
// Home Page Buttons
const NewGameB = $("#NewGameB");
const ContinueGameB = $("#ContinueGameB");
// Game Page
const GamePageHomeStatsName = "Home";
// Stat Class Names
const TotalPointsClass = "TotalPoints";
const FieldGoalPercentage = "FieldGoalPercentage";
// Initialize Website
function initApp() {
    console.log(HeaderB);
    var balls = document.createElement("p");
    balls.innerText = HeaderB[1].innerText;
    balls.classList.add;
    // Add header button functionality
    HeaderB.forEach((headers) => {
        // Make buttons "hide" to switch tabs
        headers.addEventListener("click", (event) => {
            Pages.forEach((page) => {
                if (page.id != headers.id.slice(0, -1)) {
                    page.classList.add("hidden");
                }
                else {
                    page.classList.remove("hidden");
                    console.log("Revealing " + page.id);
                }
            });
        });
    });
    // Test
    NewGameB.addEventListener("click", (event) => {
        createPlayerCards("David");
    });
    ContinueGameB.addEventListener("click", (event) => {
        console.log($$(".Player"));
    });
}
function twoClassHTMLString(classOne, classTwo) {
    return "." + classOne + "." + classTwo;
}
// Create Player Cards
function createPlayerCards(playerName) {
    // Clone PlayerCardTemplate
    let dupeCard = PlayerCardTemplate.cloneNode(true);
    dupeCard.removeAttribute('id');
    HomePage.appendChild(dupeCard);
    let dupeCardElements = $$(".Player");
    // Set class of new card to differentiate from template
    for (let i = 0; i < dupeCardElements.length / 2; ++i) {
        let element = dupeCardElements[i];
        element.classList.remove("Player");
        element.classList.add(playerName);
    }
    // Add Buttons
    let playerClass = new PlayerCard(playerName);
    // Stats to Change per Player
    let totalPointsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalPoints"));
    let fieldGoalPercentageHTMLStr = $(twoClassHTMLString(playerClass.name, "FieldGoalPercentage"));
    let fieldGoalAttemptsHTMLStr = $(twoClassHTMLString(playerClass.name, "FieldAttempts"));
    let threePTFieldGoalPercentageHTMLStr = $(twoClassHTMLString(playerClass.name, "ThreePTFieldGoalPercentage"));
    let threePTFieldGoalAtttemptsHTMLStr = $(twoClassHTMLString(playerClass.name, "ThreePTFieldGoalAttempts"));
    let freeThrowPercentageHTMLStr = $(twoClassHTMLString(playerClass.name, "FreeThrowPercentage"));
    let freeThrowAttemptsHTMLStr = $(twoClassHTMLString(playerClass.name, "FreeThrowAttempts"));
    let totalReboundsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalRebounds"));
    let totalAssistsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalAssists"));
    let totalBlocksHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalBlocks"));
    let totalStealsHTMLStr = $(twoClassHTMLString(playerClass.name, "TotalSteals"));
    // Buttons to add event listeners
    let undoButton = $(twoClassHTMLString(playerClass.name, "UNDOButton"));
    let addTwoFGButton = $(twoClassHTMLString(playerClass.name, "PlusTwoFGButton"));
    let minusTwoFGButton = $(twoClassHTMLString(playerClass.name, "MinusTwoFGButton"));
    let addThreeFGButton = $(twoClassHTMLString(playerClass.name, "PlusThreeFGButton"));
    let minusThreeFGButton = $(twoClassHTMLString(playerClass.name, "MinusThreeFGButton"));
    let addFTButton = $(twoClassHTMLString(playerClass.name, "PlusFTButton"));
    let minusFTButton = $(twoClassHTMLString(playerClass.name, "MinusFTButton"));
    let assistButton = $(twoClassHTMLString(playerClass.name, "ASTButton"));
    let reboundButton = $(twoClassHTMLString(playerClass.name, "RBDButton"));
    let stealButton = $(twoClassHTMLString(playerClass.name, "STLButton"));
    let blockButton = $(twoClassHTMLString(playerClass.name, "BLKButton"));
    let redoButton = $(twoClassHTMLString(playerClass.name, "REDOButton"));
    // IGNORE SUB BUTTON FOR NOW!
    // let subButton
    // Add Event Listeners
    undoButton.addEventListener('click', (event) => {
        // Do something
        console.log("Undo (NOT CODED YET");
    });
    addTwoFGButton.addEventListener('click', (event) => {
        playerClass.totalPoints += 2;
        totalPointsHTMLStr.innerText = playerClass.totalPoints.toString() + " PTS";
    });
    HomePage.removeChild(dupeCard);
    GamePage.appendChild(dupeCard);
}
// Start app
initApp();
// Stat Class
class PlayerCard {
    name;
    totalPoints = 0;
    fieldMakes = 0;
    fieldMiss = 0;
    threeFieldMakes = 0;
    threeFieldMiss = 0;
    ftMakes = 0;
    ftMiss = 0;
    rebounds = 0;
    assists = 0;
    blocks = 0;
    steals = 0;
    constructor(playerName) {
        this.name = playerName;
    }
    getHTMLTotalPoints() {
        return this.totalPoints;
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
export {};
//# sourceMappingURL=app.js.map