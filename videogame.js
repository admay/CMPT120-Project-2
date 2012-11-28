// videogame.js

var usermoves = 0;
var ListOfLocations = new Array(); // Initialize the game map
var ListOfItems = new Array(); // Initialize the list of items
var Inventory = new Array(); // Initialize the user's inventory
var userlocation = 0; // initialize the user location to the bedroom

// Object Variables

var carKeys         = false; 
var money           = false;
var cookies         = false;
var payment         = false; 
var userBreathing   = true;

// Function that runs on page load
function init() {
	button_switch(userlocation);
	var msg = "You wake up in your bedroom with the hankering for some cookies. And by the way your room is looking a little bit messy, you might want to do your chores sometime or else your parents might get mad."
	updateText(msg);
	//loadMap();
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
	if (userBreathing === false) {
		var msg = "You're dead, refresh the page and try again.";
		updateText(msg);
	} else {
		switch(command.value) {
			case "N"    : 
			case "n"    : 
			case "North": 
			case "north": move_north();
						  break;
			case "S"    : 
			case "s"    : 
			case "South": 
			case "south": move_south();
						  break;
			case "E"    : 
			case "e"    : 
			case "East" : 
			case "east" : move_east();
						  break;
			case "W"    : 
			case "w"    : 
			case "West" : 
			case "west" : move_west();
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
			case "play" : SpecialCommands("play"); //
						  break;
			case "pee"  : SpecialCommands("pee"); //
						  break;
			default : var msg = "Pardon?"
					  updateText(msg);
				      break;
		}
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
		case "play" : if (userlocation === 6) {
						  var msg = "You run around and play with your dog, that was delightful";
					  } else {
					  	var msg = "Stop playing with yourself...";
					  }
					  break;
		case "pee"  : if ((userlocation === 3) || (userlocation === 19)) {
						  var msg = "How refreshing.";
					  } else {
					  		var msg = "You barbarian!";
					  }
					  break;
	}
}

// Function to display the short help menu
function user_help() {
	var msg = "The valid inputs are: N, n, North, north, or the equiv. for the other directions, take, and help.";
	updateText(msg);
}