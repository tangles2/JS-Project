let sudokuBoard = Array(9);
let boardPositions = Array(9);
//MAKE BOARD
function createSudokuBoard() {
    for (let i = 0; i < 9; i++) {
        sudokuBoard[i] = Array(9);
    }
    for (let i = 0; i < 81; i++) {
        boardPositions[i] = Array(2);
    }
    let positionCount = 0;
    while (positionCount < 81) {
        for (let i = 0; i < 9; i++) {
            let arrayCount = 0;
            while (arrayCount < 9) {
                boardPositions[positionCount][0] = i;
                boardPositions[positionCount][1] = arrayCount;
                positionCount++;
                arrayCount++;
            }
        }
    }
    insertNumber();
}
//INSERT
function insertNumber() {
    let i = 0;
    while (i < 81) {
        let location = boardPositions[(Math.floor(Math.random() * boardPositions.length))];
        let insertRow = location[0];
        let insertColumn = location[1];
        let value = checkLocation(insertRow, insertColumn);
        sudokuBoard[insertRow][insertColumn] = value;
        if (!value) {
            sudokuBoard[insertRow][insertColumn] = '-';
        }
        let indexCoordinate = boardPositions.indexOf(location);
        boardPositions.splice(indexCoordinate, 1);
        i++;
    }
}
//LOCATION
function checkLocation(row, column) {
    let choice = [];
    let indexElement;
    let end;
    for (let i = 0; i < 9; i++) {
        choice.push(i + 1);
    }
    //THROUGH ROW
    for (let i in sudokuBoard[row]) {
        if (sudokuBoard[row][i]) {
            indexElement = choice.indexOf(sudokuBoard[row][i]);
            choice.splice(indexElement, 1);
        }
    }
    //THROUGH COL
    for (let j in sudokuBoard) {
        if (sudokuBoard[j][column]) {
            indexElement = choice.indexOf(sudokuBoard[j][column]);
            choice.splice(indexElement, 1);
        }
    }
    let rowBlock = Math.floor(row / 3) * 3;
    let colBlock = Math.floor(column / 3) * 3;
    for (let i = rowBlock; i < rowBlock + 3; i++) {
        for (let j = colBlock; j < colBlock + 3; j++) {
            if (sudokuBoard[i][j]) {
                indexElement = choice.indexOf(sudokuBoard[i][j]);
                choice.splice(indexElement, 1);
            }
        }
    }
    end = choice[(Math.floor(Math.random() * choice.length))];
    return end;
}
function makeTableHTML(t) {
    let tmp = "<table border=1>";
    for (let i = 0; i < t.length; i++) {
        tmp += "<tr>";
        for (let j = 0; j < t[i].length; j++) {
            tmp += "<td>" + t[i][j] + "</td>";
        }
        tmp += "</tr>";
    }
    tmp += "</table>";
    return tmp;
}
createSudokuBoard();
console.table(sudokuBoard);
document.write(makeTableHTML(sudokuBoard));