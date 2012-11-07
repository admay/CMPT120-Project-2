var score           = 0; //initialize the score to zero
var userlocation    = "bedroom"; //initialize the user location to the bedroom
var userMoves       = 0;
// Score Variables
var scrHallwayA     = false;
var scrSisterRoom   = false;
var scrBathroomA    = false;
var scrHallwayB     = false;
var scrLivingRoom   = false;
var scrFrontLawn    = false;
var scrKitchen      = false;
var scrNook         = false;
var scrDinningRoom  = false;
var scrDadsOffice   = false;
var scrHallwayC     = false;
var scrParentsRoom  = false;
var scrBathroomB    = false;
var scrSideYard     = false;
var scrGarage       = false;
var scrStore        = false;
var scrRegister     = false;
var scrShelves      = false; 
// Object Variables
var keys            = false; // to pick up the keys
var chores          = false; // to do your chores
var money           = false; // to pick up the money
var cookies         = false; // to take the cookies off of the shelf
var payment         = false; // to pay for the cookies
var dancebattle     = false; // to escape from the ninja den guarded by the grue
var userBreathing   = true;  // has the user been eaten by anything yet?

function updateDisplay(msg) {
	var display = document.getElementById("taGame");
	display.value = msg + '\n' + display.value
}
function loadMap() {
	var map = "O" + "\n" + "|" + "\n" + "O-O-O" + "\n" + "|"+ "\n"  + "     O-O-O  O-O-O" + "\n" + "    |   |" + "\n" + "   O-O-O-O" + "\n" + "|" + "\n" + "O" + "\n" + "|" + "\n" + "O" + "\n" + "|" + "\n" + "." + "\n" + "." + "\n" + "." + "\n" + "|" + "\n" + "    O-O" + "\n" + "|" + "\n" + "O" 
	mapdisplay = document.getElementById("taGameMap");
	mapdisplay.value = map;
}
function init() {
	var msg = "You wake up in your bedroom with the hankering for some cookies. And by the way your room is looking a little bit messy, you might want to do your chores sometime or else your parents might get mad."
	updateDisplay(msg);
	button_switch(1);
	loadMap();
}
function gameWinFunction() {
	var msg = "CONGRADULATIONS!!! You won Hoobafarba and in only " + userMoves + " moves!"
}
function btn_do_action_click(command) {
	var command = document.getElementById("taGameInput");
	if (userBreathing === false) {
		var msg = "You're dead, refresh the page and try again.";
		updateDisplay(msg);
	} else {
		switch(command.value) {
			case "N"    : case "n"    : case "North": case "north": walk_north();
																   break;
			case "S"    : case "s"    : case "South": case "south": walk_south();
																   break;
			case "E"    : case "e"    : case "East" : case "east" :walk_east();
																   break;
			case "W"    : case "w"    : case "West" : case "west" :walk_west();
																   break;
			case "score"     : var msg = "Your current score is: " + score + " points";
						       updateDisplay(msg);
						       break;
			case "help"      : case "Help" : case "I need help" : case "i need help" : case "help me" : user_help();
														                                                break;
			case "take keys"  : case "Take keys" : if (keys === true) {
													  var msg = "You already have them";
	       											  updateDisplay(msg);
												   } else if (keys === false); {
															special_commands("keys");
														  }
												  break;
			case "do chores"  : case "clean room" : case "clean up" : case "clean" : if (chores === false) { 
																					    special_commands("chores");
																					    } else if (chores === false) {
																								var msg = "Your room is already clean";
																								updateDisplay(msg);
																								}
							                                        				 break;
			case "take money" : case "take cash" : case "Take money" : case "Take cash" : if (money === false ) {
																							special_commands("money");
																						  } else if (money === true) {
																									var msg = "You already have the money."
																								 }
																						 break;
			case "take cookies" : case "find cookies" : case "grab cookies" : if (cookies === false) { 
																				special_commands("cookies");
																			  } else if (cookies === true) {
																						var msg = "You alrwady have the cookies.";
																						updateDisplay(msg);
																					 }
																			 break;
			case "pay" : case "pay for cookies" : if (payment === false) { 
													special_commands("pay");
												  } else if (payment === true) {
															var msg = "You already paid.";
															updateDisplay(msg);
														 }
												 break;
			case "eat" : case "eat cookies" : case "Om Nom Nom" : special_commands("eat");
																  break;
			case "down" : case "Down" : case "go in cave" : case "Go in cave" : climb_down();
																			    break;
			case "up" : case "Up" : case "Leave cave" : case "leave cave" : climb_up();
																		    break;																  
			case "dance battle"  : case "fight ninjas" : case "Dance" : special_commands("battle");
																	   break;
			case "Enter portal" : case "enter portal" : special_commands("Portal");
													   break;
			case "Read stone" : case "read stone" : case "read writing" : case "Read writing" : special_commands("ReadStone");
																							  break;
			case "play with dog" : special_commands("dog");  break; // These are all
			case "take a leak"   : special_commands("pee");  break; // useless commands
			case "get funky"     : special_commands("funk"); break; // They are for fun
			case "inventory"     : inventory();              break; // Not necessary for game-play
			default : var msg = "Pardon?"
					  updateDisplay(msg);
				      break;
		}
  	}
}
function special_commands(object) {
	switch(object){
		case "keys" 	: if (userlocation === "Kitchen") {
							keys = true;
							msg = "You grab the keys and put them in your pocket";
						  } else if (userlocation !== "Kitchen") {
							keys = false;
							var msg = "What keys?"
							}
						  updateDisplay(msg);
						  break;
		case "chores" 	: if (userlocation === "bedroom") {
							chores = true;
							var msg = "You tidy up your room and kill the grue that took up residence under your bed and you also find a few bucks in the grue's cave and a small passage way... Hmm.."
						  } else {
						      var msg = "There are no chores to be done in here."
						    }
						updateDisplay(msg);
						break;
		case "money"  	: if ((userlocation === "bedroom")&&(chores === true)) {
							money = true;
							var msg = "You take the 5 bucks and stash it in your pocket."
						  } else {
							  var msg = "The streets aren't actually paved with gold..."
						    }
						updateDisplay(msg);
						break;
		case "cookies"	: if ((userlocation === "Shelves") && (money === true)) {
							cookies = true;
							var msg = "You take your favorite cookies from the shelf, you should go pay.";
						  } else if ((userlocation === "Shelves") && (money === false)) {
									cookies = false;
									var msg = "You have the cookies but you don't have any money so you put them back."
								 } else {
									  var msg = "What cookies...?";
								   }
						  updateDisplay(msg);
						  break;
		case "pay"		: if ((userlocation === "Register") && (cookies === true) && (money === true)) {
							payment = true;
							var msg = "You pay for the cookies!"
						  } else if ((cookies === true) && (money === true) && (userlocation !== "Register")) {
								var msg = "You can't pay for that here"
							} else if ((userlocation === "Register") && (money === true) && (cookies === false)) {
									  var msg = "What exactly are you paying for?"
								   }
						updateDisplay(msg)
						break;
		case "eat"		: if (cookies === true) {
							var msg = "Victory cookies... Om Nom NOM NOM NOM NOM !"
							gameWinFunction();
						  } else {
								var msg = "Eat what?"
							}
						updateDisplay(msg)
						break;
		case "dog"		: if (userlocation === "FrontLawn") {
							var msg = "You play fetch with your dog until she is too tired to keep playing."
						  } else {
							  var msg = "You can't find her anywhere :("
						    }
						updateDisplay(msg);
						break;
		case "pee"		: if ((userlocation === "BathroomA") || (userlocation === "BathroomB")) {
							var msg = "How refreshing..."
						  } else {
							  var msg = "... How barbaric..."
							}
						updateDisplay(msg);
						break;
		case "funk"	: var msg = "Play that funky music white boy!"
						updateDisplay(msg);
						break;
		case "battle"   : if (dancebattle === false){
						     dancebattle = true;
						 	 score = score + 5;
						 	 var msg = "You and the ninjas have a furious dance battle. The ninjas do flips, you do splits, the najas do the cha cha, you spin on your head. You have proven to be too much for the ninjas... You may now leave.";
						  } else if (dancebattle === true) {
								    var msg = "They are ninjas just leave while you can."
							     }
						updateDisplay(msg);
						break;
		case "Portal" : userlocation = "Woods";
						room_switch("Woods");
		case "ReadStone" : if (userlocation === "Clearing") {
						   	  var msg = "You read the writing on the stone outloud, Oooba Dooba Hooba Fooba Gooba Nooba here comes a Giant Barking Toad... A sword appears in your hands and the ground begins to rumble.. All of a sudden a gigantic toad appears and starts barking at you. The two of you fight furiously and relentlessly but the toad wins."
						   	  userBreathing = false;
						   	  updateDisplay(msg);
		 				   } else {
		 				   		var msg = "There is no stone here."
		 				     }
	}
}
function score_request() {
	var msg = "Your current score is: " + score + " points";
	updateDisplay(msg);
}
function user_help() {
	var msg = "The valid inputs are: N, n, North, north, or the equiv. for the other directions, take (an object), do (an action), enter, fight, 3score, and help.";
	updateDisplay(msg);
}
function inventory() {
	if (keys === true) {
		var item1 = " The keys to your dad's car" + "\n";
	} else {
			item1 = "";
		}
	if (money === true) {
		var item2 = " Some money"+ "\n";
	} else {
			item2 = "";
		}	
	if (cookies === true) {
		var item3 = " A package of cookies" + "\n";
	} else {
			item3 = "";
		}
	if (payment === true) {
		var item4 = "A receipt";
	} else {
			item4 = "";
		}
	if ((keys === false) && (money===false) && (cookies===false) && (payment===false)){
		var item1 = " nothing"
	}
	var msg = "Inventory: " + item1 + item2 + item3 + item4
	updateDisplay(msg);
}
function walk_north() {
	userMoves = userMoves + 1;
	switch(userlocation) {
		case "HallwayA" 	: userlocation = "bedroom";
							room_switch("bedroom");
							break;
		case "HallwayB" 	: userlocation = "HallwayA";
							room_switch("HallwayA");
							break;
		case "Kitchen"      : userlocation = "HallwayB";
							room_switch("HallwayB");
							break;
		case "SideYard"     : userlocation = "Kitchen";
							room_switch("Kitchen");
							break;
		case "Garage"       : userlocation = "SideYard";
							room_switch("SideYard");
							break;
		case "DinningRoom"  : userlocation = "HallwayC";
							room_switch("HallwayC");
							break;
		case "Store_Regis"  : userlocation = "Garage";
							room_switch("Garage");
							break;
		case "Register"     : userlocation = "Store_Regis";
							room_switch("Store_Regis");
							break;
		case "NinjaDen"     : userlocation = "PortalRoom";
							room_switch("PortalRoom");
							break;
		case "Woods"		: userlocation = "Clearing";
							room_switch("Clearing");
							break;
		default : var msg = "You cannot go that way silly!"
				updateDisplay(msg);
	}
}
function walk_south() {
	userMoves = userMoves + 1;
	switch(userlocation) {
		case "bedroom"      : userlocation = "HallwayA";
							room_switch("HallwayA");
							break;
		case "HallwayA"     : userlocation = "HallwayB";
							room_switch("HallwayB");
							break;
		case "HallwayB"     : userlocation = "Kitchen";
							room_switch("Kitchen");
							break;
		case "Kitchen"      : userlocation = "SideYard";
							room_switch("SideYard");
							break;
		case "SideYard"     : userlocation = "Garage";
							room_switch("Garage");
							break;
		case "Garage"       : if ((keys === true) && (chores === true) && (money === true)) { 
								userlocation = "Store_House";
								room_switch("Store_House");
							  } else {
								  var msg = "You think you forgot something so you don't take the car."
								  updateDisplay(msg);
							    }
							break;
		case "Store_House"  : userlocation = "Register";
							room_switch("Register");
							break;
		case "Store_Regis"  : userlocation = "Register";
							room_switch("Register");
							break;
		case "HallwayC"     : userlocation = "DinningRoom";
							room_switch("DinningRoom");
							break;
		case "PortalRoom"   : userlocation = "NinjaDen";
							room_switch("NinjaDen");
							break;
		default             : var msg = "You cannot go that way silly!"
							updateDisplay(msg);
	}
}
function walk_east() {
	userMoves = userMoves + 1;
	switch(userlocation) {
		case "SisterRoom"       : userlocation = "HallwayA";
								room_switch("HallwayA");
								break;
		case "HallwayA"         : userlocation = "BathroomA";
								room_switch("BathroomA");
								break;
		case "FrontLawn"        : userlocation = "LivingRoom"
								room_switch("LivingRoom");
								break;
		case "LivingRoom"       : userlocation = "HallwayB";
								room_switch("HallwayB");
								break;
		case "Nook"             : userlocation = "Kitchen";
								room_switch("Kitchen");
								break;
		case "Kitchen"          : userlocation = "DinningRoom";
								room_switch("DinningRoom");
								break;
		case "DinningRoom"      : userlocation = "DadsOffice";
								room_switch("DadsOffice");
								break;
		case "HallwayC"         : userlocation = "ParentsRoom";
								room_switch("ParentsRoom");
								break;
		case "ParentsRoom"      : userlocation = "BathroomB"
								room_switch("BathroomB");
								break;
		case "Store_House"      : userlocation = "Shelves"
								room_switch("Shelves");
								break;
		case "Store_Regis"      : userlocation = "Shelves"
								room_switch("Shelves");
								break;
		default                 : var msg = "You cannot go that way silly!"
								updateDisplay(msg);
	}
}
function walk_west() {
	userMoves = userMoves + 1;
	switch(userlocation) {
		case "BathroomA"        : userlocation = "HallwayA";
								room_switch("HallwayA");
								break;
		case "HallwayA"    		: userlocation = "SisterRoom";
								room_switch("SisterRoom");
								break;
		case "LivingRoom"  		: userlocation = "FrontLawn"
								room_switch("FrontLawn");
								break;
		case "HallwayB"    		: userlocation = "LivingRoom";
								room_switch("LivingRoom");
								break;
		case "Kitchen"    		: userlocation = "Nook";
								room_switch("Nook");
								break;
		case "DinningRoom"		: userlocation = "Kitchen";
								room_switch("Kitchen");
								break;
		case "DadsOffice" 		 : userlocation = "DinningRoom";
								room_switch("DinningRoom");
								break;
		case "ParentsRoom" 		: userlocation = "HallwayC";
								room_switch("HallwayC");
								break;
		case "BathroomB"  		: userlocation = "ParentsRoom"
								room_switch("ParentsRoom");
								break;
		case "Shelves"    		: userlocation = "Store_Regis"
								room_switch("Store_Regis");
								break;
		default          		: var msg = "You cannot go that way silly!"
								updateDisplay(msg);
	}
}
function climb_up() {
	if ((userlocation === "NinjaDen") && (dancebattle === true)) {
		userlocation = "bedroom";
		room_switch("bedroom");
	} else if (userlocation !== "NinjaDen") {
		var msg = "There is no where to climb.";
		updateDisplay(msg);
	  } else if ((dancebattle !== true) && (userlocation === "NinjaDen")) {
	  			var msg = "The dancing ninjas wont let you escape, they want to battle!";
	  			updateDisplay(msg);
	 		}	
}
function climb_down() {
	if ((userlocation === "bedroom") && (chores === true)) {
		userlocation = "NinjaDen";
		room_switch("NinjaDen");
	} else {
	  var msg = "You can't tunnel down in here.";
	  updateDisplay(msg);
	  }
}
function enter_portal() {
	if (userlocation === "PortalRoom") {
		userlocation = "Woods";
		room_switch("Woods");
	} else {
		var msg = "There is no portal to enter... Crazy.."
      }
}