var shuffledList = [];
var sortedList = [];
var counter = 0;

document.addEventListener('keydown', logKey);

function logKey(e) {
    if(counter > 0) {
        var audio = new Audio("C:\\Users\\maxvk\\Pictures\\Drum Roll - Gaming Sound Effect (HD).mp3");
        audio.onended = function() {
            var winner = shuffledList[counter-1];
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
              counter--;
        }
        audio.play();
    }
}

function shuffleInput() {
    var x = document.getElementById("names");
    var seedElement = document.getElementById("seed");
    var seed = parseInt(seedElement.value);
    var arra1 = x.value.split(", ");
    arra1.sort();
    sortedList = arra1;

    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(seed/101 * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    shuffledList = arra1;
    counter = shuffledList.length;

    createTable();

    var namesDiv = document.getElementById("namesDiv");
    var seedDiv = document.getElementById("seedDiv");
    namesDiv.style = "display: none";
    seedDiv.style = "display: none";
}

function createTable() {
    var table = document.getElementById("Teilnehmerliste");
    var divElement = document.createElement("div");
    divElement.setAttribute("class", "rTableRow");
    var divElement2 = document.createElement("div");
    divElement2.setAttribute("class", "rTableHead");
    divElement2.innerText = "Teilnehmer";

    divElement.append(divElement2);
    table.append(divElement);

    sortedList.forEach(element => {
        var divElement = document.createElement("div");
        divElement.setAttribute("class", "rTableRow");
        var divElement2 = document.createElement("div");
        divElement2.setAttribute("class", "rTableCell");
        divElement2.setAttribute("id", element);
        divElement2.style = "text: center"
        divElement2.innerText = element;
        divElement.append(divElement2);

        var table = document.getElementById("Teilnehmerliste");
        table.append(divElement);
    });
}