const PLAYER_X = 'X';
const PLAYER_O = 'O';
const PLAYER_0_TURN = false;
const WINNER_COMBOS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

// cell id's array
const cells = [
    {cell: document.getElementById("cell-1")},
    {cell: document.getElementById("cell-2")},
    {cell: document.getElementById("cell-3")},
    {cell: document.getElementById("cell-4")},
    {cell: document.getElementById("cell-5")},
    {cell: document.getElementById("cell-6")},
    {cell: document.getElementById("cell-7")},
    {cell: document.getElementById("cell-8")},
    {cell: document.getElementById("cell-9")}
];

function start(){
    cellHandler(1);

}


function cellHandler(player) {
    for (cell in cells){
        cells[cell].cell.addEventListener("click", function(){touch(cells[cell].cell, playerTurn(player))});
    }
}

// this function will handle changing cell values
function touch(cell, player) {
    if (player == PLAYER_X) {
        cell.innerHTML = PLAYER_X;
    }
}

// determine who's turn it is or if the game is over
function playerTurn(player) {
    if (player == 1) {
        return PLAYER_X;
    } else if (player > 1) {
        return PLAYER_O;
    } else {
        document.getElementById("table-header").innerHTML = "Thanks for playing!";
        return;
    }
}