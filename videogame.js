var score           = 0; //initialize the score to zero
var userlocation    = "bedroom" //initialize the user location to the bedroom
// Score Variables ... fuck lawlz
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
var keys            = false; //to pick up the keys
var chores          = false; //to do your chores
var money           = false; //to pick up the money
var cookies         = false; //to take the cookies off of the shelf
var payment         = false; //to pay for the cookies

// set up dance battle with the evil dance ninjas, fight the pirates, something with harry potter...
// learn how to embed music and play on command

// My big ass switch case stuff happening here
function room_switch(room) {
	switch(room) {
		case "bedroom"      : if (chores === false) { 
								var msg = "You are in your bedroom, its pretty damn messy.";
								updateDisplay(msg);
							  } else if (chores === true) {
									   var msg = "You are in your much cleaner room, maybe your parents will let you leave now.";
									   updateDisplay(msg);
									 } else if ((chores === true) && (money === true)) {
												var msg = "You are in your nice, clean room."
												updateDisplay(msg);
											} else {
												var msg = "This should never happen.";
												updateDisplay(msg);
											  }   
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="visible";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="hidden";
							break;
		case "HallwayA" 	: var msg = "You are at the beginning of the hallway, to the south is the end of the hallway and the kitchen."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="visible";
							document.getElementById("btnSouth").style.visibility="visible";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrHallwayA === false) {
								scrHallwayA = true;
								score = score + 5;
							}
							break;
		case "SisterRoom"   : var msg = "You're in your sisters room. You might want to leave soon before she hurts you."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="hidden";
							if (scrSisterRoom === false) {
								scrSisterRoom = true;
								score = score + 5;
							}
							break;
		case "BathroomA"    : var msg = "You are in the bathroom. Your sister's stuff is everywhere."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrBathroomA === false) {
								scrBathroomA = true;
								score = score + 5;
							}
							break;
		case "HallwayB"     : var msg = "You are at the end of the hallway near the kitchen."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="visible";
							document.getElementById("btnSouth").style.visibility="visible";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrHallwayB === false) {
								scrHallwayB = true;
								score = score + 5;
							}
							break;
		case "LivingRoom"   : var msg = "You are in the living room at the front of the house."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrLivingRoom === false) {
								scrLivingRoom = true;
								score = score + 5;
							}
							break;
		case "FrontLawn"    : var msg = "You are in the front lawn, your dog is running around with a frisbee."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="hidden";
							if (scrFrontLawn === false) {
								scrFrontLawn = true;
								score = score + 5;
							}
							break;
		case "Kitchen"      : var msg = "You are in the kitchen. The car keys are on the counter next to the microwave."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="Visible";
							document.getElementById("btnSouth").style.visibility="visible";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="visible"; 
							if (scrKitchen === false) {
								scrKitchen = true;
								score = score + 5;
							}
							break;
		case "Nook"          : var msg = "You are in the breakfast nook right next to the kitchen."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="Visible";
							document.getElementById("btnWest").style.visibility="hidden"; 
							if (scrNook === false) {
								scrNook = true;
								score = score + 5;
							}
							break;
		case "DinningRoom"  : var msg = "You are in the dinning room."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="Visible";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="visible"; 
							if (scrDinningRoom === false) {
								scrDinningRoom = true;
								score = score + 5;
							}
							break;
		case "DadsOffice"   : var msg = "You are in your dad's office. Your dad is at his desk working away."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrDadsOffice === false) {
								scrDadsOffice = true;
								score = score + 5;
							}
							break;
		case "HallwayC"     : var msg = "You are in the hallway just outside of your parents room."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="visible";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="hidden";
							if (scrHallwayC === false) {
								scrHallwayC = true;
								score = score + 5;
							}
							break;
		case "ParentsRoom"  : 
							if (chores === false) {
							var msg = "You are in your parents' room. Your mother is hounding you to clean the kitchen."
							updateDisplay(msg);
							} else if (chores === true) {
									  var msg = "You are in your parents' room."
									  updateDisplay(msg);
								   } else {
										var msg = "This should never happen."
									 }
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrParentsRoom === false) {
								scrParentsRoom = true;
								score = score + 5;
							}
							break;
		case "BathroomB"    : var msg = "You are in your parents' bathroom."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrBathroomB === false) {
								scrBathroomB = true;
								score = score + 5;
							}
							break;
		case "SideYard"     : var msg = "You are in the side yard. The garage is just to the south."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="Visible";
							document.getElementById("btnSouth").style.visibility="Visible";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="hidden";
							if (scrSideYard === false) {
								scrSideYard = true;
								score = score + 5;
							}
							break;
		case "Garage"       : var msg = "You are in the garage. Your dad's car is there amongst all of the clutter."
							updateDisplay(msg);
							if ((keys === true) && (chores === true)) {
								document.getElementById("btnNorth").style.visibility="visible";
								document.getElementById("btnSouth").style.visibility="visible";
								document.getElementById("btnEast").style.visibility="hidden";
								document.getElementById("btnWest").style.visibility="hidden";
							} else {
						       document.getElementById("btnNorth").style.visibility="visible";
							   document.getElementById("btnSouth").style.visibility="hidden";
							   document.getElementById("btnEast").style.visibility="hidden";
							   document.getElementById("btnWest").style.visibility="hidden";
							  }
							if (scrGarage === false) {
								scrGarage = true;
								score = score + 5;
							}
							break;
		case "Store_House"  : var msg = "You are at the store to get some cookies!"
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="visible";
							document.getElementById("btnSouth").style.visibility="visible";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="hidden";
							if (scrStore === false) {
								scrStore = true;
								score = score + 5;
							}
							break;
		case "Store_Regis"   : var msg = "You are back at the front of the store."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="visible";
							document.getElementById("btnSouth").style.visibility="visible";
							document.getElementById("btnEast").style.visibility="visible";
							document.getElementById("btnWest").style.visibility="hidden";
							break;
		case "Register"     : var msg = "You approach the register."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="visible";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="hidden";
							if (scrRegister === false) {
								scrRegister = true;
								score = score + 5;
							}
							break;
		case "Shelves"      : var msg = "You look through the shelves and find some cookies!"
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="visible";
							if (scrShelves === false) {
								scrShelves = true;
								score = score + 5;
							}
							break
		case "NinjaDen"     : var msg = "You crawl under your bed to find a secret den of evil ice ninjas who are also above average dancers."
							updateDisplay(msg);
							document.getElementById("btnNorth").style.visibility="hidden";
							document.getElementById("btnSouth").style.visibility="hidden";
							document.getElementById("btnEast").style.visibility="hidden";
							document.getElementById("btnWest").style.visibility="hidden";
							break;
		default             : var msg = "There is an error in room_switch();"
							updateDisplay(msg);
							break;
	}
}    
function walk_north() {
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
		default : var msg = "You cannot go that way silly!"
				updateDisplay(msg);
	}
}
function walk_south() {
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
		default             : var msg = "You cannot go that way silly!"
							updateDisplay(msg);
	}
}
function walk_east() {
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
	if (userlocation === "NinjaDen") {
		userlocation = "bedroom";
		room_switch("bedroom");
	} else {
		var msg = "There is no where to climb.";
		updateDisplay(msg);
	  }
}
function climb_down() {
	if (userlocation === "bedroom") {
		userlocation = "NinjaDen";
		room_switch("NinjaDen");
	} else {
	  var msg = "You can't tunnel down in here.";
	  updateDisplay(msg);
	  }
}
function updateDisplay(msg) {
	var display = document.getElementById("taGame");
	display.value = msg + '\n' + display.value
}
function score_request() {
	var msg = "Your current score is: " + score + " points";
	updateDisplay(msg);
}
function user_help() {
	var msg = "The valid inputs are: N, n, North, north, or the equiv. for the other directions, take (an object), do (an action), score, and help.";
	updateDisplay(msg);
}
function btn_do_action_click(command) {
	var command = document.getElementById("taGameInput");
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
		case "do chores"  : case "clean room" : case "clean up" : if (chores === false) { 
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
		case "play with dog" : special_commands("dog");
							 break;
		case "take a leak"   : special_commands("pee");
						     break;
		case "get funky"     : special_commands("dance");
						     break;
		case "inventory"     : inventory();
							 break;
		default : var msg = "Pardon?"
				updateDisplay(msg);
				break;
	}
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
		var item4 = "A reciept";
	} else {
			item4 = "";
		}
	if ((keys === false) && (money===false) && (cookies===false) && (payment===false)){
		var item1 = " nothing"
	}
	var msg = "Inventory: " + item1 + item2 + item3 + item4
	updateDisplay(msg);
}
function loadMap() {
	var map = "O" + "\n" + "|" + "\n" + "O-O-O" + "\n" + "|"+ "\n"  + "     O-O-O  O-O-O" + "\n" + "    |   |" + "\n" + "   O-O-O-O" + "\n" + "|" + "\n" + "O" + "\n" + "|" + "\n" + "O" + "\n" + "|" + "\n" + "." + "\n" + "." + "\n" + "." + "\n" + "|" + "\n" + "    O-O" + "\n" + "|" + "\n" + "O" 
	mapdisplay = document.getElementById("taGameMap");
	mapdisplay.value = map;
}

function init() {
	var msg = "You wake up in your bedroom with the hankering for some cookies. And by the way your room is looking a little bit messy, you might want to do your chores sometime or else your parents might get mad."
	updateDisplay(msg);
	document.getElementById("btnNorth").style.visibility="hidden";
	document.getElementById("btnSouth").style.visibility="visible";
	document.getElementById("btnEast").style.visibility="hidden";
	document.getElementById("btnWest").style.visibility="hidden";
	loadMap();
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
							var msg = "You tidy up your room and kill the grue that took up residence under your bed and you also find a few bucks in the grue's cave."
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
						  } else {
								var msg = "Eat what?"
							}
						updateDisplay(msg)
						break;
		case "dog"		: if (userlocation === "FrontLawn") {
							var msg = "You play frisbee with your dog until she is too tired to keep playing."
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
		case "dance"	: var msg = "Play that funky music white boy!"
						updateDisplay(msg);
						break;
	}
}

