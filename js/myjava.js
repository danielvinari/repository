function startGame(){
	for (var i = 1; i <= 9; i++) {
		clearBox(i);
	}
	document.count = 0;
	document.turn = 'X';
	document.winner = null;
	setMessage("Inizia " + document.turn);
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function nextMove(square){
	if(square.innerText === ''){
		square.innerText = document.turn;
		switchTurn();
		document.count += 1;
	}
	else{
		setMessage("Scegline uno diverso");
	}

}

function switchTurn(){
	if(checkForWinner(document.turn)){
		setMessage("Ha vinto: "+document.turn);
		document.winner = document.turn;
		document.getElementById("winnerclipart").appendChild(imgElement);
	}
	else {
		document.turn = document.turn === 'X' ? 'O' : 'X';
		setMessage("E' il turno di " + document.turn);
	}
}

function checkForWinner(move){
	var result = false;
	if(	checkRow(1,2,3, move) || checkRow(4,5,6, move) || checkRow(7,8,9, move) ||
		checkRow(1,4,7, move) || checkRow(2,5,8, move) || checkRow(3,6,9, move) ||
		checkRow(1,5,9, move) || checkRow(3,5,7, move))
	{
		result = true;
	}
	return result;
}

function checkRow(a,b,c,move){
	var result = false;
	if(getBox(a) === move && getBox(b) === move && getBox(c) === move){
		result = true;
	}
	return result;	
}

function getBox(number){
	return document.getElementById("s"+number).innerText;
}

function clearBox(number){
	document.getElementById("s"+number).innerText = "";
}