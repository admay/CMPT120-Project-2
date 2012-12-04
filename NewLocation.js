// NewLocation.js

// Prototype for locations and toString for locations
function Area(location_id, location_name, location_description, location_item) {
	this.id 		 = location_id;
	this.name 		 = location_name;
	this.description = location_description;
	
	// This bit of code is used to determine whether or not there is an item 
	// in the given location and which item to display
	if (location_item === undefined) {
		this.item = "";
	} else {
		this.item = location_item;
	}
	
	this.toString = function() {
		var retVal = "";
		retVal = this.name + this.description + this.item;
		return retVal;
	}
}

// Creates all of the new areas
function CreateListOfLocations() {
	var bedroom			= new Area(bedroom,"You are in your bedroom, ","it can always use a bit of tidying up. ",ListOfItems[0].description);
	var HallwayA		= new Area(HallwayA,"You are at the north end of a hallway, ","there isn't much to see here.");
	var SistersRoom		= new Area(SistersRoom,"You are in your sisters room, ","there are posters and pictures lining the walls but nothing worth taking.");
	var BathroomA		= new Area(BathroomA,"You are in the bathroom... ","Do you need to use it? I can leave.");
	var HallwayB		= new Area(HallwayB,"You are in the southern part of the hallway, ","the walls could use a new coat of paint.");
	var LivingRoom		= new Area(LivingRoom,"You are in the living room, ","there are couches around the T.V. and the front door stands to the west. ");
	var FrontLawn		= new Area(FrontLawn,"You are out in front of the house, ","your dog Lexie is running around chasing a squirel.");
	var Nook			= new Area(Nook,"You are in the breakfast nook just to the west of the kitchen, ","there is a round table with a bunch of clutter on it and a bench that looks just as bad.");
	var Kitchen			= new Area(Kitchen,"You are in the kitchen, ","your mom is making dinner and the floor could use a little bit of a sweeping. ",ListOfItems[8].description);
	var SideYard		= new Area(SideYard,"You are out in the side yard, ","the driveway is nice and pavementy");
	var DinningRoom		= new Area(DinningRoom,"You are in the dinning room, ","the walls are painted a very soothing shade of green.",ListOfItems[10].description);
	var BackRoom		= new Area(BackRoom,"You are in the back room of the house, ","your dad is on the couch watching television.");
	var Porch			= new Area(Porch,"You are on the back porch, ","the railing is broken from a storm.");
	var BackYard		= new Area(BackYard,"You are in the back yard, ","the grass is nice and soft.");
	var HallwayC		= new Area(HallwayC,"You are in the hallway in the back of the house, ","your parents room is just to the east and their bathroom to the north.");
	var ParentsRoom		= new Area(ParentsRoom,"You are in your parents room, ","why?");
	var BathroomB		= new Area(BathroomB,"You are in your parents bathroom, ","your moms stuff is EVERYWHERE!");
	var Garage			= new Area(Garage,"You are in the garage, ","it could probably use a good cleaning but it can wait. Your dad's car is parked amongst the clutter.");
	var Store			= new Area(Store,"You are in the store, ","there are some shelves to the east with food and such on them and the register to the south.");
	var Register		= new Area(Register,"You are at the register, ","the cashier doesn't look to happy to be at work.");
	var StoreShelves	= new Area(StoreShelves,"You are standing in front of a bunch of shelves, ","they are loaded with all sorts of goodies. ",ListOfItems[23].description);
	
	// Puts all of the areas into a row vector called ListOfLocations intialized in videogame.js
	ListOfLocations[0]  = bedroom;
	ListOfLocations[1]  = HallwayA;
	ListOfLocations[2]  = SistersRoom;
	ListOfLocations[3]  = BathroomA;
	ListOfLocations[4]  = HallwayB;
	ListOfLocations[5]  = LivingRoom;
	ListOfLocations[6]  = FrontLawn;
	ListOfLocations[7]  = Nook;
	ListOfLocations[8]  = Kitchen;
	ListOfLocations[9]  = SideYard;
	ListOfLocations[10] = DinningRoom;
	ListOfLocations[11] = BackRoom;
	ListOfLocations[12] = Porch;
	ListOfLocations[13] = BackYard;
	ListOfLocations[14] = HallwayC;
	ListOfLocations[15] = ParentsRoom;
	ListOfLocations[16] = BathroomB;
	ListOfLocations[17] = Garage;
	ListOfLocations[18] = Store;
	ListOfLocations[19] = Register;
	ListOfLocations[20] = StoreShelves;
}