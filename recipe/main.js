var words = ["jumping", "spinach", "protien", "run", "water", "weights", "fruit", "fish", "lift"];
//random string from array
const randomNum = () => {
    return Math.floor(Math.random() * words.length);
};
//consolidated to variable
let chosenWord = words[randomNum()];
//open array for all the right letters chosen
let rightWordArray = [];
// open array for all the letters guessed/wrong
let wrongWordArray = [];
// open array for the chosen words which helps generate underscores
let underScore = [];
let docUnderScore = document.getElementsByClassName("underline");
let docGuess = document.getElementsByClassName("guessedlettersdiv");
let wins = 0;
let winsCount = document.getElementsByClassName("winscount");
let guessremainingNum = 5;
let guessremainingNumSpan = document.getElementById("guessremainingNum");
let imgDiv = document.getElementById("imgdivid");

//not working properly unable to reload image and create a new word rather than existing
function resetFunc() {
    chosenWord = words[randomNum()];
    imgDiv.removeChild(imgDiv.childNodes[2]);
    newPicture();
    guessremainingNum = 5;
    guessremainingNumSpan.innerHTML = guessremainingNum;
    rightWordArray = [];
    wrongWordArray = [];
    underScore = [];
    docUnderScore[0].innerHTML = generateUnderscore().join(" ");
}

function randomTrivia() { }

function generateUnderscore() {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
function newPicture() {
    if (chosenWord === words[0]) {
        var img = document.createElement("img");
        img.src = "jumping-jack.jpg";
        imgDiv.appendChild(img);
    } else if (chosenWord === words[1]) {
        var img = document.createElement("img");
        img.src = "spinach.jpg";
        imgDiv.appendChild(img);
    } else if (chosenWord === words[2]) {
        var img = document.createElement("img");
        img.src = "protien.jpg";
        imgDiv.appendChild(img);
    } else if (chosenWord === words[3]) {
        var img = document.createElement("img");
        img.src = "running.jpg";
        imgDiv.appendChild(img);
    } else if (chosenWord === words[4]) {
        var img = document.createElement("img");
        img.src = "water.jpg";
        imgDiv.appendChild(img);
    } else if (chosenWord === words[5]) {
        var img = document.createElement("img");
        img.src = "weights.jpg";
        imgDiv.appendChild(img);
    } else if (chosenWord === words[6]) {
        var img = document.createElement("img");
        img.src = "fruit.jpg";
        imgDiv.appendChild(img);
    }
    else if (chosenWord === words[7]) {
        var img = document.createElement("img");
        img.src = "fish.jpg";
        imgDiv.appendChild(img);
    }
    else if (chosenWord === words[8]) {
        var img = document.createElement("img");
        img.src = "lift.png";
        imgDiv.appendChild(img);
    }
}

// creating the function to minus the number of guesses when a letter is pushed to wrongWordArray
function wrongGuess() {
    guessremainingNum--;
    guessremainingNumSpan.innerHTML = guessremainingNum;

    if (guessremainingNum === 0) {
        alert("You Lose 😢");
        location.reload();
    }
}

document.addEventListener("keyup", function () {
    let keyword = String.fromCharCode(event.keyCode).toLowerCase();
    if (chosenWord.indexOf(keyword) > -1) {
        rightWordArray.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(" ");
        if (underScore.join("") == chosenWord) {
            alert("You Win 😊");
            wins++;
            winsCount.innerHTML = wins;
            resetFunc();
        }
    } else {
        wrongWordArray.push(keyword);
        wrongGuess();
    }
    //creates the letters that are wrongly guessed in the DOM
    docGuess[0].innerHTML = wrongWordArray.join(" ");
});

resetFunc();