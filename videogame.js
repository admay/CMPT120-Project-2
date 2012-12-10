// videogame.js

// Global variables to track location, inventory, and arrays
var usermoves = 0;
var ListOfLocations = new Array(); // Initialize the game map
var userlocation = 0; // initialize the user location to the bedroom
var ListOfItems = new Array(); // Initialize the list of items
var Inventory = new Array(); // Initialize the user's inventory

// Function that runs on page load
function gameInit() {
	ButtonSwitchFunction();
	var msg = "You wake up in your bedroom with the hankering for some cookies. And by the way your room is looking a little bit messy but you notice that there is a few bucks crumpled up behind your bed."
	updateText(msg);
	CreateListOfItems();
	CreateListOfLocations();
}

// for when the user wants to start a new game and when the user wins
function refresh() {
	var taGameArea = document.getElementById("taGame");
	taGame.value = "";
	usermoves = 0;
	//Inventory = new Array();
	//gameInit();
}

// Updates the text in the text area for the game
function updateText(msg) {
	var display = document.getElementById("taGame");
	display.value = msg + "\n" + "\n" + display.value + "\n";
}

// Still trying to get this to work but it isn't working out very well
// The point of this function is to display the inventory updates on the
// sidebar as opposed to updating the game text area.
function UpdateInventoryText(InvMsg) {
	var InventoryDisplay = document.getElementById("Inventory");
	InventoryDisplay.value = InventoryDisplay.value + "\n" + InvMsg;
}

// Performs actions based on user input
function btn_do_action_click(command) {
	var command = document.getElementById("taGameInput");
		switch(command.value) {
			case "N"    : 
			case "n"    : 
			case "North": 
			case "north": move(0);
						  break;
			case "S"    : 
			case "s"    : 
			case "South": 
			case "south": move(1);
						  break;
			case "E"    : 
			case "e"    : 
			case "East" : 
			case "east" : move(2);
						  break;
			case "W"    : 
			case "w"    : 
			case "West" : 
			case "west" : move(3);
						  break;
			/*case "up"	:
			case "Up"	: move(4);
						  break;
			case "down" :
			case "Down" : move(5);
						  break; */
			case "help" :
			case "Help" : user_help();
						  break;
			case "t"	:
			case "take" : TakeItem();
						  break;
			case "inventory" :
			case "i"    : DisplayInventory2();
						  break;
			case "pay"  : PayForCookies();
						  break;
			case "redo"  : refresh();
						  break;
			default : var msg = "Pardon?"
					  updateText(msg);
				      break;
		}
}

// Function to pay for the cookies and to win the game
function PayForCookies() {
	if ((Inventory.length === 4) && (userlocation === 19)) {
		var msg = "You hand over the money to the cashier and they ring you up. Before the receipt can even finish printing you scarf down the entire box of cookies. You head home to sleep the stomach ache off. Congradulation cookie musketeer, you have won and in only " + usermoves + " moves."
		refresh();
		ButtonSwitchFunction(99);
	} else if (userlocation !== 19) {
		var msg = "You can't pay for anything here."
	} else {
		var msg = "You have nothing to pay for";
	}
	updateText(msg);
}

// Function to display the short help menu
function user_help() {
	var msg = "The valid inputs are: N, n, North, north, or the equiv. for the other directions, up/Up, down/Down, take, pay, inventory, redo, and help.";
	updateText(msg);
}

/*
// Game Guide for if/when you get stuck

The fastest way to get through the game is to take the 5 bucks when the page loads, go west into the hallway,
south twice into the kitchen and take the keys, east once into the dinning room, take the watch, east 3 more
times and then go south until you reach the store. Then go west, take the cookies, east to the store front, 
south to the register and enter the command "pay" then BAM! You win...

*/