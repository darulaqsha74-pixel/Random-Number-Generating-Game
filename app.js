let randomNo=Math.floor(Math.random()*10+1);


function submitGuess() {

    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    result.style.display = "block";

    if (guess === randomNo) {
        result.innerHTML = "Correct! 🎉";
    }
    else {
        result.innerHTML = randomNo + " is the correct number.";
    }
    
}