// NewItem.js


// Prototype for items
function item(item_id, item_name, item_description, item_taken) {
	this.id 		 = item_id;
	this.name 		 = item_name;
	this.description = item_description;
	this.taken		 = item_taken;

	if (this.taken === true) {
		this.description = "";
	} else {
			this.description = item_description;
	}



	this.toString = function() {
		var ItemRetVal = ""
		ItemRetVal = item.name + item.description;
		return ItemRetVal
	}
}

function CreateListOfItems() {
	var money 		= new item(money,"5 dollars", "5 dollars are crumpled up behind your bed.",false);
	var carKeys 	= new item(carKeys,"Your Dad's car keys","Your Dad's car keys on the kitchen counter.",false);
	var watch		= new item(watch,"Your super cool digital watch","Your super cool digital watch is on the table",false);
	var cookies 	= new item(cookies,"A box of cookies","A box of cookies is on the shelf, it is calling your name!",false);

	ListOfItems[0]  = money;
	ListOfItems[8]  = carKeys;
	ListOfItems[10]	= watch;
	ListOfItems[23] = cookies;
}

function TakeItem() {
	switch(userlocation) {
		case 0  : if (ListOfItems[0].taken === false) {
			 	      ListOfItems[0].taken = true;
				      Inventory[Inventory.length] = ListOfItems[0].name;
				      var msg = "You put the money in your inventory.";
				      updateText(msg);
				  } else {
				  	  var msg = "You already have that!";
				  	  updateText(msg);
				  } 
				  break;
		case 8  : if (ListOfItems[8].taken === false) {
					  ListOfItems[8].taken = true;
					  Inventory[Inventory.length] = ListOfItems[8].name;
					  var msg = "You put the keys in your inventory."
					  updateText(msg);
				  } else {
				  	  var msg = "You already have that!";
				  	  updateText(msg);
				  }
				  break;
		case 10 : if (ListOfItems[10].taken === false) {
					  ListOfItems[10].taken = true;
					  Inventory[Inventory.length] = ListOfItems[10].name;
					  var msg = "You put your super cool watch in your inventory";
					  updateText(msg);
				  } else {
				  	var msg = "You already have that!";
				  	updateText(msg);
				  }
				  break;
		case 23 : if (ListOfItems[23].taken === false) {
					  ListOfItems[23].taken = true;
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