// JavaScript Document

//Study//

//		 	- What is nested list?
//					Ex: 1 array ben trong 1 array khac
// 			- Can a list store both integers and strings in it?
//	  				Yes 

//Exercise 1//

inventory = {
    'gold' : 500,
    'pouch' : ['flint', 'twine', 'gemstone'],
    'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
};


//Add a key to inventory called 'pocket'.
inventory.pocket = "test";
console.log(inventory);


//Set the value of 'pocket' to be a list consisting of the strings 'seashell', 'strange berry', and 'lint'.
ArrayPocket = ["seashell", "strange berry", "lint"];
inventory.pocket = ArrayPocket;
console.log(inventory);


//Then .remove('dagger') from the list of items stored under the 'backpack' key.
inventory.backpack.splice(1, 1);
console.log(inventory);


//Add 50 to the number stored under the 'gold' key.
inventory.gold = 50;
console.log(inventory);


//Exercise 2://


//Create a new Object called prices using {} format like the example above.
prices = {};
console.log(prices);


//Put these values in your prices dictionary:
prices.banana = 4;
prices.apple = 2;
prices.orange = 1.5;
prices.pear = 3;
console.log(prices);


//Create another Object called stock using {}:
stock = {};
console.log(stock);


//Put these values in your stock dictionary
stock.banana = 6;
stock.apple = 0;
stock.orange = 32;
stock.pear = 15;
console.log(stock);


//Loop through each key in prices. For each key, print out the key along with its price and stock information. Print the answer in the following format:
//apple
//price: 2
//stock: 0
//
//pear
//price: 3
//stock: 15
console.log(`apple\n\
price: ${prices.apple}\n\
stock: ${stock.apple}`);
console.log(`\n\
pear\n\
price: ${prices.pear}\n\
stock: ${stock.pear}`);


//Let's determine how much money you would make if you sold all of your food.
//Create a variable called total and set it to zero.
//Loop through the prices dictionaries. For each key in prices, multiply the number in prices by the number in stock. Print that value into the terminal and then add it to total.
//Finally, outside your loop, print total.
let table = [{name: "banana", prices: 4, stock: 6},
		{name: "apple", prices: 2, stock: 0},
		{name: "orange", prices: 1.5, stock: 32},
		{name: "pear", prices: 3, stock: 15}
		];
let t = 0;

table.forEach((money, index) => {
	let tien = money.prices*money.stock;
	t += tien; 
})
console.log(`Tong tien ban hoa qua la: ${t}`);


//Exercise 3: Finish CRUD exercise in class, simulate a clothes shop//

//Welcome to our shop, what do you want (C, R, U, D)? R
//Our items: T-Shirt, Sweater
//
//Welcome to our shop, what do you want (C, R, U, D)? C
//Enter new item: Jeans
//Our items: T-Shirt, Sweater, Jeans
//
//Welcome to our shop, what do you want (C, R, U, D)? U
//Update position? 2
//New item? Skirt
//Our items:  T-Shirt, Skirt, Jeans
//
//Welcome to our shop, what do you want (C, R, U, D)? D
//Delete position? 3
//Our items:  T-Shirt, Skirt
let shop = ["T-Shirt", "Sweater"];
let input = prompt("Welcome to our shop, what do you want (C, R, U, D)?");
if (input.toLowerCase() === "r"){
    console.log(`Our items: ${shop}`);
}
else if(input.toLowerCase() === "c"){
	let newitem = prompt("Nhap item moi: ");
	shop.push(newitem);
	console.log(`Our items: ${shop}`);
}
else if (input.toLowerCase() === "u"){
	let update = prompt("Update position?");
	let newitem = prompt("New item?");
	shop.splice(update-1, 1, newitem);
	console.log(`Our items: ${shop}`);
}
else if (input.toLowerCase() === "d"){
	let deleteItem = prompt("Delete position? ");
	shop.splice(delete-1, 1);
	console.log(`Our items: ${shop}`);
}
else {
	console.log("Pls input C, R, U, D");
}



	
//Exercise 4:

//Handle the exceptions (upper, lower case, index out of range) yourself
//
//You are a shepherd who owns a flock of sheep
//
//Each of your sheep of your flock has different size:
	
//4.1 Create a list to represent the sizes of your flock, using list, and print all of your flock size, expected screen output: 

let SizeCuu = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello these are my ship sizes : \n${SizeCuu} `);


//4.2. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Write a program to search for the biggest sheep in your list:

let a = 0;

for (let i = 0; i < SizeCuu.length; i++) {
    if (a <= SizeCuu[i]) {
        a = SizeCuu[i];
    }
}
console.log(`Now my biggest sheep has size ${a} let's shear it`);

//4.3. When your biggest sheer, its size will return to the default size, which is 8. 
//Print out your ship size after shearing the biggest one: 
//Hint: Google “Python List index function”
SizeCuu[SizeCuu.indexOf(a)] = 8;

//4.4 In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Print them out 
//Hint: Ask TA if you need help 
for (let i = 0; i < SizeCuu.length; i++){
	SizeCuu[i] = SizeCuu[i] + 50;
}
console.log(`One month has passed,here are my ship sizes : \n${SizeCuu} `);

//4.5. Let do this for 4 months (or as long as you want):


//4.6 After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from your flock before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected screen output:





