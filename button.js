/* Button disabler   */
/* Michael Zavarella */

function button_switch(BtnCase) {
	switch(BtnCase) {
		case 1  : // bedroom
				document.getElementById("btnNorth").style.visibility="hidden";
				document.getElementById("btnSouth").style.visibility="visible";
				document.getElementById("btnEast").style.visibility="hidden";
				document.getElementById("btnWest").style.visibility="hidden";
				break; 
		case 2  : // HallwayA, Kitchen
				document.getElementById("btnNorth").style.visibility="visible";
				document.getElementById("btnSouth").style.visibility="visible";
				document.getElementById("btnEast").style.visibility="visible";
				document.getElementById("btnWest").style.visibility="visible";
				break; 
		case 3  : // SisterRoom, FrontLawn, Nook
				document.getElementById("btnNorth").style.visibility="hidden";
				document.getElementById("btnSouth").style.visibility="hidden";
				document.getElementById("btnEast").style.visibility="visible";
				document.getElementById("btnWest").style.visibility="hidden";
				break; 
		case 4  : // BathroomA, DadsOffice, BathroomB, Shelves
				document.getElementById("btnNorth").style.visibility="hidden";
				document.getElementById("btnSouth").style.visibility="hidden";
				document.getElementById("btnEast").style.visibility="hidden";
				document.getElementById("btnWest").style.visibility="visible";
				break;
		case 5  : // HallwayB, Store_House, Store_Regis
				document.getElementById("btnNorth").style.visibility="visible";
				document.getElementById("btnSouth").style.visibility="visible";
				document.getElementById("btnEast").style.visibility="visible";
				document.getElementById("btnWest").style.visibility="hidden";
				break;
		case 6  : // LivingRoom, ParentsRoom
				document.getElementById("btnNorth").style.visibility="hidden";
				document.getElementById("btnSouth").style.visibility="hidden";
				document.getElementById("btnEast").style.visibility="visible";
				document.getElementById("btnWest").style.visibility="visible";
				break;
		case 7  : // DinningRoom
				document.getElementById("btnNorth").style.visibility="visible";
				document.getElementById("btnSouth").style.visibility="hidden";
				document.getElementById("btnEast").style.visibility="visible";
				document.getElementById("btnWest").style.visibility="visible";
				break;
		case 8  : // HallwayC
				document.getElementById("btnNorth").style.visibility="hidden";
				document.getElementById("btnSouth").style.visibility="visible";
				document.getElementById("btnEast").style.visibility="visible";
				document.getElementById("btnWest").style.visibility="hidden";
				break;
		case 9  : // SideYard, Garage (if keys & chores = true), NinjaDen(dancebattle = true)
				document.getElementById("btnNorth").style.visibility="visible";
				document.getElementById("btnSouth").style.visibility="visible";
				document.getElementById("btnEast").style.visibility="hidden";
				document.getElementById("btnWest").style.visibility="hidden";
				break;
		case 10 : // Garage (if keys || chores = false), Register
				document.getElementById("btnNorth").style.visibility="visible";
				document.getElementById("btnSouth").style.visibility="hidden";
				document.getElementById("btnEast").style.visibility="hidden";
				document.getElementById("btnWest").style.visibility="hidden";
				break;
		case 11 : // NinjaDen (dancebattle = false)
				document.getElementById("btnNorth").style.visibility="hidden";
				document.getElementById("btnSouth").style.visibility="hidden";
				document.getElementById("btnEast").style.visibility="hidden";
				document.getElementById("btnWest").style.visibility="hidden";
				break;
		case 12 : // 
				document.getElementById("btnNorth").style.visibility="";
				document.getElementById("btnSouth").style.visibility="";
				document.getElementById("btnEast").style.visibility="";
				document.getElementById("btnWest").style.visibility="";
				break;
		case 13 : // N/A
				document.getElementById("btnNorth").style.visibility="";
				document.getElementById("btnSouth").style.visibility="";
				document.getElementById("btnEast").style.visibility="";
				document.getElementById("btnWest").style.visibility="";
				break;
		case 14 : // N/A
				document.getElementById("btnNorth").style.visibility="";
				document.getElementById("btnSouth").style.visibility="";
				document.getElementById("btnEast").style.visibility="";
				document.getElementById("btnWest").style.visibility="";
				break;
		case 15 : // N/A
				document.getElementById("btnNorth").style.visibility="";
				document.getElementById("btnSouth").style.visibility="";
				document.getElementById("btnEast").style.visibility="";
				document.getElementById("btnWest").style.visibility="";
				break;
		case 16 : // N/A
				document.getElementById("btnNorth").style.visibility="";
				document.getElementById("btnSouth").style.visibility="";
				document.getElementById("btnEast").style.visibility="";
				document.getElementById("btnWest").style.visibility="";
				break;
		default : // N/A
				document.getElementById("btnNorth").style.visibility="";
				document.getElementById("btnSouth").style.visibility="";
				document.getElementById("btnEast").style.visibility="";
				document.getElementById("btnWest").style.visibility="";
				break;
	}
}