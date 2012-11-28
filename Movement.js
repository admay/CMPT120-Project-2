// Movement.js

// Move the player north
function move_north() {
	usermoves = usermoves + 1;
	switch(userlocation) {
		case 4  : userlocation = 1
				  break;
		case 8  : userlocation = 4
				  break;
		case 9  : userlocation = 8
				  break;
		case 11 : userlocation = 17
				  break;
		case 15 : userlocation = 14
				  break;
		case 17 : userlocation = 19
				  break;
		case 20 : userlocation = 9
				  break;
		case 21 : if (payment === true) {
				      userlocation = 20
				  } else {
				  		userlocation = 21
				  }
				  break;
		case 22 : userlocation = 21
				  break;
		case 24 : userlocation = 16
				  break;
		default : var msg = "You cannot go that way silly!"
				  updateText(msg);
				  break;
	}
	updateText(ListOfLocations[userlocation]);
	button_switch(userlocation);
}

// Move the player south
function move_south() {
	usermoves = usermoves + 1;
	switch(userlocation) {
		case 1  : userlocation = 4
				  break;
		case 4  : userlocation = 8
				  break;
		case 8  : if (Inventory.length === 2) {
				  userlocation = 9
				  } else {
				  	var msg = "You cannot go that way yet";
				  	updateText(msg);
				  	userlocation = 8;
				  }
				  break;
		case 9  : userlocation = 20
				  break;
		case 14 : userlocation = 15;
				  break;
		case 16 : userlocation = 24
				  break;
		case 17 : userlocation = 11
				  break;
		case 19 : userlocation = 17
				  break;
		case 20 : userlocation = 21
				  break;
		case 21 : if (cookies === true) {
				  	  userlocation = 22
				  } else {
				  	    var msg = "You have nothing to pay for."
				  	    updateText(msg)
				  }
				  break;
		default : var msg = "You cannot go that way silly!"
				  updateText(msg);
				  break;
	}
	updateText(ListOfLocations[userlocation]);
	button_switch(userlocation);
}

// Move the player east
function move_east() {
	usermoves = usermoves + 1;
	switch(userlocation) {
		case 1  : userlocation = 0
				  break;
		case 2  : userlocation = 1
				  break;
		case 4  : userlocation = 3
				  break;
		case 5  : userlocation = 4
				  break;
		case 6  : userlocation = 5
				  break;
		case 7  : userlocation = 8
				  break;
		case 8  : userlocation = 10
				  break;
		case 10 : userlocation = 11
				  break;
		case 11 : userlocation = 12
				  break;
		case 12 : userlocation = 13
				  break;
		case 13 : userlocation = 14
				  break;
		case 15 : userlocation = 16
				  break;
		case 17 : userlocation = 18
				  break;
		case 21 : userlocation = 23
				  break;
		default : var msg = "You cannot go that way silly!"
				  updateText(msg);
				  break;
	}
	updateText(ListOfLocations[userlocation]);
	button_switch(userlocation);
}

// Move the player west
function move_west() {
	usermoves = usermoves + 1;
	switch(userlocation) {
		case 0  : userlocation = 1
			      break;
		case 1  : userlocation = 2
				  break;
		case 3  : userlocation = 4
				  break;
		case 4  : userlocation = 5
				  break;
		case 5  : userlocation = 6
				  break
		case 8  : userlocation = 7
				  break;
		case 10 : userlocation = 8
				  break;
		case 11 : userlocation = 10
				  break;
		case 12 : userlocation = 11
				  break;
		case 13 : userlocation = 12
				  break;
		case 14 : userlocation = 13
				  break;
		case 16 : userlocation = 15
				  break;
		case 18 : userlocation = 17
				  break;
		case 23 : userlocation = 21
				  break;
		default : var msg = "You cannot go that way silly!"
				  updateText(msg);
				  break;
	}
	updateText(ListOfLocations[userlocation]);
	button_switch(userlocation);
}