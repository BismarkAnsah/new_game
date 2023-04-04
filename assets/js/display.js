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


    controlButtons = {
        rowAll: `<button class="control__buttons all_btn _row">All</button>`,
        rowBig: `<button class="control__buttons big_btn">Big</button>`,
        rowSmall: `<button class="control__buttons small_btn">Small</button>`,
        rowOdd: `<button class="control__buttons odd_btn">Odd</button>`,
        rowEven: `<button class="control__buttons even_btn">Even</button>`,
        rowClear: `<button class="control__buttons clear_btn _row">Clear</button>`
    }

    labels = ["1st", "2nd", "3rd", "4th", "5th"];


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


    displayGameControls() {
        let buttonNumber = 1;
        let numberButtons = ``;
        for (let buttonNumber = 1; buttonNumber <= 9; buttonNumber++) {
            numberButtons += `<button id="but_line_1" value="0" class="active">${buttonNumber}</button>`;
        }

        let rowInterface = ``;
        this.labels.forEach(label => {
            rowInterface += `<div class="all-slots-parent">
                        <div class="first-3-straight">${label}</div>
                            <div class="main-slots-wrapper All_Select">
                                <ul class="button-Line-list">
                                    <li>
                                        ${numberButtons};
                                    </li>
                                </ul>
                            </div>
                            <div class="stake-type-parent">
                                <div class="stake-type">
                                ${this.controlButtons.rowAll}
                                ${this.controlButtons.rowBig}${this.controlButtons.rowSmall}${this.controlButtons.rowOdd}${this.controlButtons.rowEven}
                                </div>
                            </div>
                        </div>`;
            buttonNumber++;
        });

        $(".slot.parent").html(rowInterface);
    }
}

let render = new RenderPage();
render.displayGameGroups();
render.displayGameSelections();
// render.displayGameControls();
