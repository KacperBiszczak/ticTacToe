function fillCell(char){
    let cellNodes = document.querySelectorAll(".cell");
    cellNodes.forEach(cell => {
        cell.addEventListener("click", e => {
            if(!e.target.innerText){
                e.target.innerText = char;
            
                // Checking if any char win
                checkCellsValue(char);

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
        if(cell1[i] == cell2[i])
            return false;
    }

    return true;
}

// Checking if any char is won
function checkCellsValue(char){
    console.log(char);
    let cellNodes = document.querySelectorAll(".cell")
    let cells = [];

    for(let i = 0; i < 9; i++){
        cellValue = cellNodes[i].innerText;

        // Setting cells position
        cells[i] = [Math.floor(i/3)+1, (i%3)+1, cellValue];

        // Checking is win (if isWin = 3 char is WIN!)
        let isWin = 0;
        if(cellValue == char){

            winCombos.forEach(combo => {
                isWin = 0;

                // Comparing a three cells
                for(let j = 0; j < 3; j++){
                    if(theSameCellsCheck(cells[i], combo[j]))
                        console.log(++isWin);
                    else
                        console.log("-----")
                }
                // WORK IN PROGRESS...
            })

        }

    }
}

// console.log(cells[0]);
// console.log(cellNodes);

// filling cell with "X" or "O" by click
fillCell("O");
// checkCellsValue();
