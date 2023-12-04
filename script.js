function fillCell(char){
    let cellNodes = document.querySelectorAll(".cell");
    cellNodes.forEach(cell => {
        cell.addEventListener("click", e => {
            if(!e.target.innerText){
                e.target.innerText = char;
            
                // Changing char to second player
                char = char == "O" ? "X" : "O"
    
                console.log(char);
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

// Char "X" or "O"
function checkCellsValue(char){
    for(let i = 0; i < 9; i++){
        cellValue = cellNodes[i].innerText;

        // Setting cells
        cells[i] = new Cell(Math.floor(i/3)+1, (i%3)+1, cellValue, i);
        console.log(cells[i]);
            
        // elem.innerHTML = "";
        // elem.innerHTML = "X";
    
        // if(!elem.innerHTML){
        //     console.log(elem);
        //     console.log(i + " Empty");
        // }
        // else{
        //     console.log(elem);
        //     console.log(i + " Not empty")
        // }
    }
}


class Cell{
    constructor(row, column, value, index) {
        this.row = row;
        this.column = column;
        this.value = value;
        this.index = index;
    }
}

let cells = [];

// console.log(cells[0]);
// console.log(cellNodes);

// filling cell with "X" or "O" by click
fillCell("O");
// checkCellsValue();
