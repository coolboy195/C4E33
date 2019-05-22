// JavaScript Document




//Study//

1.	
	
- Boolean là kiểu dữ liệu có 2 giá trị True hoặc False
- 	+ 	var x = "6";
		var y = "7";
		var z = x === y; 
		console.log(z);
		
	+	Boolean(1<8);
	
	+	Boolean n = true

2. 

name == “Huy be" ==================== print(“Hand some")
		||				  true
		||
		||
		||==================== name == “Huy big" ==================== even_more_handsome = True
				  false							 ||		   true
												 ||
					  							 ||
					  							 ||false
					  							 ||
					  							 ||
					  							
					  webbrowser.open(“https://www.youtube.com/watch?v=04854XqcfCY”)

3. 
									  
Nested conditionals = Điều kiện lồng nhau (Từ 1 điều kiện lồng ghép các nhánh là các điều kiện nhỏ)
									  
if (x < y){
    console.log("x is less than y");
	}
else if (x > y){
        console.log("x is greater than y");
		}
    else
        console.log("x and y must be equal");




//Turtle exercises//

1.

clear()
color("#FF0000")
var i = 1
for(i; i<=4; i++){
rt(-25)
fd(50)
rt(50)
fd(50)
rt(130)
fd(50)
rt(50)
fd(50)
rt(-115)
}

2.

clear()
var l = 3
for(var h = 0; h<4; h++){
k = l + h
if (k%2 === 0){
color("red")
}
  else {
    color("blue")
  }
var i = (1-(2/k))*180
j = 90-i
rt(j)
for(var n = 1; n <= k; n++){
fd(75)
rt(180-i)
}
  home()
}





//Serious exercises//

1.

var h = prompt("Input height (cm) : ");
var w = prompt("Input weight (kg) : ");
var bmi = w / ((h*0.01)^2);
if (bmi<16){
	console.log(`Severely underweight BMI = ${bmi}`);
}

else if (16<bmi && bmi<18.5){
	console.log(`Underweight BMI = ${bmi}`);
}

else if (18.5<bmi && bmi<25){
	console.log(`Normal BMI = ${bmi}`);
}

else if (25<bmi && bmi<30){
	console.log(`Overweight BMI = ${bmi}`);
}

else if (bmi>30){
	console.log(`Obese BMI = ${bmi}`);
}





2.

var x = prompt("Input x: ");
var j = 1;
var z = 1
for (var z = 1; z <= x; z++){
	var j = j*z;
}
console.log(j)
