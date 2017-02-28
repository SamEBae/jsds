// Main
function checkRow ( rowArr, letter ) {
	for ( var i=0; i < 3; i++) {
		if (rowArr[i]!=letter) {
			return false;
		}
	}
	return true;
}

function checkColumn ( gameBoardMatrix, columnIndex, letter ) {
	for ( var i=0; i < 3; i++) {
		if (gameBoardMatrix[i][columnIndex]!=letter) {
			return false;
		}
	}
	return true;
}

function ticTacToeWinner ( gameBoardMatrix, letter) {

	// Check rows
	var rowWin = checkRow(gameBoardMatrix[0], letter) 
	|| checkRow(gameBoardMatrix[1], letter) 
	|| checkRow(gameBoardMatrix[2], letter);
	
	var colWin = checkColumn(gameBoardMatrix, 0, letter) 
	|| checkColumn(gameBoardMatrix, 1, letter) 
	|| checkColumn(gameBoardMatrix, 2, letter);

	var diagonalWinLeftToRight = (gameBoardMatrix[0][0]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][2]==letter);
	var diagonalWinRightToLeft = (gameBoardMatrix[0][2]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][0]==letter);

	return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
}


var board = [['O','-','X'],['-','O','-'],['-','X','O']];
ticTacToeWinner(board, 'X'); // false
ticTacToeWinner(board, 'O'); // true