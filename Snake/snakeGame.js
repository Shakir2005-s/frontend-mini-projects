
const board = document.getElementById("board");
const result = document.getElementById("res");
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
    }
}
const cells = board.children;
let snake = [210, 209, 208]; 
snake.forEach(index => cells[index].classList.add("snake"));
let direction = "right";

let score = 0;
const scoreDisplay = document.getElementById("score");
let foodIndex;
function placeFood() {
    do {
        foodIndex = Math.floor(Math.random() * 400);
    } while (snake.includes(foodIndex));
    cells[foodIndex].classList.add("food");
}
placeFood();
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    if (event.key === "ArrowDown" && direction !== "up") direction = "down";
    if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (event.key === "ArrowRight" && direction !== "left") direction = "right";
});

function checkWallCollision(head) {
    if (direction === "up" && head < 20) return true;
    if (direction === "down" && head >= 380) return true;
    if (direction === "left" && head % 20 === 0) return true;
    if (direction === "right" && head % 20 === 19) return true;
    return false;
}

function checkSelfCollision(head) {
    return snake.includes(head);
}
function gameOver() {
    clearInterval(game);
    document.getElementById("gameOverText").innerText = "Game Over! Your score: " + score;
    result.style.display = "flex";
}

function moveSnake() {
    let head = snake[0];

    if (direction === "up") head -= 20;
    if (direction === "down") head += 20;
    if (direction === "left") head -= 1;
    if (direction === "right") head += 1;
    if (checkWallCollision(snake[0]) || checkSelfCollision(head)) {
        gameOver();
        return;
    }
    if (head === foodIndex) {
        snake.unshift(head);
        cells[head].classList.add("snake");
        cells[foodIndex].classList.remove("food");
        score++;
        scoreDisplay.textContent = "Score: " + score;
        placeFood();
    } else {
        let tail = snake.pop();
        cells[tail].classList.remove("snake");
        snake.unshift(head);
        cells[head].classList.add("snake");
    }
}

document.getElementById("restartBtn").addEventListener("click", () => {
    result.style.display = "none";
    snake.forEach(index => cells[index].classList.remove("snake"));
    cells[foodIndex].classList.remove("food");
    snake = [210, 209, 208];
    snake.forEach(index => cells[index].classList.add("snake"));
    direction = "right";
    score = 0;
    scoreDisplay.textContent = "Score: " + score;

    placeFood();
    game = setInterval(moveSnake, 300);
});

let game = setInterval(moveSnake, 300);
