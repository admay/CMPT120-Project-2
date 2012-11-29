// videogame.js

var usermoves = 0;
var ListOfLocations = new Array(); // Initialize the game map
var ListOfItems = new Array(); // Initialize the list of items
var Inventory = new Array(); // Initialize the user's inventory
var userlocation = 0; // initialize the user location to the bedroom

// Object Variables

//var carKeys         = false; 
//var money           = false;
//var watch			  = false;
//var cookies         = false; 

// Function that runs on page load
function init() {
	ButtonSwitchFunction();
	var msg = "You wake up in your bedroom with the hankering for some cookies. And by the way your room is looking a little bit messy, you might want to do your chores sometime or else your parents might get mad."
	updateText(msg);
	CreateListOfItems();
	CreateListOfLocations();
	
}

// Updates the text in the text area for the game
function updateText(msg) {
	var display = document.getElementById("taGame");
	display.value = msg + '\n' + display.value + '\n';
}

// Run this when the player wins the game
function GameWinFunction() {
	var msg = "OM NOM NOM NOM NOM !!! CONGRADULATIONS !!! You won the game and in only " + usermoves + " moves!"
	updateText(msg);
}

// Performs actions based on user input
function btn_do_action_click(command) {
	var command = document.getElementById("taGameInput");
		switch(command.value) {
			case "N"    : 
			case "n"    : 
			case "North": 
			case "north": f(0);
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
			case "help" :
			case "Help" : user_help();
						  break;
			case "t"	:
			case "take" : TakeItem();
						  break;
			case "inventory" :
			case "i"    : DisplayInventory();
						  break;
			case "pay"  : SpecialCommands("pay"); //
						  break;
			case "eat"	: SpecialCommands("eat"); //
						  break;
			default : var msg = "Pardon?"
					  updateText(msg);
				      break;
		}
}

function SpecialCommands(action) {
	switch(action) {
		case "pay"  : if ((userlocation === 22) && (cookies === true) && (payment === false)) {
						  payment = true;
						  var msg = "You hand over your 5 bucks and officially have your cookies"
					  } else {
					  		var msg = "You have nothing to pay for."
					  }
					  break;
		case "eat"  : if (cookies === true) {
						  GameWinFunction();
		              } else {
		              		var msg = "Eat what?"
		              }
		              break;
	}
}

// Function to display the short help menu
function user_help() {
	var msg = "The valid inputs are: N, n, North, north, or the equiv. for the other directions, take, and help.";
	updateText(msg);
}