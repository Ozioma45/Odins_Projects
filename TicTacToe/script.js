// displayController - Manages the display of messages on the page.
const displayController = (() => {
    // Function to render a message on the page.
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message;
    };

    // Expose only the rendering function.
    return {
        renderMessage,
    };
})();

// Gameboard - Handles the logic of rendering the game, updating the gameboard, and exposing the board without allowing direct access.
const Gameboard = (() => {
    // Array to represent the gameboard with empty squares.
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    // Function to render the gameboard on the page.
    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            // Generate HTML for each square based on its content.
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        });

        // Update the gameboard display on the page.
        document.querySelector("#gameboard").innerHTML = boardHTML;

        // Add click event listeners to each square for handling player moves.
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        });
    };

    // Function to update the gameboard with a player's move and trigger a re-render.
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    };

    // Function to expose the current state of the gameboard.
    const getGameboard = () => gameboard;

    // Expose rendering, updating, and accessing functions.
    return {
        render,
        update,
        getGameboard,
    };
})();

// createPlayer - Factory function to create player objects with a name and mark.
const createPlayer = (name, mark) => {
    return {
        name,
        mark,
    };
};

// Game - Manages the overall game flow, player turns, and game state.
const Game = (() => {
    // Array to store player objects.
    let players = [];
    // Index indicating the current player's turn.
    let currentPlayerIndex;
    // Flag to track whether the game is over.
    let gameOver;

    // Function to start the game, initialize players, and render the initial game state.
    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O"),
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    };

    // Function to handle a player's move when a square is clicked.
    const handleClick = (event) => {
        // If the game is over, do nothing.
        if (gameOver) {
            return;
        }

        // Extract the index of the clicked square from its ID.
        let index = parseInt(event.target.id.split("-")[1]);

        // If the square is already occupied, do nothing.
        if (Gameboard.getGameboard()[index] !== "") {
            return;
        }

        // Update the gameboard with the current player's mark.
        Gameboard.update(index, players[currentPlayerIndex].mark);

        // Check for a win or tie after the move.
        if (checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)) {
            // If someone wins, set the game over flag and display the winner.
            gameOver = true;
            displayController.renderMessage(`${players[currentPlayerIndex].name} wins!`);
        } else if (checkForTie(Gameboard.getGameboard())) {
            // If it's a tie, set the game over flag and display a tie message.
            gameOver = true;
            displayController.renderMessage("It's a Tie!");
        }

        // Switch to the next player's turn.
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    };

    // Function to restart the game by resetting the gameboard and messages.
    const restart = () => {
        // Clear all squares on the gameboard.
        for (let i = 0; i < 9; i++) {
            Gameboard.update(i, "");
        }

        // Render the cleared gameboard.
        Gameboard.render();

        // Clear any previous messages.
        document.querySelector("#message").innerHTML = "";

        // Reset the game over flag.
        gameOver = false;
    };

    // Expose functions for starting, handling clicks, and restarting.
    return {
        start,
        handleClick,
        restart,
    };
})();

// checkForWin - Function to check if a player has won the game.
function checkForWin(board) {
    // Define the winning combinations on the board.
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Iterate through the winning combinations to check for a win.
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true; // If a winning combination is found, return true.
        }
    }

    return false; // If no winning combination is found, return false.
}

// checkForTie - Function to check if the game is a tie (all squares are filled).
function checkForTie(board) {
    return board.every((cell) => cell !== "");
}

// Event listener for the restart button to restart the game.
const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
    Game.restart();
});

// Event listener for the start button to start the game.
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    Game.start();
});
