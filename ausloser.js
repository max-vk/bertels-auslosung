var shuffledList = [];
var sortedList = [];
var reverseCounter = 0;
var counter = 1;

function drawButton() {
    if(reverseCounter > 0) {
        let winner = shuffledList[reverseCounter-1];
        Swal.fire({ 
            title: winner,
            text: 'Test.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            })
        var winnerElement = document.getElementById(winner);
        winnerElement.innerHTML = winnerElement.innerText.strike();
        reverseCounter--;

        let playerCellElement = document.getElementById("player" + counter);
        playerCellElement.innerText = winner;

        counter++;
    }

    // if(counter > 0) {
    //     var audio = new Audio("C:\\Users\\maxvk\\Pictures\\Drum Roll - Gaming Sound Effect (HD).mp3");
    //     audio.onended = function() {
    //         var winner = shuffledList[counter-1];
    //         Swal.fire({ 
    //             title: winner,
    //             text: 'Test.',
    //             imageUrl: 'https://unsplash.it/400/200',
    //             imageWidth: 400,
    //             imageHeight: 200,
    //             imageAlt: 'Custom image',
    //           })
    //           var winnerElement = document.getElementById(winner);
    //           winnerElement.innerHTML = winnerElement.innerText.strike();
    //           counter--;
    //     }
    //     audio.play();
    // }
}

function shuffleInput() {
    var x = document.getElementById("names");
    var inputList = x.value.split(", ");
    sortedList = inputList.slice();
    sortedList.sort();

    shuffle(inputList);

    shuffledList = inputList;
    reverseCounter = shuffledList.length;

    createPlayerTable();
    createTeamTable();

    let namesDiv = document.getElementById("namesDivWrap");
    namesDiv.style = "display: none";

    var drawButton = document.getElementById("drawButton")
    drawButton.style = "";
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function createPlayerTable() {
    let teilnehmerDiv = document.getElementById("Teilnehmer-div");
    teilnehmerDiv.style = "";

    var table = document.getElementById("Teilnehmerliste");
    table.style = "";

    let playerCounter = 0;
    for(let i = 0; i < 4; i++) {
        let divElement = document.createElement("tr");
        divElement.setAttribute("class", "w-3 table tr");

        for(let j = 0; j < 8; j++) {
            var divElement2 = document.createElement("td");
            divElement2.setAttribute("class", "w-3 table td");
            divElement2.setAttribute("id", sortedList[playerCounter]);
            divElement2.style = "text: center"
            divElement2.innerText = sortedList[playerCounter];
            divElement.appendChild(divElement2);

            playerCounter++;
        }

        table.appendChild(divElement);
    }

    // sortedList.forEach(element => {
    //     var divElement = document.createElement("tr");
    //     divElement.setAttribute("class", "w-3 table tr");
    //     var divElement2 = document.createElement("td");
    //     divElement2.setAttribute("class", "w-3 table td");
    //     divElement2.setAttribute("id", element);
    //     divElement2.style = "text: center"
    //     divElement2.innerText = element;
    //     divElement.appendChild(divElement2);

    //     table.appendChild(divElement);
    // });
}

function createTeamTable() {
    let teamTableDiv = document.getElementById("TeamtabelleDiv");
    teamTableDiv.style = "";

    let teamTable = document.getElementById("Teamtabelle");
    let theadElement = document.createElement("thead");
    let trElement = document.createElement("tr");

    for(let teamCounter = 1; teamCounter < 17; teamCounter++) {
        let thElement = document.createElement("th");
        thElement.textContent = "Team " + teamCounter;

        trElement.appendChild(thElement);
    }

    theadElement.appendChild(trElement);
    teamTable.appendChild(theadElement);

    let playerCellCounter = 1;
    for(let i = 0; i < 2; i++) {
        let trElement = document.createElement("tr");
        trElement.setAttribute("class", "w-3 table tr");

        for(let j = 0; j < 16; j++) {
            var tdElement = document.createElement("td");
            tdElement.setAttribute("class", "w-3 table td");
            tdElement.setAttribute("id", "player" + playerCellCounter);
            tdElement.style = "text: center"
            trElement.appendChild(tdElement);

            playerCellCounter+=2;
        }
    
        teamTable.appendChild(trElement);
        playerCellCounter = 2;
    }


    // for(let i = 0; i < 32; i++) {
    //     let divElement = document.createElement("div");
    //     divElement.setAttribute("class", "rTableRow");
    //     let divElement2 = document.createElement("div");
    //     divElement2.setAttribute("class", "rTableHead");
    //     divElement2.innerText = "Team " + teamCounter;

    //     divElement.append(divElement2);
    //     teamTable.append(divElement);

    //     let divElement = document.createElement("div");
    //     divElement.setAttribute("class", "rTableRow");
    //     var divElement2 = document.createElement("div");
    //     divElement2.setAttribute("class", "rTableCell");
    //     divElement2.setAttribute("id", element);
    //     divElement2.style = "text: center"
    //     divElement2.innerText = element;
    //     divElement.append(divElement2);

    //     var table = document.getElementById("Teilnehmerliste");
    //     table.append(divElement);
    // };
}