let Num = Math.floor((Math.random() * 100) + 1);

function guess() {
    let guessedNum = parseInt(document.getElementById("numGuess").value);

    if (isNaN(guessedNum)) {
        document.getElementById("status").innerHTML = "NaN Guess a Number";
    } else if (guessedNum < Num) {
        document.getElementById("status").innerHTML = "Too low!! Guess Higher Number";
    } else if (guessedNum > Num) {
        document.getElementById("status").innerHTML = "Too high!! Guess Lower Number";
    } else if (guessedNum == Num) {
        document.getElementById("status").innerHTML = "You Got It";
        Num = Math.floor((Math.random() * 100) + 1);
    }
}
