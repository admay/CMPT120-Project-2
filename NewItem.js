// NewItem.js


// Prototype for items
function item(item_id, item_name, item_description, item_taken) {
	this.id 		 = item_id;
	this.name 		 = item_name;
	this.description = item_description;
	this.taken		 = item_taken;

	this.toString = function() {
		var ItemRetVal = ""
		ItemRetVal = item.name + item.description;
		return ItemRetVal
	}
}

function CreateListOfItems() {
	var money 		= new item(money,"5 dollars ", "are crumpled up behind your bed.",false);
	var carKeys 	= new item(carKeys,"Your Dad's car keys ","on the kitchen counter.",false)
	var cookies 	= new item(cookies,"A box of cookies ","is on the shelf, it is calling your name!",false)

	ListOfItems[0]  = money;
	ListOfItems[8]  = carKeys;
	ListOfItems[23] = cookies;
}

function TakeItem() {
	switch(userlocation) {
		case 0  : if (money === false) {
			 	      money = true;
			 	      ListOfItems[userlocation].taken = true;
				      Inventory[Inventory.length] = ListOfItems[0].name;
				      var msg = "You put the money in your inventory.";
				      updateText(msg);
				  } else {
				  	  var msg = "You already have that!";
				  	  updateText(msg);
				  } 
				  break;
		case 8  : if (carKeys === false) {
					  carKeys = true;
					  Inventory[Inventory.length] = ListOfItems[8].name;
					  var msg = "You put the keys in your inventory."
					  updateText(msg);
				  } else {
				  	  var msg = "You already have that!";
				  	  updateText(msg);
				  }
				  break;
		case 23 : if (cookies === false) {
					  cookies = true;
					  Inventory[Inventory.length] = ListOfItems[23].name;
					  var msg = "You put the cookies in your inventory."
					  updateText(msg);
				  } else {
				  	  var msg = "You already have that!";
				  	  updateText(msg);
				  }
				  break;
		default : var msg = "There is nothing to take."
				  break;
	}
}

function DisplayInventory() {
	if (Inventory.length > 0) {
	for (item in Inventory) {
		updateText(Inventory[item]);
	}
	updateText("You currently have: ")
	} else {
		var msg = "You are holding nothing."
		updateText(msg);
	}
	
}