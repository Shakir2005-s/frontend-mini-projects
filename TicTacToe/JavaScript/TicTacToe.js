let buttons = document.querySelectorAll("button");
let xTurn = false;
let win = false;
let draw = false;
let res = document.getElementById("result");
let playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", () => {
    clearAll();
    res.style.display = "none";
    playAgain.style.display = "none";
})
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
buttons.forEach((button) => {
    button.addEventListener("click", () => {


        if (!xTurn) {
            button.innerText = "X";
            button.disabled = true;
            xTurn = true;
            win = checkWinner();
            draw = checkDraw();

            if (win) {


                res.innerText = `${win} has won the match`;
                playAgain.innerText = "Play Again";
                playAgain.style.display = "block";
                res.style.display = "block";
                DisabledButton();
            }
            else if (draw) {
                res.innerText = "Match Draw!";
                res.style.display = "block";
                playAgain.style.display = "block";
            }

        }
        else {
            button.innerText = "O";
            button.disabled = true;
            xTurn = false;
            win = checkWinner();
            draw = checkDraw();
            if (win) {
                res.innerText = `${win} has won the match`;
                res.style.display = "block";
                playAgain.innerText = "Play Again";
                playAgain.style.display = "block";
                DisabledButton();
            }
            else if (draw) {
                res.innerText = "Match Draw!";
                res.style.display = "block";
                playAgain.style.display = "block";
            }


        }
    });
});
function DisabledButton() {
    buttons.forEach((val) => {
        val.disabled = true;

    });
}
function checkWinner() {
    for (let i = 0; i < winPattern.length; ++i) {
        let pos1 = buttons[winPattern[i][0]].innerText;
        let pos2 = buttons[winPattern[i][1]].innerText;
        let pos3 = buttons[winPattern[i][2]].innerText;
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3)
            return pos1;
    }
    return null;

}
function checkDraw() {
    for (const button of buttons) {
        if (button.disabled === false) {
            return false;
        }
    }
    return true;
}
function clearAll() {
    buttons.forEach((button) => {
        button.innerText = "";
        button.disabled = false;
    })
}



