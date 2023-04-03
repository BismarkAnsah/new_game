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
    totalGamesToDisplay = 8;

    displayGameGroups(){
        let allGameGroupButtons = `<li class="list__menu_btn active">${this.gameGroups[0]}</li>`;
        let totalGames = this.gameGroups.length;
        let moreButton = `<li class="list__menu_btn" id="toggle-offload">more</li>`;
        if(totalGames > this.totalGamesToDisplay){
            firstLoopLength = this.totalGamesToDisplay;
            $('button-list').append(moreButton);
        }else {
            firstLoopLength = totalGames;
        }
        for(let i = 1; i < totalGames; i++) 
        {
            allGameGroupButtons += `<li class="list__menu_btn active">${this.gameGroups[i]}</li>`
        }
        $('button-list').html(allGameGroupButtons);
    }

    displayGameSelections(){}
    displayGameControls(){}
}