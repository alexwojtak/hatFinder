document.onkeydown = checkKey;

let playerx = 0;
let playery = 0;
let doorx = 29;
let doory = 8;

//Stop arrow keys moving the screen around
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

//Check win condition
function checkWin() {
	console.log("Position x is " + playerx + " and position y is " + playery);
	if (playerx === doorx && playery === doory) {
		console.log("win");
		document.getElementById("winMessage").style.display=("inline");
	}
}

class Field {
	constructor (level){
		this._level = level;
	}

	//Print Field method creates full HTML string to add via innerHTML. 
	//Operation is expensive, so must be done in one go.
	printField(){
		let i = 0;
		let j = 0;
		let tempString = "";
		let tempString2 = "";
		let tempString3 = "";
		for (i=0; i < this._level.length; i++){
			tempString2 = "";
			for (j=0; j < this._level[0].length; j++){
				tempString = "<img id='x" + i + "y" + j + "' class='BGTile' style='top:" + 24 * i + "px; left:" + 24 * j + "px' src='pack/rpg-pack/props n decorations/generic-rpg-barrel03.png'>"
				//console.log(tempString);
				tempString2 += tempString;
			}
			console.log(tempString2);
			tempString3 += tempString2;
		}	
		console.log("Big string is " + tempString3);
		document.getElementById('gamearea').innerHTML += tempString3;
	}
}

const myField = new Field([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
myField.printField();

//Keys to move the player
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode === 38 || e.keyCode === 87) {
	if (playery>0){
	    	playery--;
		//Move player 24px (player dimension) in the desired direction
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
	}
    }
    else if (e.keyCode == 40 || e.keyCode === 83) {
        if (playery<15){
        	playery++;
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
        }
    }
    else if (e.keyCode == 37 || e.keyCode === 65) {
//Moving left
	if (playerx>0){
	    	playerx--;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
	}
    }
    else if (e.keyCode == 39 || e.keyCode === 68) {
//Moving right
	if (playerx<31){
	    	playerx++;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
	}
    }

}
