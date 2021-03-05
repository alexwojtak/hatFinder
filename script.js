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
	//console.log("Position x is " + playerx + " and position y is " + playery);
	if (playerx === doorx && playery === doory) {
		console.log("win");
		document.getElementById("winMessage").style.display=("inline");
	}
}

function checkLoss() {
	if(myField.level[playery][playerx] === 1){
		document.getElementById("loseMessage").style.display=("inline");
		console.log("lose");
	}
}

class Field {
	constructor (level){
		this._level = level;
	}
	
	get level(){
		return this._level;
	}

	//Print Field method creates full HTML string to add via innerHTML. 
	//Operation is expensive, so must be done in one go.
	printField(){
		let i = 0;
		let j = 0;
		let tempString = "";
		let tempString2 = "";
		let tempString3 = "";
		let sprite = "";
		for (i=0; i < this._level.length; i++){
			tempString2 = "";
			for (j=0; j < this._level[0].length; j++){
				//Create the html string and positions each sprite
				if (this._level[i][j] === 0){
					sprite = "pack/rpg-pack/props n decorations/generic-rpg-barrel03.png";
					//console.log("location " + i + ", " + j + " is a barrel.");
				}
				else if(this._level[i][j] === 1){
					sprite = "pack/rpg-pack/props n decorations/hole.png";
					//console.log("Not a barrel");
				}
				else if(this._level[i][j] === 2){
					sprite = "pack/rpg-pack/props n decorations/hat.png";
				}
				tempString = "<img id='x" + i + "y" + j + "' class='BGTile' style='top:" + ((24 * i)+5) + "px; left:" + ((24 * j)+5) + "px' src='" + sprite + "'>"
				//console.log(tempString);
				tempString2 += tempString;
			}
			//console.log(tempString2);
			tempString3 += tempString2;
		}	
		//console.log("Big string is " + tempString3);
		document.getElementById('gamearea').innerHTML += tempString3;
	}
}

const myField = new Field([[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
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
		checkLoss();
	}
    }
    else if (e.keyCode == 40 || e.keyCode === 83) {
        if (playery<15){
        	playery++;
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
		checkLoss();
        }
    }
    else if (e.keyCode == 37 || e.keyCode === 65) {
//Moving left
	if (playerx>0){
	    	playerx--;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
		checkLoss();
	}
    }
    else if (e.keyCode == 39 || e.keyCode === 68) {
//Moving right
	if (playerx<31){
	    	playerx++;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
		checkLoss();
	}
    }

}
