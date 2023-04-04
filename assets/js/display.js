
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

    
    gamesAndOdds = {
        "1v2":{
            "odds":0.2224,
            "name":"Dragon"
        },
        "1v3":{
            "odds":0.2556,
            "name":"Tiger"
        },
        "1v4":{
            "odds":0.2556,
            "name":"Tie"
        },
        "2v3":{
            "odds":0.2224,
            "name":"Dragon"
        },  
        "2v4":{
            "odds":0.2556,
            "name":"Tiger"
        },
        "3v4":{ 
            "odds":0.2556,
            "name":"Tie"
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
        let allGameGroupButtons = `<li class="list__menu_btn active">${this.gameGroups[0]}</li>`;
        let totalGames = this.gameGroups.length;
        let moreButton = `<li class="list__menu_btn" id="toggle-offload">more</li>`;
        let firstLoopLength = totalGames;
        if (totalGames > this.totalGamesToDisplay) {
            firstLoopLength = this.totalGamesToDisplay;
            $('.button-list').append(moreButton);
        }
        let i = 1
        for (; i < firstLoopLength; i++) {
            allGameGroupButtons += `<li class="list__menu_btn">${this.gameGroups[i]}</li>`
        }

        let buttonInMoreGames = ``;
        for (; i < totalGames; i++) {
            buttonInMoreGames += `<li class="all-4-wrapper">${this.gameGroups[i]}</li>`
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


    displayGameControls1() {
        let buttonNumber = 1;
        let rowIndex = 1;
        
        let rowInterface = ``;
        this.labels.forEach(label => {
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
    displayGameControls2() {
        let buttonNumber = 1;
        let rowIndex = 1;
        
        let rowInterface = ``;
        [""].forEach(label => {
            rowInterface += `<div class="all-slots-parent">
                        <div class="first-3-straight">${label}</div>
                            <div class="main-slots-wrapper All_Select">
                                <ul class="button-Line-list _wrap">`;
                                for (let buttonNumber = 0; buttonNumber <= 27; buttonNumber++) {
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

    displayGameControls3()
    {
        <ul class="balls-ul-dragon longhu ul-longhuhe no-position">
                        <li class="balls-row longhuhe balls-row-lryl">
                            <div class="row-title"><span>1st V 2nd</span></div>
                            <div class="row-balls">
                                <div class="ball">
                                    <div class="ball-item">
                                        Dragon
                                        <div class="showPrize">
                                            0.0022
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
                                        Tiger
                                        <div class="showPrize">
                                            0.0022
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
                                        Tie
                                        <div class="showPrize">
                                            0.0099
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
                    </ul>
    }
}

let render = new RenderPage();
render.displayGameGroups();
render.displayGameSelections();
render.displayGameControls2();


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
    $(`.number-button-b.row${rowIndex}`).filter(function() {
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

let selection = $(".number-button-b.row1:nth-child(n+5)");
console.log(selection);

