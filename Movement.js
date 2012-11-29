// Movement.js

var GameArea = new Array(
				 /*  N   S   E   W */
				 /*  0   1   2   3 */
		/* 0 */    [-1, -1, -1,  1],
		/* 1 */    [-1,  4,  0,  2],
		/* 2 */    [-1, -1,  1, -1],
		/* 3 */    [-1, -1, -1,  4],
		/* 4 */    [ 1,  8,  3,  5],
		/* 5 */    [-1, -1,  4,  6],
		/* 6 */    [-1, -1,  5, -1],
		/* 7 */    [-1, -1,  8, -1],
		/* 8 */    [ 4, -1, 10,  7],
		/* 9 */    [13, 17, -1, -1],
		/* 10 */   [-1, -1, 11,  8],
		/* 11 */   [14, -1, 12, 10],
		/* 12 */   [-1, -1, 13, 11],
		/* 13 */   [-1,  9, -1, 12],
		/* 14 */   [16, 11, 15, -1],
		/* 15 */   [-1, -1, -1, 14],
		/* 16 */   [-1, 14, -1, -1],
		/* 17 */   [ 9, 18, -1, -1],
		/* 18 */   [17, 19, 20, -1],
		/* 19 */   [18, -1, -1, -1],
		/* 20 */   [-1, -1, -1, 18]
			    );	
			    				
function move(direction) {
	newLocation = GameArea[userlocation][direction];
	if (newLocation !== -1) {
		userlocation = newLocation;
		updateText(ListOfLocations[userlocation])
		ButtonSwitchFunction(userlocation);
	} else if (newLocation === -1) {
		var msg = "You can't go that way silly!"
		updateText(msg);
	}
}