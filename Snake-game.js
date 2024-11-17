// Initialize game variables
let canvas, ctx;
let snake, food;
let direction, newDirection;
let score;
let gameInterval;
let isGameOver = false;

// Initialize the game
function initGame() {
    // Setup canvas
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    // Initial snake
    snake = [{ x: 10, y: 10 }];
    direction = "RIGHT";
    newDirection = "RIGHT";
    score = 0;

    // Set up food
    food = getRandomFoodPosition();

    // Game over flag
    isGameOver = false;

    // Start the game loop
    gameInterval = setInterval(gameLoop, 100);
}

// Main game loop
function gameLoop() {
    if (isGameOver) return;

    // Update snake position
    moveSnake();

    // Check for collision with food
    if (checkFoodCollision()) {
        score++;
        snake.push({ x: food.x, y: food.y });
        food = getRandomFoodPosition();
    }

    // Check for wall or self-collision
    if (checkCollision()) {
        gameOver();
    }

    // Redraw the game
    clearCanvas();
    drawSnake();
    drawFood();
    drawScore();
}

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Draw the snake
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
}

// Draw the food
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
}

// Draw the score
function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
}

// Get random position for food
function getRandomFoodPosition() {
    let x = Math.floor(Math.random() * (canvas.width / 20));
    let y = Math.floor(Math.random() * (canvas.height / 20));
    return { x: x, y: y };
}

// Move the snake based on the current direction
function moveSnake() {
    const head = { ...snake[0] };

    // Update the head position based on the new direction
    switch (newDirection) {
        case "UP":
            head.y -= 1;
            break;
        case "DOWN":
            head.y += 1;
            break;
        case "LEFT":
            head.x -= 1;
            break;
        case "RIGHT":
            head.x += 1;
            break;
    }

    // Add the new head to the front of the snake
    snake.unshift(head);
    snake.pop();
}

// Change the direction of the snake
function changeDirection(event) {
    if (isGameOver) return; // Don't change direction if the game is over

    const key = event.key;
    if (key === "ArrowUp" && direction !== "DOWN") {
        newDirection = "UP";
    } else if (key === "ArrowDown" && direction !== "UP") {
        newDirection = "DOWN";
    } else if (key === "ArrowLeft" && direction !== "RIGHT") {
        newDirection = "LEFT";
    } else if (key === "ArrowRight" && direction !== "LEFT") {
        newDirection = "RIGHT";
    }
    direction = newDirection;
}

// Check if the snake collides with the walls or itself
function checkCollision() {
    const head = snake[0];

    // Check if snake hits the wall
    if (head.x < 0 || head.x >= canvas.width / 20 || head.y < 0 || head.y >= canvas.height / 20) {
        return true;
    }

    // Check if snake hits itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Check if the snake collides with the food
function checkFoodCollision() {
    const head = snake[0];
    return head.x === food.x && head.y === food.y;
}

// Game over function
function gameOver() {
    isGameOver = true;
    clearInterval(gameInterval);
    alert("Game Over! Your score was: " + score);
}

// Restart the game
function restartGame() {
    // Reset the game state and variables
    clearInterval(gameInterval);
    initGame();
}

// Event listeners for direction change
document.addEventListener("keydown", changeDirection);

// Initialize the game when the page loads
window.onload = function() {
    initGame();
    document.getElementById("restartBtn").addEventListener("click", restartGame);
};
// Event listener for the "Go Back to Homepage" button
document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "index.html"; // Replace "index.html" with the actual homepage URL
});
