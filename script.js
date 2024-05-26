function fillCell(char){
    let cellNodes = document.querySelectorAll(".cell");
    cellNodes.forEach(cell => {
        cell.addEventListener("click", e => {
            if(!e.target.innerText){
                e.target.innerText = char;
            
                // Checking if any char win
                checkGameStatus(char);

                // Changing char to second player
                char = char == "O" ? "X" : "O"

            }
        })
    })    
}

let winCombos = [
    // All win combos [row, column]

    // oblique combos
    [[1,1], [2,2], [3,3]],
    [[1,3], [2,2], [3,1]],
    
    // vertical combos (-)
    [[1,1], [1,2], [1,3]],
    [[1,3], [2,2], [3,1]],
    [[1,3], [2,2], [3,1]],

    // horizontal combos (|)
    [[1,1], [2,1], [3,1]],
    [[1,2], [2,2], [3,2]],
    [[1,3], [2,3], [3,3]]
];

// Checking if two cells are the same
function theSameCellsCheck(cell1, cell2){
    for(let i = 0; i < 2; i++){
        if(cell1[i] != cell2[i])
            return false;
    }

    return true;
}

// Checking if any char is won
function checkGameStatus(char){
    
    let cellNodes = document.querySelectorAll(".cell");
    let cells = [];

    let emptyCells = 0;

    // Setting cells position
    for(let i = 0; i < 9; i++){
        let row = Math.floor(i/3)+1;
        let column = (i%3)+1;
        let cellValue = cellNodes[i].innerText;
    
        // Counting empty cells
        if(cellValue == ''){
            emptyCells++;
        }

        cells[i] = [row, column, cellValue];
    }    

    // Check if any char (player) is won
    let isWin = 0;
    winCombos.forEach(combo => {
        if(isWin < 3)
            isWin = 0;

        // Cells
        for(let i = 0; i < 9; i++){
            
            // Combos
            for(let j = 0; j < 3; j++){

                // Compare a cells with a combos
                if(cells[i][2] == char){
                    if(theSameCellsCheck(cells[i], combo[j])) isWin++;
                }

            }   
        }
        
    })

    console.log(isWin, emptyCells);
    // If any char have won combo
    if(isWin >= 3){
        endGame(char, false);
    }

    // If noOne have won
    if(emptyCells == 0)
        endGame(char, true);


}

// Make a popup with info who won
function endGame(char, isDraw = false){

    if(isDraw)
        document.querySelector("#winMessage").innerHTML = `It's draw!`;
    else
        document.querySelector("#winMessage").innerHTML = `Player ${char} has won!`;
    
    document.querySelector(".winScreen").classList.remove("hidden");
}

function resetCells(){
    let cellNodes = document.querySelectorAll(".cell");

    cellNodes.forEach(cell => {
        cell.innerText = "";
    })
}

function resetGame(){
    document.querySelector(".winScreen").classList.add("hidden");
    resetCells();
    fillCell("O");
}

resetGame();

