var shuffledList = [];
var maxListLength;
var drawCounter = 0;
var shuffled = false;
var groupCounter = 0;

function createGroups() {
    let teamResultsElement = document.getElementById("teamResults");
    let text = teamResultsElement.value;
    let teamArray = text.split(";");
    teamArray = teamArray.filter(el => {
        return el != null && el != '';
      });

    return teamArray;
}

function shuffleGroups() {
    let teamArray = createGroups();

    shuffledList = shuffle(teamArray);
    maxListLength = shuffledList.length;

    let teamsDiv = document.getElementById("teamsDivWrap");
    teamsDiv.style = "display: none";

    let drawButton = document.getElementById("drawButton")
    drawButton.style = "";
}

function drawButton() {
    if(groupCounter < 4) {
        let tdArray = getColumn("Gruppentabelle", groupCounter)
        for(let i = 0; i < tdArray.length; i++) {
            tdArray[i].innerText = shuffledList.pop();
        }

        groupCounter++;
    }
}

function getColumn(table_id, col) {
    var tab = document.getElementById(table_id);
    var n = tab.rows.length;
    var i, tr, td;
    var tdArr = [];

    if (col < 0) {
        return null;
    }

    for (i = 1; i < n; i++) {
        tr = tab.rows[i];
        if (tr.cells.length > col) { 
            td = tr.cells[col];      
            tdArr.push(td);
        } 
    }
    return tdArr;
}


function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}