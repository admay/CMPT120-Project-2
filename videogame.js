var score           = 0; //initialize the score to zero
var userlocation    = "bedroom" //initialize the user location to the bedroom
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
// My big ass switch case stuff happening here
function room_switch(room) {
  switch(room) {
    case "bedroom"      : var msg = "You are in your bedroom.";
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="hidden";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="hidden";
                          break;
    case "HallwayA" : var msg = "You are at the beginning of the hallway, to the south is the end of the hallway and the kitchen."
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
    case "SisterRoom" : var msg = "You're in your sisters room. You might want to leave soon before she hurts you."
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
    case "HallwayB" : var msg = "You are at the end of the hallway."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="visible";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="visible";
                          if (scrHallwayB === false) {
                            scrHallwayB = true;
                            score = score + 5
                          }
                          break;
    case "LivingRoom"   : var msg = "You are in the living room. at the front of the house."
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
    case "ParentsRoom"  : var msg = "You are in your parents' room."
                          updateDisplay(msg);
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
    case "Garage"       : var msg = "You are in the garage. Your dad's car is there for once."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="visible";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="hidden";
                          if (scrGarage === false) {
                            scrGarage = true;
                            score = score + 5;
                          }
                          break;
    case "Store"        : var msg = "You are at the store to get some cookies!"
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
                          break;
    default             : var msg = "This should never happen."
                          updateDisplay(msg);
                          break;
  }
}    
function walk_north() {
  switch(userlocation) {
    case "HallwayA" : userlocation = "bedroom";
                          room_switch("bedroom");
                          break;
    case "HallwayB" : userlocation = "HallwayA";
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
    case "Store"        : userlocation = "Garage";
                          room_switch("Garage");
                          break;
    case "Register"     : userlocation = "Store";
                          room_switch("Store");
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
  case "Garage"       : userlocation = "Store";
                        room_switch("Store");
                        break;
  case "Store"        : userlocation = "Register";
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
    case "SisterRoom"    : userlocation = "HallwayA";
                          room_switch("HallwayA");
                          break;
    case "HallwayA"      : userlocation = "BathroomA";
                          room_switch("BathroomA");
                          break;
    case "FrontLawn"     : userlocation = "LivingRoom"
                          room_switch("LivingRoom");
                          break;
    case "LivingRoom"    : userlocation = "HallwayB";
                           room_switch("HallwayB");
                           break;
    case "Nook"          : userlocation = "Kitchen";
                           room_switch("Kitchen");
                           break;
    case "Kitchen"       : userlocation = "DinningRoom";
                           room_switch("DinningRoom");
                           break;
    case "DinningRoom"   : userlocation = "DadsOffice";
                           room_switch("DadsOffice");
                           break;
    case "HallwayC"      : userlocation = "ParentsRoom";
                           room_switch("ParentsRoom");
                           break;
    case "ParentsRoom"   : userlocation = "BathroomB"
                           room_switch("BathroomB");
                           break;
    case "Store"         : userlocation = "Shelves"
                           room_switch("Shelves");
                           break;
    default              : var msg = "You cannot go that way silly!"
                           updateDisplay(msg);
  }
}
function walk_west() {
  switch(userlocation) {
    case "BathroomA"   : userlocation = "HallwayA";
                         room_switch("HallwayA");
                         break;
    case "HallwayA"    : userlocation = "SisterRoom";
                         room_switch("SisterRoom");
                         break;
    case "LivingRoom"  : userlocation = "FrontLawn"
                         room_switch("FrontLawn");
                         break;
    case "HallwayB"    : userlocation = "LivingRoom";
                         room_switch("LivingRoom");
                         break;
    case "Kitchen"     : userlocation = "Nook";
                         room_switch("Nook");
                         break;
    case "DinningRoom" : userlocation = "Kitchen";
                         room_switch("Kitchen");
                         break;
    case "DadsOffice"  : userlocation = "DinningRoom";
                         room_switch("DinningRoom");
                         break;
    case "ParentsRoom" : userlocation = "HallwayC";
                         room_switch("HallwayC");
                         break;
    case "BathroomB"   : userlocation = "ParentsRoom"
                         room_switch("ParentsRoom");
                         break;
    case "Shelves"     : userlocation = "Store"
                         room_switch("Store");
                         break;
    default            : var msg = "You cannot go that way silly!"
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
function help_command() {
  var msg = "The valid inputs are: Help, Score, N, n, North, north, or any of the equivilants for the other cardinal direction.";
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
    case "score" : var msg = "Your current score is: " + score + " points";
                   updateDisplay(msg);
                   break;
    case"help" : case "Help" : case "I need help" : help_command();
                                                     break;
    default : var msg = "That command is invalid. Please enter N, n, North, north, or any of the equivalants for the other cardinal directions."
              updateDisplay(msg);
              break;
  }
}
function loadMap() {
  var map = "O" + "\n" + "|" + "\n" + "O-O-O" + "\n" + "|"+ "\n"  + "     O-O-O  O-O-O" + "\n" + "    |   |" + "\n" + "   O-O-O-O" + "\n" + "|" + "\n" + "|" + "\n" + "|" + "\n" + "O" + "\n" + "|" + "\n" + "." + "\n" + "." + "\n" + "." + "\n" + "|" + "\n" + "    O-O" + "\n" + "|" + "\n" + "O" 
  mapdisplay = document.getElementById("taGameMap");
  mapdisplay.value = map;
}
function init() {
  var msg = "You wake up in your bedroom with the hankering for some cookies."
  updateDisplay(msg);
  document.getElementById("btnNorth").style.visibility="hidden";
  document.getElementById("btnSouth").style.visibility="visible";
  document.getElementById("btnEast").style.visibility="hidden";
  document.getElementById("btnWest").style.visibility="hidden";
  loadMap();
}