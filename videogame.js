var score           = 0; //initialize the score to zero
var userlocation    = "bedroom" //initialize the user location to the bedroom
var scrbedroom      = false;
var scrNorthHallway = false;
var scrKitchen      = false;
var scrSouthHallway = false;
var scrBathroom     = false;
var scrLivingRoom   = false;
var scrSideYard     = false;
var scrDadsOffice   = false;
var scrParentsRoom  = false;
var scrParBathRoom  = false;
var scrGarage       = false;
// My big ass switch case stuff happening here
function room_switch(room) {
  switch(room) {
    case "bedroom"      : var msg = "You are in your bedroom.";
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="visible";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="visible";
                          document.getElementById("btnWest").style.visibility="visible";
                          break;
    case "NorthHallway" : var msg = "You are in the northern hallway."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="visible";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="hidden";
                          if (scrNorthHallway === false) {
                            scrNorthHallway = true;
                            score = score + 5;
                          }
                          break;
    case "Kitchen"      : var msg = "You are in the kitchen."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="Visible";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="visible"; 
                          if (scrKitchen === false) {
                            scrKitchen = true;
                            score = score + 5;
                          }
                          break;
    case "SouthHallway" : var msg = "You are in the southern hallway."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="visible";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="hidden";
                          if (scrSouthHallway === false) {
                            scrSouthHallway = true;
                            score = score + 5
                          }
                          break;
    case "Bathroom"     : var msg = "You are in the bathroom."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="hidden";
                          document.getElementById("btnSouth").style.visibility="hidden";
                          document.getElementById("btnEast").style.visibility="Visible";
                          document.getElementById("btnWest").style.visibility="hidden";
                          if (scrBathroom === false) {
                            scrBathroom = true;
                            score = score + 5;
                          }
                          break;
    case "LivingRoom"   : var msg = "You are in the living room."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="hidden";
                          document.getElementById("btnSouth").style.visibility="hidden";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="visible";
                          if (scrLivingRoom === false) {
                            scrLivingRoom = true;
                            score = score + 5;
                          }
                          break;
    case "SideYard"     : var msg = "You are in the side yard."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="hidden";
                          document.getElementById("btnSouth").style.visibility="hidden";
                          document.getElementById("btnEast").style.visibility="Visible";
                          document.getElementById("btnWest").style.visibility="visible";
                          if (scrSideYard === false) {
                            scrSideYard = true;
                            score = score + 5;
                          }
                          break;
    case "DadsOffice"   : var msg = "You are in your dad's office."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="hidden";
                          document.getElementById("btnSouth").style.visibility="visible";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="hidden";
                          if (scrDadsOffice === false) {
                            scrDadsOffice = true;
                            score = score + 5;
                          }
                          break;
    case "ParentsRoom"  : var msg = "You are in your parents' room."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="Visible";
                          document.getElementById("btnSouth").style.visibility="hidden";
                          document.getElementById("btnEast").style.visibility="visible";
                          document.getElementById("btnWest").style.visibility="hidden";
                          if (scrParentsRoom === false) {
                            scrParentsRoom = true;
                            score = score + 5;
                          }
                          break;
    case "ParBathRoom"  : var msg = "You are in your parents' bathroom."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="hidden";
                          document.getElementById("btnSouth").style.visibility="hidden";
                          document.getElementById("btnEast").style.visibility="hidden";
                          document.getElementById("btnWest").style.visibility="visible";
                          if (scrParBathRoom === false) {
                            scrParBathRoom = true;
                            score = score + 5;
                          }
                          break;
    case "Garage"       : var msg = "You are in the garage."
                          updateDisplay(msg);
                          document.getElementById("btnNorth").style.visibility="hidden";
                          document.getElementById("btnSouth").style.visibility="hidden";
                          document.getElementById("btnEast").style.visibility="visible";
                          document.getElementById("btnWest").style.visibility="hidden";
                          if (scrGarage === false) {
                            scrGarage = true;
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
    case "bedroom"      : userlocation = "NorthHallway";
                          room_switch("NorthHallway");
                          break;
    case "NorthHallway" : userlocation = "Kitchen";
                          room_switch("Kitchen");
                          break;
    case "Kitchen"      : userlocation = "DadsOffice";
                          room_switch("DadsOffice");
                          break;
    case "ParentsRoom"  : userlocation = "SouthHallway";
                          room_switch("SouthHallway");
                          break;
    case "SouthHallway" : userlocation = "bedroom";
                          room_switch("bedroom");
                          break;
    default : var msg = "You cannot go that way silly!"
               updateDisplay(msg);
  }
}
function walk_south() {
  switch(userlocation) {
  case "bedroom"      : userlocation = "SouthHallway";
                        room_switch("SouthHallway");
                        break;
  case "SouthHallway" : userlocation = "ParentsRoom";
                        room_switch("ParentsRoom");
                        break;
  case "DadsOffice"   : userlocation = "Kitchen";
                        room_switch("Kitchen");
                        break;
  case "Kitchen"      : userlocation = "NorthHallway";
                        room_switch("NorthHallway");
                        break;
  case "NorthHallway" : userlocation = "bedroom";
                        room_switch("bedroom");
                        break;
  default             : var msg = "You cannot go that way silly!"
                        updateDisplay(msg);
  }
}
function walk_east() {
  switch(userlocation) {
    case "bedroom"     : userlocation = "LivingRoom";
                         room_switch("LivingRoom");
                         break;
    case "Bathroom"    : userlocation = "bedroom";
                         room_switch("bedroom");
                         break;
    case "SideYard"    : userlocation = "Kitchen"
                         room_switch("Kitchen");
                         break;
    case "ParentsRoom" : userlocation = "ParBathRoom";
                         room_switch("ParBathRoom");
                         break;
    case "Garage"      : userlocation = "SideYard";
                         room_switch("SideYard");
                         break;
    default            : var msg = "You cannot go that way silly!"
                         updateDisplay(msg);
  }
}
function walk_west() {
  switch(userlocation) {
    case "bedroom"     : userlocation = "Bathroom";
                         room_switch("Bathroom");
                         break;
    case "LivingRoom"  : userlocation = "bedroom";
                         room_switch("bedroom");
                         break;
    case "Kitchen"     : userlocation = "SideYard"
                         room_switch("SideYard");
                         break;
    case "ParBathRoom" : userlocation = "ParentsRoom";
                         room_switch("ParentsRoom");
                         break;
    case "SideYard"    : userlocation = "Garage";
                         room_switch("Garage");
                         break;
    default            : var msg = "You cannot go that way silly!"
                         updateDisplay(msg);
  }
}
function updateDisplay(msg) {
  var ta = document.getElementById("taGame");
  ta.value = msg + '\n' + ta.value
}
function score_request() {
  var msg = "Your current score is: " + score + " points";
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
    default : var msg = "That command is invalid. Please enter N, n, North, north, or any of the equivalants for the other cardinal directions."
              updateDisplay(msg);
              break;
  }
}