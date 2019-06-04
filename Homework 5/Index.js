// JavaScript Document


//  Review  //


//  Why should we use functions at all?


// How to define/declare a function?
let function () => {}


// How to call/use a function?
function ();


// What is return, why and how do we use it?
Gia tri muon nhan ve sau khi thuc hien thuat toan 
Su dung de kiem soat de dang doi voi cac project lon 

// Do we have to use return in every function?
No


// What are function arguments/parameters, why and how we use it?
let function (a, b) => {}
arguments/parameters is a b 


// How to use function from a different file other than our currently working file?
window.onload () => {}

//  Turtle exercise  //


// 1. Write a function that prints out “Hello world” 3 times (note: no arguments, no return)
clear();
let function1 = () => {
console.log(text("Hello world Hello world Hello world :) "));

};
function1();


// 2. Write a function that takes 2 numbers as arguments and print out sum of them (note: has arguments, no return)
clear();
let function2 = (a, b) => {
console.log(a+b);

};
let a = Number(prompt("Input a"));
let b = Number(prompt("Input b"));
function2(a, b);


// 3. Write a Python function that draws a square, named draw_square, takes 2 arguments: length and color, where length is the length of its side and color is the color of its bound (line color)
clear();
let drawSquare = (a, b) => {
color(b);
fd(a);
rt(90);
fd(a);
rt(90);
fd(a);
rt(90);
fd(a);
};
let a = Number(prompt("Input length "));
let b = Number(prompt("Input color "));
drawSquare(a, b);


// 4. Now, another programmer named ‘T.Anh’ will use your code in exercise 1. He writes as follows:

//	for (let i = 0; i  < 30; i ++){
//		drawSquare(i * 5, 'red')
//	lt(17)
//penup()
//    	forward(i * 2)
//    	pendown()
//} 
//
//
//Copy this code into your editor, run the whole program and see what it draws:
//Note: If your code does not run, try not to modify T.Anh’s code, modify your function instead 


// 5. Write a Python function that draws a star, named draw_star, take 1 parameters: length
clear();
let draw_star = (a) => {
rt(18);
fd(a);
rt(144);
fd(a);
rt(144);
fd(a);
rt(144);
fd(a);
rt(144);
fd(a);
};
let a = Number(prompt("Input length "));
draw_star(a);


// Serious exercise //


// 6. Write a function that removes the dollar sign (“$”) in a string, named remove_dollar_sign, takes 1 arguments: s, where s is the input string, returns the new string with no dollar sign in it
// Hint: Google “Javascript string replace remove”
let remove_dollar_sign = (s) => {
		let res = s.replace(/$/g, "");
	return res;
	}
	
let s = prompt("Input: ");
let j = remove_dollar_sign(s);
console.log(j);


// 7. Now, another programmer named Hiep will use your code in exercise 3. He writes as follows:
//string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
//if (string_with_no_dollars == "80% percent of life is to show up"){
//    console.log("Your function is correct")}
//else{
//    console.log("Oops, there's a bug")}
//
//Copy this code into your editor, run the whole program and see what it prints out:
//
//	If it prints out “Your function is correct”, we’re good
//	If it prints out “Oops, there’s a bug”, you might want to come back and check your function


// 8. Write a function that extracts the even items in a given integer list, named get_even_list, takes 1 parameter: l, where l is the given integer list ([1, 4, 5, -1, 10] for example), returns a new list contains only even numbers ([4, 10]
let get_even_list = (a) => {
	let b = [];
	for (let i = 0; i < a.length, i++){
		if (a[i] % 2  === 0){
			b.push[a[i]];
		return b;
		}
	}
}



// 9. Let’s take your function to the test. The tester will write his/her test code as follows:
//even_list = get_even_list([1, 2, 5, 9, -10, 6])
//
//if (even_list == [2, -10, 6]){
//    print("Your function is correct")};
//else{
//    console.log("Ooops, bugs detected")}
//
//Copy this code into your editor, run the whole program and see what it prints out:
//
//If it prints out “Your function is correct”, we’re good
//	If it prints out “Oops, bugs detected”, you might want to come back and check your function
//Note: set is an unordered data structure, meaning set of (1, 2,3) equals set of (3, 1, 2)


// 10. Write a function named is_inside that checks if a point is inside a rectangle, takes 2 parameters, the first is a list with 2 elements respectively represents x and y coordinates of the given point, the second is a list with 4 elements respectively represents x, y coordinates and width height of the given rectangle
let is_inside = (a, b) => {
	let c = b[0] + b[2];
	let d = b[1] + b[3];
	if (a[0] < b[0] || a[1] < b[1]){
		return 1;
	}
	else if (b[0] < a[0] && a[0] < c && b[1] < a[1] && a[1] < d){
		return 2;
	}
	else {
		return 3;
	}
}
let x = [200, 120];
let y = [140, 60, 100, 200];
let z = is_inside(x, y);
if (z == 1){
	console.log("False");
}
else if (z == 2){
	console.log("True");
}
else if (z == 3){
	console.log("False");
}


// 11. (Optional) Write test cases (as we did in exercices 8 and 10) to check if your is_inside function is correct





