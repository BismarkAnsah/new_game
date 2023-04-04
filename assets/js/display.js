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

    gameSelections = [
        {
            "Straight": ["All 5 Straight(Joint)", "All 5 Straight(Manual)", "All 5 Straight(Combo)"]
        },
        {
            "Group": ["All 5 Group 120", "All 5 Group 60", "All 5 Group 30", "All 5 Group 20", "All 5 Group 10", "All 5 Group 5"]
        }
    ];


    totalGamesToDisplay = 8;

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
        for (; i <totalGames; i++) {
            buttonInMoreGames += `<li class="all-4-wrapper">${this.gameGroups[i]}</li>`
        }

        $('.button-list').prepend(allGameGroupButtons);
        $(".more__games_items").html(buttonInMoreGames);
    }

    displayGameSelections(gamesObj=this.gameSelections) {
        let allGameButtons = ``;
        gamesObj.forEach(gameTypeObj => {
            let openingTag = `<div class="play-methods_straight">
                        <div class="game__labels">${Object.keys(gameTypeObj)[0]}</div>
                        <div class="uuuuuu">`;
            let gameElement = ``;
            let gameNames = Object.values(gameTypeObj)[0];
            gameNames.forEach(gameName => {
                gameElement += `<div class="game__play_btns _width">${gameName}</div>`
            })

            let closingTags = `</div></div>`;
            allGameButtons += openingTag + gameElement + closingTags;
        });
        $(".play-methods-sections-parent").html(allGameButtons);
    }


    displayGameControls() { }
}

let render = new RenderPage();
render.displayGameGroups();
// render.displayGameSelections();
