
import { buttonActiveAnimator } from './main.js';
class RenderPage {

    gameGroups = [
        "All 5",
        "All 4",
        "First 3",
        "Mid 3",
        "Last3",
        "First 2",
        "Last 2",
        "Fixed place",
        "Any Place",
        "B/S/O/E",
        "Fun",
        "Pick 2",
        "Pick 3",
        "Pick 4",
        "Dragon/Tiger",
        "Stud",
        "Three Cards",
        "Bull Bull"
    ];




    labels = ["1st", "2nd", "3rd", "4th", "5th"];

    games4 = {
        "labels": ["Big", "Small", "Odd", "Even"]
    }
    gamesAndOdds = {
        "labels": ["1v2", "1v3", "1v4", "1v5", "2v3", "2v4", "2v5", "3v4", "3v5", "4v5"],

        "games": {
            "Dragon": 0.0022,
            "Tiger": 0.0044,
            "Tie": 0.0088,
        }
    }


    gameSelections = [
        {
            "Straight": ["All 5 Straight(Joint)", "All 5 Straight(Manual)", "All 5 Straight(Combo)"]
        },
        {
            "Group": ["All 5 Group 120", "All 5 Group 60", "All 5 Group 30", "All 5 Group 20", "All 5 Group 10", "All 5 Group 5"]
        }
    ];


    totalGamesToDisplay = 8;

    // getPosition(number) {
    //     let strNumber = number.toString();
    //     let lastNumber = strNumber.slice(-1);
    //     switch (lastNumber) {
    //         case "1":
    //             return strNumber + "st";
    //         case "2":
    //             return strNumber + "nd";
    //         case "3":
    //             return strNumber + "rd";
    //         default:
    //             return strNumber + "th";
    //     }

    // }

    displayGameGroups() {
        let allGameGroupButtons = `<li class="list__menu_btn active game_name">${this.gameGroups[0]}</li>`;
        let totalGames = this.gameGroups.length;
        let moreButton = `<li class="list__menu_btn" id="toggle-offload">more</li>`;
        let firstLoopLength = totalGames;
        if (totalGames > this.totalGamesToDisplay) {
            firstLoopLength = this.totalGamesToDisplay;
            $('.button-list').append(moreButton);
        }
        let i = 1
        for (; i < firstLoopLength; i++) {
            allGameGroupButtons += `<li class="list__menu_btn game_name">${this.gameGroups[i]}</li>`
        }

        let buttonInMoreGames = ``;
        for (; i < totalGames; i++) {
            buttonInMoreGames += `<li class="all-4-wrapper game_name">${this.gameGroups[i]}</li>`
        }

        $('.button-list').prepend(allGameGroupButtons);
        $(".more__games_items").html(buttonInMoreGames);
    }


    displayGameSelections(gamesObj = this.gameSelections) {
        let allGameButtons = ``;
        gamesObj.forEach(gameTypeObj => {
            let openingTags = `<div class="play-methods_straight">
                        <div class="game__labels">${Object.keys(gameTypeObj)[0]}</div>
                        <div class="uuuuuu">`;
            let gameElement = ``;
            let gameNames = Object.values(gameTypeObj)[0];

            gameNames.forEach(gameName => {
                gameElement += `<div class="game__play_btns _width">${gameName}</div>`
            })

            let closingTags = `</div></div>`;
            allGameButtons += openingTags + gameElement + closingTags;
        });
        $(".play-methods-sections-parent").html(allGameButtons);
    }


    displayGameControls1(labels) {
        let buttonNumber = 1;
        let rowIndex = 1;

        let rowInterface = ``;
        labels.forEach(label => {
            rowInterface += `<div class="all-slots-parent">
                        <div class="first-3-straight">${label}</div>
                            <div class="main-slots-wrapper All_Select">
                                <ul class="button-Line-list">`;
            for (let buttonNumber = 0; buttonNumber <= 9; buttonNumber++) {
                rowInterface += `<li><button id="but_line_1" value="${buttonNumber}" class="number-button-b row${rowIndex}">${buttonNumber}</button></li>`;
            }

            rowInterface += `</ul>
                            </div>
                            <div class="stake-type-parent">
                                <div class="stake-type">
                                <button class="control__buttons all_btn _row row${rowIndex}">All</button>
                                <button class="control__buttons big_btn row${rowIndex}">Big</button>
                                <button class="control__buttons small_btn row${rowIndex}">Small</button>
                                <button class="control__buttons odd_btn row${rowIndex}">Odd</button>
                                <button class="control__buttons even_btn row${rowIndex}">Even</button>
                                <button class="control__buttons clear_btn _row row${rowIndex}">Clear</button>
                                </div>
                            </div>
                        </div>`;
            buttonNumber++;
            rowIndex++;
        });

        $(".game__selections_wrapper").html(rowInterface);
    }
    displayGameControls2(maxButtonValue) {
        let rowIndex = 1;

        let rowInterface = ``;
        [""].forEach(label => {
            rowInterface += `<div class="all-slots-parent">
                        <div class="first-3-straight">${label}</div>
                            <div class="main-slots-wrapper All_Select">
                                <ul class="button-Line-list _wrap">`;
            for (let buttonNumber = 0; buttonNumber <= maxButtonValue; buttonNumber++) {
                rowInterface += `<li><button id="but_line_1" value="${buttonNumber}" class="number-button-b row${rowIndex}">${buttonNumber}</button></li>`;
            }

            rowInterface += `</ul>
                            </div>
                            <div class="stake-type-parent">
                                <div class="stake-type">
                                <button class="control__buttons all_btn _row row${rowIndex}">All</button>
                                <button class="control__buttons big_btn row${rowIndex}">Big</button>
                                <button class="control__buttons small_btn row${rowIndex}">Small</button>
                                <button class="control__buttons odd_btn row${rowIndex}">Odd</button>
                                <button class="control__buttons even_btn row${rowIndex}">Even</button>
                                <button class="control__buttons clear_btn _row row${rowIndex}">Clear</button>
                                </div>
                            </div>
                        </div>`;
            buttonNumber++;
            rowIndex++;
        });

        $(".everything__divs").html(rowInterface);
    }

    displayGameControls3() {
        let gameInterface = `<ul class="balls-ul-dragon longhu ul-longhuhe no-position">`;
        this.gamesAndOdds.labels.forEach((label) => {
            let games = this.gamesAndOdds.games;
            let gameNames = Object.keys(games);
             
            gameInterface += `<li class="balls-row longhuhe balls-row-lryl">
                            <div class="row-title"><span>${label}</span></div>
                            <div class="row-balls">
                                <div class="ball">
                                    <div class="ball-item">
                                        ${gameNames[0]}
                                        <div class="showPrize">
                                            ${games[gameNames[0]]}
                                        </div>
                                        <div class="introduce">
                                            <span class="el-tooltip introduce-symbol icon-quest-purple" trigger="hover" aria-describedby="el-tooltip-3316" tabindex="0">
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div class="cmInBalls hot__cold">
                                            
                                        </div>
                                    </div>
                                    <div class="ball-cm" style="display: none;"></div>
                                </div>
                                <div class="ball">
                                    <div class="ball-item">
                                       ${gameNames[1]}
                                        <div class="showPrize">
                                        ${games[gameNames[1]]}
                                        </div>
                                        <div class="introduce">
                                            <span class="el-tooltip introduce-symbol icon-quest-purple" trigger="hover" aria-describedby="el-tooltip-3316" tabindex="0">
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div class="cmInBalls"></div>
                                    </div>
                                    <div class="ball-cm" style="display: none;"></div>
                                </div>
                                <div class="ball">
                                    <div class="ball-item">
                                        ${gameNames[2]}
                                        <div class="showPrize">
                                        ${games[gameNames[2]]}
                                        </div>
                                        <div class="introduce">
                                            <span class="el-tooltip introduce-symbol icon-quest-purple" trigger="hover" aria-describedby="el-tooltip-3316" tabindex="0">
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div class="cmInBalls"></div>
                                    </div>
                                    <div class="ball-cm" style="display: none;"></div>
                                </div>
                            </div> 
                        </li>
                `});
                gameInterface += `</ul>`;
        $(".everything__divs").html(gameInterface);
    }

    displayGameControls4() {
        let gameInterface = ``;
        this.games4.labels.forEach((label) => {
            gameInterface += `<div class="row-title"><span>1st</span></div>
                                <div class="ball">
                                  <div class="ball-item long">
                                    ${label}  
                                    <div class="cmInBalls">
                                      <span class="hot"></span>
                                      <span class="miss"></span>
                                    </div>
                                  </div>
                                  <div class="ball-cm" style="display: none">
                                    
                                    
                                  </div>
                                </div>`
        });
        $(".balls-ul").html(gameInterface);
    }

    renderDisplay(gameJson){

        switch(gameJson.
            ){
            case "1":
                this.displayGameControls1(gameJson.labels);
                break;
            case "2":
                this.displayGameControls2(gameJson.maxButtonValue);
                break;
            case "3":
                this.displayGameControls3();
                break;
            case "4":
                this.displayGameControls4();
                break;
        }
    }
}

let render = new RenderPage();
render.displayGameGroups();
render.displayGameSelections();
render.displayGameControls3();


//all button
$(document).on("click", ".all_btn._row", function () {
    let rowIndex = $(this).attr("class").split(" ")[3].slice(-1);
    $(`.number-button-b.row${rowIndex}`).addClass("active");
});


//big button
$(document).on("click", ".big_btn", function () {
    let rowIndex = $(this).attr("class").split(" ")[2].slice(-1);
    console.log($(`.number-button-b.row${rowIndex}`))
    buttonActiveAnimator($(`.number-button-b.row${rowIndex}`));
    $(`.number-button-b.row${rowIndex}`).removeClass("active");
    $(`.number-button-b.row${rowIndex}`).filter(function () {
        return $(this).val() >= 5 && $(this).val() <= 9;
    }).addClass("active");

});

//small button
$(document).on("click", ".small_btn", function () {

    let rowIndex = $(this).attr("class").split(" ")[2].slice(-1);
    $(`.number-button-b.row${rowIndex}`).removeClass("active");
    $(`.number-button-b.row${rowIndex}:lt(5)`).addClass("active");
});

//odd button
$(document).on("click", ".odd_btn", function () {

    let rowIndex = $(this).attr("class").split(" ")[2].slice(-1);
    $(`.number-button-b.row${rowIndex}`).removeClass("active");
    console.log(rowIndex)
    $(`.number-button-b.row${rowIndex}:odd`).addClass("active");
});

//even button
$(document).on("click", ".even_btn", function () {

    let rowIndex = $(this).attr("class").split(" ")[2].slice(-1);
    $(`.number-button-b.row${rowIndex}`).removeClass("active");
    $(`.number-button-b.row${rowIndex}:even`).addClass("active");
});

//clear button
$(document).on("click", ".clear_btn._row", function () {
    let rowIndex = $(this).attr("class").split(" ")[3].slice(-1);
    $(`.number-button-b.row${rowIndex}`).removeClass("active");
});


//click on number button
$(document).on("click", ".number-button-b, .ball-item", function () {
    $(this).toggleClass("active");
});

$(document).on("click", ".game__play_btns", function () {
    removeActive(".game__play_btns");
    makeActive(this);
});

$(document).on("click", ".game_name", function () {
    removeActive(".game_name");
    makeActive(this);
});

function makeActive(element) {
    $(element).addClass("active");
}

function removeActive(element) {
    $(element).removeClass("active");
}

function updateGameDetailsBar(gameName, gamePrize)
{
    $(".play-method-title").text(gameName);
    $(".prize__bonus_amt").text(gamePrize);
}

