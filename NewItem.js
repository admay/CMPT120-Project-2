// NewItem.js


// Prototype for items
function item(item_id, item_name, item_description, item_taken) {
	this.id 		 = item_id;
	this.name 		 = item_name;
	this.taken 		 = item_taken;
	this.description = item_description;

	this.toString = function() {
		var ItemRetVal = "";
		ItemRetVal = item.description;
		return ItemRetVal;
	}
}

// Creates the list of items that can be taken, once they are taken they are removed from their respective locations.
function CreateListOfItems(item_id, item_name, item_description, item_taken) {
	var money 		= new item(money,"5 dollars", "5 dollars are crumpled up behind your bed.",false);
	var carKeys 	= new item(carKeys,"Your Dad's car keys","Your Dad's car keys on the kitchen counter.",false);
	var watch		= new item(watch,"Your super cool digital watch","Your super cool digital watch is on the table",false);
	var cookies 	= new item(cookies,"A box of cookies","A box of cookies is on the shelf, it is calling your name!",false);

	ListOfItems[0]  = money;
	ListOfItems[8]  = carKeys;
	ListOfItems[10]	= watch;
	ListOfItems[20] = cookies;
}

// Take an Item and put it in your inventory...
function TakeItem () {
	if (ListOfLocations[userlocation].item === "" || undefined) {
		var msg = "There is nothing for you to take here"
		updateText(msg);
	} else if (ListOfItems[userlocation].taken === false) {
			   ListOfItems[userlocation].taken = true;
			   ListOfLocations[userlocation].item = "";
			   Inventory[Inventory.length] = ListOfItems[userlocation].name;
			   var msg = "You take the " + ListOfItems[userlocation].name + " and put it in your inventory";
			   updateText(msg);
			}
	unlockStore2();
	lockHome();
}

// Display the inventory in the sidebar
// Major pain in the butt
function DisplayInventory2() {
	var InvDisp = document.getElementById("Inventory");
	InvDisp.value = "";
	InvDisp.value = "Inventory"
	if (Inventory.length > 0) {
		for (i=0; i<Inventory.length; i++) {
			UpdateInventoryText(Inventory[i]);
		} 
	} else {
		var InvMsg = "You aren't holding anything."
		UpdateInventoryText(InvMsg);
	}
}