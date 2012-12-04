// Button disabler for all of the locations

function ButtonSwitchFunction() {
	switch(userlocation) {
		case 2  :
		case 6  :
		case 7  : document.getElementById("btnEast").style.visibility="visible";
				  document.getElementById("btnNorth").style.visibility="hidden";
				  document.getElementById("btnSouth").style.visibility="hidden";
				  document.getElementById("btnWest").style.visibility="hidden";
			      break;
		case 1  : document.getElementById("btnEast").style.visibility="visible";
				  document.getElementById("btnNorth").style.visibility="hidden";
				  document.getElementById("btnSouth").style.visibility="visible";
				  document.getElementById("btnWest").style.visibility="visible";
			      break;
		case 0  :
		case 3  :
		case 23 : document.getElementById("btnEast").style.visibility="hidden";
				  document.getElementById("btnNorth").style.visibility="hidden";
				  document.getElementById("btnSouth").style.visibility="hidden";
				  document.getElementById("btnWest").style.visibility="visible";
			      break;
		case 5  :
		case 10 :
		case 12 : document.getElementById("btnEast").style.visibility="visible";
				  document.getElementById("btnNorth").style.visibility="hidden";
				  document.getElementById("btnSouth").style.visibility="hidden";
				  document.getElementById("btnWest").style.visibility="visible";
			      break;
		case 4  : document.getElementById("btnEast").style.visibility="visible";
			 	  document.getElementById("btnNorth").style.visibility="visible";
				  document.getElementById("btnSouth").style.visibility="visible";
				  document.getElementById("btnWest").style.visibility="visible";
			      break;
		case 9  :
		case 20 : document.getElementById("btnEast").style.visibility="hidden";
				  document.getElementById("btnNorth").style.visibility="visible";
				  document.getElementById("btnSouth").style.visibility="visible";
				  document.getElementById("btnWest").style.visibility="hidden";
			      break;
		case 8  : 
		case 11 : document.getElementById("btnEast").style.visibility="visible";
				  document.getElementById("btnNorth").style.visibility="visible";
				  document.getElementById("btnSouth").style.visibility="hidden";
				  document.getElementById("btnWest").style.visibility="visible";
			      break;
		case 17 :
		case 21 : document.getElementById("btnEast").style.visibility="visible";
				  document.getElementById("btnNorth").style.visibility="visible";
				  document.getElementById("btnSouth").style.visibility="visible";
				  document.getElementById("btnWest").style.visibility="hidden";
			      break;
		
		case 19 : document.getElementById("btnEast").style.visibility="hidden";
				  document.getElementById("btnNorth").style.visibility="visible";
				  document.getElementById("btnSouth").style.visibility="hidden";
				  document.getElementById("btnWest").style.visibility="hidden";
			      break;

		case 22 : document.getElementById("btnEast").style.visibility="hidden";
				  document.getElementById("btnNorth").style.visibility="visible";
				  document.getElementById("btnSouth").style.visibility="hidden";
				  document.getElementById("btnWest").style.visibility="hidden";
			      break;
		case 13 :
		case 18 : document.getElementById("btnEast").style.visibility="hidden";
				  document.getElementById("btnNorth").style.visibility="hidden";
				  document.getElementById("btnSouth").style.visibility="visible";
				  document.getElementById("btnWest").style.visibility="visible";
			      break;
	}
}