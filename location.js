/* location.js */

function room_switch(room) {
	switch(room) {
		case "bedroom"      : if (chores === false) { 
								var msg = "You are in your bedroom, its pretty damn messy.";
							  } else if (chores === true) {
									   var msg = "You are in your much cleaner room, maybe your parents will let you leave now.";
									 } else if ((chores === true) && (money === true)) {
												var msg = "You are in your nice, clean room."
											} else {
												var msg = "This should never happen.";
											  }
							updateDisplay(msg);
							button_switch(1);   
							break;
		case "HallwayA" 	: var msg = "You are at the beginning of the hallway, to the south is the end of the hallway and the kitchen."
							updateDisplay(msg);
							button_switch(2);
							if (scrHallwayA === false) {
								scrHallwayA = true;
								score = score + 5;
							}
							break;
		case "SisterRoom"   : var msg = "You're in your sisters room. You might want to leave soon before she hurts you."
							updateDisplay(msg);
							button_switch(3);
							if (scrSisterRoom === false) {
								scrSisterRoom = true;
								score = score + 5;
							}
							break;
		case "BathroomA"    : var msg = "You are in the bathroom. Your sister's stuff is everywhere."
							updateDisplay(msg);
							button_switch(4);
							if (scrBathroomA === false) {
								scrBathroomA = true;
								score = score + 5;
							}
							break;
		case "HallwayB"     : var msg = "You are at the end of the hallway near the kitchen."
							updateDisplay(msg);
							button_switch(5);
							if (scrHallwayB === false) {
								scrHallwayB = true;
								score = score + 5;
							}
							break;
		case "LivingRoom"   : var msg = "You are in the living room at the front of the house."
							updateDisplay(msg);
							button_switch(6);
							if (scrLivingRoom === false) {
								scrLivingRoom = true;
								score = score + 5;
							}
							break;
		case "FrontLawn"    : var msg = "You are in the front lawn, your dog is running around with a frisbee."
							updateDisplay(msg);
							button_switch(3);
							if (scrFrontLawn === false) {
								scrFrontLawn = true;
								score = score + 5;
							}
							break;
		case "Kitchen"      : var msg = "You are in the kitchen. The car keys are on the counter next to the microwave."
							updateDisplay(msg); 
							button_switch(2);
							if (scrKitchen === false) {
								scrKitchen = true;
								score = score + 5;
							}
							break;
		case "Nook"          : var msg = "You are in the breakfast nook right next to the kitchen."
							updateDisplay(msg); 
							button_switch(3);
							if (scrNook === false) {
								scrNook = true;
								score = score + 5;
							}
							break;
		case "DinningRoom"  : var msg = "You are in the dinning room."
							updateDisplay(msg);
							button_switch(7);
							if (scrDinningRoom === false) {
								scrDinningRoom = true;
								score = score + 5;
							}
							break;
		case "DadsOffice"   : var msg = "You are in your dad's office. Your dad is at his desk working away."
							updateDisplay(msg);;
							if (scrDadsOffice === false) {
								scrDadsOffice = true;
								score = score + 5;
							}
							break;
		case "HallwayC"     : var msg = "You are in the hallway just outside of your parents room."
							updateDisplay(msg);
							button_switch(8);
							if (scrHallwayC === false) {
								scrHallwayC = true;
								score = score + 5;
							}
							break;
		case "ParentsRoom"  : 
							if (chores === false) {
							var msg = "You are in your parents' room. Your mother is hounding you to clean the kitchen."
							updateDisplay(msg);
							button_switch(6);
							} else if (chores === true) {
									  var msg = "You are in your parents' room."
									  updateDisplay(msg);
								   } else {
										var msg = "This should never happen."
									 }
							if (scrParentsRoom === false) {
								scrParentsRoom = true;
								score = score + 5;
							}
							break;
		case "BathroomB"    : var msg = "You are in your parents' bathroom."
							updateDisplay(msg);
							button_switch(4);
							if (scrBathroomB === false) {
								scrBathroomB = true;
								score = score + 5;
							}
							break;
		case "SideYard"     : var msg = "You are in the side yard. The garage is just to the south."
							updateDisplay(msg);
							button_switch(9);
							if (scrSideYard === false) {
								scrSideYard = true;
								score = score + 5;
							}
							break;
		case "Garage"       : var msg = "You are in the garage. Your dad's car is there amongst all of the clutter."
							updateDisplay(msg);
							if ((keys === true) && (chores === true)) {
								button_switch(9);
							} else {
								button_switch(10);
							  }
							if (scrGarage === false) {
								scrGarage = true;
								score = score + 5;
							}
							break;
		case "Store_House"  : var msg = "You are at the store to get some cookies!"
							updateDisplay(msg);
							button_switch(5);
							if (scrStore === false) {
								scrStore = true;
								score = score + 5;
							}
							break;
		case "Store_Regis"   : var msg = "You are back at the front of the store."
							updateDisplay(msg);
							button_switch(5);
							break;
		case "Register"     : var msg = "You approach the register."
							updateDisplay(msg);
							button_switch(10);
							if (scrRegister === false) {
								scrRegister = true;
								score = score + 5;
							}
							break;
		case "Shelves"      : var msg = "You look through the shelves and find some cookies!"
							updateDisplay(msg);
							button_switch(4);
							if (scrShelves === false) {
								scrShelves = true;
								score = score + 5;
							}
							break
		case "NinjaDen"     : var msg = "You crawl under your bed to find a secret den of evil ice ninjas who are also above average dancers."
							updateDisplay(msg);
							if (dancebattle === true) {
								button_switch(9);
							} else {
								button_switch(11);
							}
							break;
		case "PortalRoom"   : var msg = "You walk through a dark passageway and enter a torch lit room with a glowing archway, Yoda requests your assitance and asks you to walk through the portal.";
							updateDisplay(msg);
							button_switch(1);
							break;
		case "Woods"		: var msg = "You are in the woods, ahead is a clearning where you see a stone with some strange writing on it.";
							updateDisplay(msg);
							button_switch(9);
							break;
		case "Clearing"		: var msg = "You walk closer to the stone.";
							updateDisplay(msg);
							button_switch(11);
							break;
		default             : var msg = "There is an error in room_switch();"
							updateDisplay(msg);
							break;
	}
}    