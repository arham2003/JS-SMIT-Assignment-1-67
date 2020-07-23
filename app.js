//ASSIGNMENT NO.1

//chapter1

// // 1
// alert("Welcome to our Website!")
// // 2
// alert("Error! Please enter a valid password.")
// // 3
// alert("Welcome to JS Land..." + "\n" + "Happy Coding!")
// // 4 
//  alert("Welcome To JS Land!");
//  alert("Happy Coding!" + "\n" + "" + "Prevent this page from creating additional dialogs.");
// //5 in console


// //chapter2

// // 1
// var username;

// // 2 
// var myName = "Arham";

// // 3

// var message;
// message = "Hello World";
// alert(message);

// //4
// var StudentName = prompt("Please Enter your Name", "Johne Doe");
// var StudentAge = prompt("Please Enter Your Age" , "15 Years Old");
// var StudentStatement = prompt("Please enter your statement" , "Certified Mobile Application development");

// // var myData = [StudentName,StudentAge,StudentStatement];
// alert(StudentName);
// alert(StudentAge);
// alert(StudentStatement);

// //5
// var pizza = ("PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P");
// alert(pizza);

// //6
// var email;
// email = ("My" + " " + "email" + " " + "address" + " " + "is" + " " + "example@example.com");
// alert(email);

// //7
// var book = ("A smarter way to learn JavaScript");
// alert("I am trying to learn from the book " + book);

// //8
// document.write("Yah! I can write HTML content through Javascript");

// //9
// var symbol = ("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
// alert(symbol);


//Chapter 3

//1
// var Age = ("15 Years Old");
// alert("I am" + " " + Age);

//2


//3
// var birthYear = "2003"
// document.write("My Birth Year is " + birthYear + "<br>")
// document.write("Data type of my declared variable is number");

//4

// var Name = prompt("Enter your Name:" ,"Johne doe");
// var Quantity = prompt("How many product you want to order?" ,"5");
// var Product = prompt("Enter Your Product Title:", "T-shirt(s)");

// document.write(Name + " " +  "Ordered " + Quantity + " " + Product + " " +  "on XYZ Clothing Store");


//Chapter 4

//1

// var variable1 , variable2 , variable3;

// //2

// var #joota;
// var var;
// var userAlert;
// var 2fight;
// var ali hamza;


// var myData;
// var bHaiMera;
// var Live_on;
// var $paisa;
// var khan441;

//3

// document.write("<br>");
// document.write("Variable names can only contain , numbers, $ and _. For example : $my_1stVariable");
// document.write("<br>");
// document.write("Variables must begin with a letter, $ or _. For example : $name,_name or name");
// document.write("<br>");
// document.write("Variable names are case sensitive");
// document.write("<br>");
// document.write("Variable names should not be JS keywords");


//Chapter 5

//1

// var num1 = 5;
// var num2 = 10;
// var sum = num1 + num2;

// document.write("Sum of " + num1 + " " + "and " + num2 + " " + "is " + sum);

//2

// var num1 = 5;
// var num2 = 10;
// var sum = num1 - num2;

// document.write("Sum of " + num1 + " " + "subtracted from " + num2 + " " + "is " + sum);
// document.write("<br>");

// var num1 = 5;
// var num2 = 10;
// var sum = num1 * num2;

// document.write("Sum of " + num1 + " " + "multiplied by " + num2 + " " + "is " + sum);
// document.write("<br>");

// var num1 = 5;
// var num2 = 10;
// var sum = num1 / num2;

// document.write("Sum of " + num1 + " " + "divided by " + num2 + " " + "is " + sum);
// document.write("<br>");

// var num1 = 5;
// var num2 = 10;
// var sum = num1 % num2;

// document.write("Sum of " + num1 + " " + "modulo " + num2 + " " + "is " + sum);
// document.write("<br>");

//3

// var number;
// document.write("Value after variable declaration is: " + number);

// number = 5 ;
// document.write("<br>")
// document.write("Initial value: " + number)

// number = ++number;
// document.write("<br>")
// document.write("Value after increment is: " + number);

// number = number + 7;
// document.write("<br>")
// document.write("Value after addition is: " + number);

// number = --number;
// document.write("<br>")
// document.write("Value after decrement is: " + number);

// number = number % 3;
// document.write("<br>")
// document.write("The remainder is: " + number);

//4

// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;

// document.write("Total Cost to buy 5 Tickets to a movie is " + totalCost + "PKR")

//5

// for(var i = 1; i <=10; i++){
//     document.write("4" + "x" + i + "=" + 4*i + "<br>")
// }

//6
/*
var celciusTemp = prompt("Enter Temperature in celsius: ", "25");
var farenConv = (celciusTemp * 9/5) + 32;
document.write(celciusTemp + "°C is " + farenConv + "°F");
document.write("<br>")
var farenTemp = prompt("Enter Temperature in Farenheit:", "70");
var celsiusConv = (farenTemp - 32) * 5/9;
document.write(farenTemp + "°F is " + celsiusConv + "°C")
*/

//7
/*
var priceItem1 = prompt("Enter the price the item:", "650");
var itemQuan1 = prompt("Enter the quantity of the item 1:", "3");
var priceItem2 = prompt("Enter the price of second item:", "100");
var itemQuan2 = prompt("Enter Quantity of 2nd item:", "7")
var shipping = 100;

var totalCost = (priceItem1 * itemQuan1) + (priceItem2 * itemQuan2) + shipping;

document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + itemQuan1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + itemQuan2 + "<br>");
document.write("Shippping Charges " + shipping + "<br>");
document.write("<br>");
document.write("Total Cost of your order is " + totalCost);
*/

//8
/*
var totalMarks = 980;
var obtainedMarks = prompt("Enter obtained Marks:", "500");
var percent = obtainedMarks / totalMarks * 100;
var percentaccu = percent.toFixed(2);

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentaccu + " %");
*/

//9
/*
var dollars = 10;
var Riyals = 25;
var totalCurr = (dollars * 104.8) + (Riyals * 28);
document.write("Total Currency in PKR: " + totalCurr);
*/

//10

// var number = 5;
// var newNum = ((number+5)*10) / 2;
// console.log(newNum)

//---11

// var currYear = 2020;
// var birthYear = prompt("Enter Your Birth Year:", "2015")
// var age1 = currYear - birthYear;
// var age2 = 2019 - birthYear;

// document.write("Current Year: " + currYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is Either: " + age1 + " or " + age2);

//---12

// var radius = prompt("Enter the radius" , "5");
// var π = 3.142;
// var circCalc = 2*π*radius;
// var areaCalc = π*(radius*radius);

// document.write("Radius of Circle: " + radius + "<br>");
// document.write("The Circumference is: " + circCalc + "<br>");
// document.write("The area is : " + areaCalc);


//---13


// var favSnack = "pizza";
// var currAge = prompt("Enter you current Age:", "15");
// var maxAge = prompt("Enter Your Max age:" ,"60");
// var estAmount = prompt("Enter estimated amount per day","3");
// var eatTotal = (maxAge - currAge) * estAmount

// document.write("favourite snack: " + favSnack + "<br>")
// document.write("Currrent Age: " + currAge + "<br>")
// document.write("Estimated Maximum Age: " + maxAge + "<br>")
// document.write("Amount of snacks per day: " + estAmount + "<br>")
// document.write("You will need " + eatTotal + " " + favSnack + " " + "to last you until the ripe old age of " + maxAge)


//---- chapter 6-9 -----\\

//---1

// var a = 10;
// document.write("Result:" + "<br>" + "The value of a is: " + a + "<br><br>" + "................" + "...................."+ "<br><br>")


// var b = ++a;
// document.write("The value of ++a is: " + b + "<br>" + "Now the value of a is: " + a + "<br><br>");

// var c = a++;
// document.write("The value of a++ is: " + c +"<br>" + "Now the value of a is: " + a + "<br><br>");

// var d = --a;
// document.write("The value of --a is: " + d +"<br>" + "Now the value of a is: " + a + "<br><br>");

// var e = a--;
// document.write("The value of a++ is: " + e +"<br>" + "Now the value of a is: " + a + "<br><br>");


//---2 

// var a = 2;
// var b=1;

// var result = --a - --b + ++b + b--;
//             //   1 - 0  +    1  +  1

// console.log(result)

// //explanation 

// //--a = 1
// // --a - --b = 1
// // --a - --b + ++b = 2
// // --a - --b + ++b + b-- = 3;

//---3

// var name = prompt("Your Name: ", "Alion")
// alert("Welcome! " + name)


//---4

//Missing form PDF!

//---5

// var num = prompt("Enter number for table: " , "6")
// if (num){
//     for (var i = 1; i<=10 ; i++){
//         document.write(num + "x" + i + "=" + num*i + "<br>")
//     }
    
//  }else if (num === ""){
//     for (var i = 1; i<=10 ; i++){
//         document.write(5 + "x" + i + "=" + 5*i + "<br>")
//     }
    
// }

//----6


// var userSubName1 = prompt("Enter Your first subject name: " , "English");
// var userSubName2 = prompt("Enter Your first subject name: " , "Maths");
// var userSubName3 = prompt("Enter Your first subject name: " , "Urdu");
// var totalEachMarks = 100;

// var obtainedMarks1 = prompt("Enter marks obtained for first subject:", 78);
// var obtainedMarks2 = prompt("Enter marks obtained for first subject:", 80);
// var obtainedMarks3 = prompt("Enter marks obtained for first subject:", 90);

// obtainedMarks1 =  Number(obtainedMarks1)
// obtainedMarks2 =  Number(obtainedMarks2)
// obtainedMarks3 =  Number(obtainedMarks3)
// var totalObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentEach1 = obtainedMarks1 + "%"
// var percentEach2 = obtainedMarks2 + "%"
// var percentEach3 = obtainedMarks3 + "%"
// var totalMarks = 300;
// var percent = totalObtained/totalMarks * 100
// percent = Math.round(percent)

// document.write("<table> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> <tr><td>"+ userSubName1
// + "</td><td>" + totalEachMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentEach1 + "</td></tr>" + "<tr><td>" + userSubName2 + "</td><td>" + totalEachMarks + "</td><td>"+ obtainedMarks2 + "</td><td>" + percentEach2 + "</td></tr> <tr><td>"
//  + userSubName3 + "</td><td>" + totalEachMarks + "</td><td>" + obtainedMarks3 +"</td><td>" + percentEach3 + "</td></tr> <tr><td></td> <th>"+ totalEachMarks +"</th><th>" + totalObtained + "</th> <th>" + percent + "%" + "</th></tr>")


//---- Chapter 9-11 ----\\

//---task 1
// var preCity = "Karachi";
// var cityName = prompt("Enter City name:","Karachi")
// if (cityName === preCity){
//     alert("Welcome to the city of lights!")
// }else if (cityName !== preCity){
//     alert("Welcome!")
// }


//-----task 2


// var genderInput = prompt("Enter Your Gender!", "male")
// var lowered = genderInput.toLowerCase();
// if (lowered === "male"){
//     alert("Good morning Sir!")
// }else if (lowered === "female"){
//     alert("Good morining Madam!")
// }

//---- task 3

// var signalColor = prompt("Enter Signal Color:", "red")
// var lowerCase = signalColor.toLowerCase();
// if (lowerCase === "red"){
//     alert("Must Stop!")
// }else if (lowerCase === "yellow"){
//     alert("Ready to move")
// }else if (lowerCase === "green"){
//     alert("Move Now")
// }


//---- task 4


// var fuel = prompt("input remaining fuel in car (in litres):", "0.25");
// var numFuel = Number(fuel);
// if (numFuel === 0.25){
//     alert("Please refill the fuel in your car")
// }

//---- task 5

// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }

// true

// var b = 82;
//  if (b++ === 83){ 
//      alert("given condition for variable b is true");
// }

// false 


// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
// }


// condition 2 is true AND conditon 4 is true


// var materialCost = 20000;
//  var laborCost = 2000;
//   var totalCost = materialCost + laborCost;
//    if (totalCost === laborCost + materialCost){ 
//        alert("The cost equals"); 
// }

// The cost equals

// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }

// true


// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }

// Car is smaller than cat.

//----- task 6---

// var sub1 = Number (prompt("Enter subject 1 marks: ", 20));
// var sub2 = Number (prompt("Enter subject 1 marks: ", 100));
// var sub3 = Number (prompt("Enter subject 1 marks: ", 100));
// var totalMarks = Number (prompt("Enter Total Marks:", 300));

// var totalObtained = sub1+sub2+sub3;
// var percent = totalObtained/totalMarks * 100;
// var percentaccu = Math.round(percent);
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + totalObtained +"<br>")
// document.write("Percentage: " + percentaccu + "%" + "<br>");
// var Grade;
// var Remarks;
// if (percentaccu >= 80){
//     Grade = "A-one";
//     Remarks = "Excellent"
// }else if (percentaccu >= 70){
//     Grade = "A";
//     Remarks = "Good"
// }else if (percentaccu >= 60){
//     Grade = "B";
//     Remarks = "You need to improve"
// }else if (percentaccu < 60){
//     Grade = "Fail";
//     Remarks = "Sorry"
// }
// document.write("Remarks: " + Remarks);


//---- task 7 

// var secNum = 8;
// var userGuess = Number (prompt("Guess the secret number!" , "8"));

// if (userGuess === secNum){
//     alert("Bingo!")
// }else if (secNum === userGuess + 1){
//     alert("Close enough to the correct answer.")
// }


// --- task 8

// var num = Number (prompt("Enter number" , "9"));
// var divisible = num % 3;
// if (divisible === 0){
//     alert("The Number is Divisible by 3.")
// }


//---- task 9
// var number = Number(prompt("Enter The number:", "2"))
// var divided = number % 2;
// if (divided === 0){
//     alert("It's an even number")
// }
// else {
//     alert("It's an odd number")
// }


//--- task 10

// var temp = prompt("Enter temperature:", "25")

// if (temp > 40){
//     alert("It's too hot outside")
// }else if (temp > 30){
//     alert("The Weather today is Normal.")
// }else if (temp > 20){
//     alert("Today’s Weather is cool.")
// }else if (temp < 10){
//      alert("OMG! Today’s weather is so Cool.")
// }


//--- task 11

// var num1 = Number(prompt("Enter first Number", "2"));
// var operator = prompt("Enter The operator", "+");
// var num2 = Number(prompt("Enter second number:", "2"));
// var operation;

// if (operator === "+"){
//     operation = num1 + num2;
//     alert(operation);
// }else if (operator === "-"){
//     operation = num1 - num2;
//     alert(operation);
// }else if (operator === "*"){
//     operation = num1 * num2;
//     alert(operation);
// }else if (operator === "/"){
//     operation = num1 / num2;
//     alert(operation);
// }else if (operator === "%"){
//     operation = num1 % num2;
//     alert(operation);
// }



//----- Chapter 12 - 13  ----\\\

//--- task 2

// var int1 = Number(prompt("Enter integer 1" , "2"));
// var int2 = Number(prompt("Enter integer 2" , "4"));

// if  (int1 > int2){
//     alert("Integer 1 is larger!")
// }else if (int2 > int1){
//     alert("Integer 2 is larger!")
// }else if (int1 == int2){
//     alert("Both are equal!")
// }


// ---- task 3

// var num = Number(prompt("Enter Number" , "1"))
// if (num > 0){
//     alert("This is positive!")
// }else if (num < 0){
//     alert("This is Negative!")
// }else if (num == 0){
//     alert("This is zero.")
// }

//---- task 4

// var userInput = prompt("Enter a Character" , "a")
// var vowels = ["a","e","i","o","u"]
// var userLowered = userInput.toLowerCase();

// for (var  i = 0 ; i< vowels.length; i++){
//     if (userLowered == vowels[i]){
//         alert("This is a vowel!")
//         break;
//     }
// }


//---- task 5

// var pass = "arham";
// var enterPass = prompt("Enter Your password:");

// if (enterPass == ""){
//     alert("Please enter password!");
//     break;
// }else if (enterPass === pass){
//     alert("Correct! The password you entered matches the original password");
//     break;
// }else if (enterPass !== pass){
//     alert("Incorrect Password!");
//     break;
// }


//----- task 6 

// var greeting;
//  var hour = 13;
//   if (hour < 18) { 
//       greeting = "Good day"; 
//   }
//  else {
//           greeting = "Good evening";
// }



//----- task 7 


// var time = Number (prompt("Enter time in 24 hours clock:", "1900"));

// if (time >= 0000 && time < 1200){
//         alert ("Good Morning!")
// }else if (time >= 1200 && time < 1700){
//     alert("Good afternoon!")
// }else if (time >= 1700 && time < 2100) {
//           alert("Good Evening!")
// }else if (time >= 2100 && time <= 2359){
//     alert("Good night!")
// }



//----  Chapter 14 -16 ----\\\\

//---- task 1

// var array = [];

//---- task 2

// {};

//-- task 3

// var arr = ["hi"];

//-- task 4
 
// var arr = [1];

//--- task 5

// var arr = [false];

//--- task 6

// var arr = [1 , "hello", a =1 , "hi"];

//--- task 7

// var pakQualifications = ["SSC","HSC","BCS","BCOM","MS","M. Phil.","PhD"]

// document.write("Qualifications:" + "<br>");
// for (var i = 1; i<pakQualifications.length; i++){
//     document.write(i + ") " + pakQualifications[i] + "<br>")
// }

//---- task 8

// var StudentNames = ["arham", "ali", "abbas"];
// var totalEach = 500;
// var scoreEach = ["320","230","480"];
// for (var i = 0; i <StudentNames.length; i++){
//     var percentEach = scoreEach[i] / 500 * 100;
//     document.write("Score of " + StudentNames[i] + " is " + scoreEach[i] + ". Percentage: " + percentEach + "%<br>")

// }


//--- task 9


// var colorNames = ["red","yellow", "green"];
// document.write("Colors:" + "<br>" + colorNames);

// var required = prompt("Enter the color you want to add in the begining:" , "purple");
// colorNames.splice(0,0, required);
// document.write("<br>" + colorNames +"(Added in the beginning)");

// var required2 = prompt("Enter the color you want to add in the end:", "orange");
// colorNames.splice(4,0, required2);
// document.write("<br>" + colorNames + "(Added in the end)");

// colorNames.splice(0,0, "black", "blue");
// document.write("<br>" + colorNames);


// colorNames.splice(0,1);
// document.write("<br>" + colorNames);

// colorNames.pop();
// document.write("<br>" + colorNames);

// var colorIndex = prompt("At which index you want to add the color: " ,"3");
// var colorName = prompt("Color Name at your desired index:","magenta");
// colorNames.splice(colorIndex, 0, colorName);
// document.write("<br>" + colorNames + "(Desired colour added)");

// var deleteColor = prompt("At which index you want to delete te color:", "2")
// var deleteNum = prompt("How Many you want to delete?", "2");
// colorNames.splice(deleteColor, deleteNum);
// document.write("<br>" + colorNames + "(Desired numbers deleted)");



//----- task 10

// var studentScores = [320 , 230 , 480 , 120];
// document.write("Score of Students: " + studentScores + "<br>");
// studentScores.sort();
// document.write("Ordered Score of Students: " + studentScores + "<br>");


//----- task 11

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities List:" + "<br>" + cities + "<br>");
// var selectedCities = cities.slice(2 , 4);
// document.write("Selected Cities List:" + "<br>" + selectedCities);


//----- task 12

// var arr = ["This", "is", "my", "cat"];
// document.write("Array: " + arr + "<br><br>");
// var string = arr.join(" ");
// document.write("String: " + "<br>" + string); 


//----- task 15

// var manufacturers = ["Apple" , "Samsung" , "Motorola" ,"Nokia" , "Sony" , "Haier"];
// document.write("<label for='company'>Choose a company:</label><select name='cars' id='cars'><option value='volvo'>"+ manufacturers[0] + "</option><option value='saab'>"+ manufacturers[1] + "</option><option value='mercedes'>"+ manufacturers[2] + "</option><option value='audi'>"+ manufacturers[3] + "</option><option value='audi'>"+ manufacturers[4] + "</option><option value='audi'>"+ manufacturers[5] + "</option></select>")


/// ------- Chapter 17 - 20 ----\\\\

//----- task 1

// var Arr=[[1,2],[3,4],[5,6]];

//----- task 2

// var array = [[0 ,1, 2 ,3],[1 ,0 ,1 ,2], [2,1,0,1]];

// document.write(array[0] + "<br>")
// document.write(array[1] + "<br>")
// document.write(array[2] + "<br>")

//------ task 3

// for (var i = 1 ; i<11 ; i++){
//     document.write(i + "<br>")
// }

//------ task 4

// var numInput = Number (prompt("Enter a number to show its multiplication table", "2"));
// var lengthInput = Number(prompt("Enter length multiplication table", "10"));

// for (var i = 1 ; i<= lengthInput; i++){
//     document.write(numInput + "x" + i + "=" + numInput * i + "<br>");
// }


//----- task 5

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for (var i=0 ; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
    
// }

// for (var i=0 ; i<fruits.length; i++){
//     document.write("<br>" + "Element at index " + i + " is " + fruits[i]);
// }


//------ task 6

// document.write("Counting: " + "<br>");
// for (var i=1 ; i<16 ; i++){
//     document.write(i +",");
// }

// document.write("<br>" + "Reverse Counting: " + "<br>");

// for (var d = 11 - 1  ; d >= 0 ; d--){
//     document.write(d + ",");
// }


// document.write("<br>" + "Even: " + "<br>");

// for (var a = 0  ; a <= 20; a = a + 2){
//     document.write(a + ",");
// }

// document.write("<br>" + "Odd: " + "<br>");

// for (var a = 1  ; a <= 19; a = a + 2){
//     document.write(a + ",");
// }

// document.write("<br>" + "Series: " + "<br>");

// for (var a = 2  ; a <= 20; a = a + 2){
//     document.write(a + "k,");
// }


//------- task 7

// var A = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("What do you want to order?","cookie")
// if (A.indexOf(search) !== -1){
//     alert("Yes Available")
// }else{
//     alert("Not Available")
// }


//------ task 8

// var A = [24,53,78,91,12]
// document.write("Array items: " + A + "<br>");
// document.write("The Largest number is " + Math.max(...A));


//----- task 9


// var A = [24,53,78,91,12];
// document.write("Array items: " + A + "<br>");
// document.write("The smallest number is " + Math.min(...A));

//------ task 10 

// for (var i = 5; i <= 100; i= i+5){
//     document.write(i +", ")
// }


//------- Chapter 21-25------\\\\\


//---task1--\\

// var firstName = prompt("Enter First Name: ", "Arham");
// var lastName = prompt("Enter Last Name", "khan");
// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName + "!");

//---task2--\\

// var favPhone = prompt("What Is Your Favourite Phone?", "Galaxy S20 Plus");
// var length = favPhone.length;
// document.write("My Favourite Phone is: " + favPhone);
// document.write("<br>");
// document.write("Length of String: " + length);

//---task3--\\

// var country = "Pakistani";
// var Char = country.indexOf('n');
// document.write("String: " + country + "<br>");
// document.write("Index of 'n' : " + Char);

//---task4--\\
// var word = "Hello World"
// var char = word.lastIndexOf('l')
// document.write("String: " + word + "<br>")
// document.write("Last index of 'l': " + char)

//---task5--\\

// var country = "Pakistani"
// var char = country.slice(3, 4)
// document.write("String: " + country + "<br>")
// document.write("Character at index 3: " + char)

//---task 6--\\

// var firstName = prompt("Enter First Name: ", "Arham");
// var lastName = prompt("Enter Last Name", "khan");
// var fullName = firstName.concat(lastName)
// alert("Welcome! " + fullName)

//---task7--\\

// var city = "Hyderabad";
// var firstWord = city.replace("Hyder" , "Islam")

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + firstWord)

//---task8--\\

// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var After = message.replace(/and/g, "&")
// document.write(After)

//----task 9---\\

// var integerString = "472"
// var num = Number(integerString)
// document.write("Value: " + integerString + "<br>" + "Type: string" + "<br>")
// document.write("Value: " + num + "<br>" + "Type: number")

//---task10--\\

// var userInput = prompt("Enter your response: ", "peanut")
// var upperCase = userInput.toUpperCase()

// document.write("User input: " + userInput + "<br>")
// document.write("Upper case: " + upperCase)

//---task 11 --\\

// var userInput = prompt("Enter your response: ", "peanut")
// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
// //  document.write(sentence.join(" "));
//  return sentence;
//  }
//  var Titlecase = titleCase(userInput);

//  document.write("User input: " + userInput + "<br>")
//  document.write("Title case: " + Titlecase)

//----task 12---\\

// var num = 35.36;
// var newNum = num.toString();
// var n = parseInt(num.toString().replace('.', ''));
// document.write("Number: " + num + "<br>");
// document.write("Result: " + n);

//---task 13 ----\\

// var userInput = prompt("Enter username")

// for (var i = 0; i<userInput.length; i++){
//     if(userInput[i].charCodeAt() === 64){
//         alert("Username Invalid")
//     }else if(userInput[i].charCodeAt() === 33){
//         alert("Username invalid")
//     }else if (userInput[i].charCodeAt() === 44){
//         alert("Username invalid")
//     }else if (userInput[i].charCodeAt() === 46){
//         alert("Username invalid")
//     }
// }

//---task 14--\\


// var A = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("What do you want to order?","cookie")
// var searchLower = search.toLowerCase();
// if (A.indexOf(searchLower) !== -1){
//     alert("Yes Available")
// }else{
//     alert("Not Available")
// }

//---- task 15----\\\\


// var input = prompt("Enter password");
// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var minNumberofChars = 6;

// if(input.length < minNumberofChars){
//     alert("Password Must be 6 characters long")
// }

// for (var i = 0; i < nums.length; i++) {
//   if (input.charAt(0) == nums[i]) {
//       alert("Password should not start with number");
//       break;
//     }
// }


////------ task 16 ---\\\\

// var university = "University of Karachi";

// var str = university.split("").join("<br/>")

// document.write(str);


//---- task 17--

// userInput = prompt("Enter","Pakistan");
// document.write("User input: " + userInput + "<br>");
// var last = userInput.slice(userInput.length-1);
// document.write("Last character of input: " + last);

//------ task 18

// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// document.write(count);


///======= Chapter 26 - 30 ======\\\\

///---- task #1

// var posInt = prompt("Enter positve integer:","2.55");
// document.write("number: " + posInt + "<br>");
// document.write("round off value: " + Math.round(posInt) + "<br>");
// document.write("floor value: " + Math.floor(posInt) + "<br>");
// document.write("ceil value: " + Math.ceil(posInt));


///--- task #2


// var negInt = Number (prompt("Enter Negative value:", -2.673));

// document.write("number: " + negInt + "<br>");
// document.write("round off value: " + Math.round(negInt) + "<br>")
// document.write("floor value: " + Math.floor(negInt) + "<br>");
// document.write("ceil value: " + Math.ceil(negInt) + "<br>");


/// --- task #3


// var num = -5;

// document.write("The absolute value of " + num +" is " + Math.abs(num));


///--- task#4

// var diceValue = Math.random()*7;
// var perfValue = Math.floor(diceValue);

// document.write("random dice value: " + perfValue);


/// ------ task #5

// var toss = Math.random()*2;
// var coinValue = Math.floor(toss);

// if(coinValue == 0){
//      document.write(coinValue + "<br>");
//      document.write("random coin value: " + "Heads")
// }else if(coinValue == 1){
//     document.write(coinValue + "<br>");
//     document.write("random coin value: " + "Tails")
// }



///------ task #6


// var ran = Math.random()*101;
// var random = Math.floor(ran);

// document.write("random number between 1 and 100: " + random);


//----- task # 7

// var userWeight = prompt("Enter your weight in kilograms" );

//     document.write("The weight of user is " + userWeight);


//----- task# 8


// var secretNum = Math.random()*11;
// var secretaccu = Math.floor(secretNum);
// var askUser = prompt("Enter a number between 1 and 10");

// if (askUser == secretaccu){
//     alert("Congratulations!")
// }
// else {
//     alert("Try Again!")
// }


///========= Chapter 31-34 =======\\\\

/// ---- task#1

// var rightnow = new Date;
// document.write(rightnow);

/// ------ task#2

// var monthNames = ["January" , "February" , "March" , "April" ,"May","June","July","August","September","October","November","December"];
// var now = new Date;
// var theMonth = now.getMonth();
// var nameOfMonth = monthNames[theMonth];

// document.write("Current Month: " + nameOfMonth);


/// ------- task#3

// var d = new Date();
// var dayName = d.toString().split(' ')[0];

// document.write("Today is " + dayName);



///----- task#4

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date();
// var dayName = days[d.getDay()];

// if (dayName = days[0] || days[6]){
//     alert("It's Fun day")
// }

///------- task# 5

// var d = new Date();
// var days = d.getDate();


// if (days < 16){
//     alert("First fifteen days of the month");
// }
// else {
//     alert("Last days of the month");
// }

////------ task#6

// var now = new Date;
// var milliSince = now.getTime();
// var minSince = milliSince / (1000 *60*60);

// document.write("Current Date: " + now + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSince + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minSince);

////------- task#7

// var now = new Date;
// var hours = now.getHours();
// if (hours < 12){
//     alert("Its AM")
// }
// else {
//     alert("Its PM")
// }

///------task#8

// var laterDate = new Date("Dec 31 2020");

// document.write("Later Date: " + laterDate);


///--------task #9

// var date = new Date("Jun 18 2015");
// var milliSince1 = date.getTime();
// var dateNow = new Date;
// var milliSince2 = dateNow.getTime();

// var milliPassed = milliSince2 - milliSince1;
// var days = milliPassed /(1000*60*60*24);
// var daysaccu = Math.floor(days);
// document.write(daysaccu + " days have passed since 1st Ramadan, 2015");


///-------- task#10

// var refDate = new Date("Sat Dec 05 2015 22:50:16");
// var milliRef = refDate.getTime();
// var beginDate = new Date("Jan 01 2015");
// var milliBegin = beginDate.getTime();

// var milliPassed = milliRef - milliBegin;
// var secondsPassed = milliPassed/(1000*60);
// var secondsaccu = Math.ceil(secondsPassed);
// document.write("On rederence Date: " + refDate + "<br>");
// document.write(secondsaccu + " seconds had passed since beginning of 2015");


///------ task#11

// var currentDate = new Date;
// currentDate.setHours( currentDate.getHours() + 1 );
// document.write("Current date: " + currentDate + "<br>");
// currentDate.setHours( currentDate.getHours() - 1 );
// document.write("1 hour ago, it was " + currentDate );


////-------- task#12


// var currentDate = new Date;
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setFullYear(1915);
// document.write("100 years ago, it was " + currentDate);


///-------- task#13

// var userAge = Number (prompt("Enter your age", 20));
// var now = new Date;
// var currYear = now.getFullYear();
// var birthYear = currYear - userAge;

// document.write("Your age is " + userAge + "<br>");
// document.write("Your birth year is " + birthYear);


//------- task#14

// var monthNames = ["January" , "February" , "March" , "April" ,"May","June","July","August","September","October","November","December"];
// var custName = "Ali";
// var Now = new Date;
// var currMonth = Now.getMonth();
// var currMonthName = monthNames[currMonth];
// var unitNum = Number (prompt("Enter Your no. of units consumed"));
// var unitCharges = 16.5;
// var netAmount = (unitNum * unitCharges);
// var lateCharges = 350;
// var grossAmount = (netAmount + lateCharges).toFixed(2) ;

// document.write("Customer Name: " + custName + "<br>");
// document.write("Month: " + currMonthName + "<br>");
// document.write("Number of units: " + unitNum + "<br>");
// document.write("Charge per unit: " + unitCharges + "<br><br>");
// document.write("Net Amount Payable (within due date): " + netAmount + "<br>");
// document.write("Late payment charges: " + lateCharges + "<br>");
// document.write("Gross Amount Payable (after due date): " + grossAmount);


///========= Chapter 35-38 =======\\\\


//// ---- task# 1
// function foo(){
//     var now = new Date;
//     document.write(now);
// }
// foo();

//// ---- task# 2

// function foo(){
//     var userFirstName = prompt("First Name: " , "Arham");
//     var userLastName = prompt("First Name: " , "khan");
//     alert ("Welcome! " + userFirstName + " " + userLastName);
// }
// foo();

//// ---- task# 3

// function sum(){
//     var  num1 = Number (prompt("Enter num 1"));
//     var num2 = Number (prompt("Enter num 2"));
//     return num1 + num2;
// }
// document.write(sum());


//// ----- task# 4


// function sum(){
//     var  num1 = Number (prompt("Enter num 1"));
//     var operator = prompt("Enter Operator")
//     var num2 = Number (prompt("Enter num 2"));
//     if (operator == "+"){
//         return num1 + num2;
//     }
// }
// document.write(sum());


//// ---- task# 5

// function squareNum(num1){
//     var num2 = Math.pow(num1 , 2)
//     document.write(num2)
// }

// squareNum(6);


///- ----- task#6

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 5;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);



//// ------ task#7

// function sum() {
//     var FirstNumber = prompt("Enter first num");
//     var SecondNumber = prompt("Enter second num");

//     var result = "";

//     for (var i = FirstNumber; i <= SecondNumber; i++) {
//       result += i;  
//     }

//     document.write(result);
// }
// sum();

/// ------ task#8


// function calculateHypotenus() {
//     function calculateSquare(){
//         var base = Number (prompt("Enter base"));
//         var per = Number(prompt("Enter perpendicular"))
//     return Math.sqrt(base*base  + per*per) ;
//  }
//  document.write("Hypotenus is : " + calculateSquare())
// }
// calculateHypotenus();

/// ------ task#9

// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt ("Enter a whole number for the width of your rectangle.");

// function area (length, width) {
// return length * width;
// }

// console.log("The area of your rectangle is " + area(length, width));

// function area (length = prompt("Enter a whole number for the length of your rectangle."), width = prompt ("Enter a whole number for the width of your rectangle.")) {
//     return length * width;
// }
// console.log("The area of your rectangle is " + area(length, width));

/// ------ task#10


// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
    
// }
// alert(palindrome("madam"));


/// ------ task#11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

/// ------ task#12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


/// ------ task#13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

/// ------ task#14

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumfrence is " + y + "." + "<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);
  


///========= Chapter 38-42 =======\\\\


/// ------ task#1

// function power(a , b){
//     return Math.pow(a, b);
// }
// document.write(power(5 , 6));


/// ------ task#2

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// document.write(leapyear(2016)+ "<br>");
// document.write(leapyear(2000)+ "<br>");
// document.write(leapyear(1700)+ "<br>");
// document.write(leapyear(1800)+ "<br>");
// document.write(leapyear(100));

/// ------ task#3
// function sides(){
//     var side1 = Number(prompt("Enter side 1")); 
//     var side2 = Number(prompt("Enter side 2")); 
//     var side3 = Number(prompt("Enter side 3")); 
//     var s = (side1 + side2 + side3)/2;


//         var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

//     document.write(area);
// }
// document.write(sides()); difficult in it


///----- task #4

// function mainFunction(){
//     var obtainedMarks1 =Number (prompt('enter marks you received:', 30));
//     var obtainedMarks2 =Number (prompt('enter marks you received:', 30));
//     var obtainedMarks3 =Number (prompt('enter marks you received:', 30));
//     var totalMarks = 200;
//     function average(){
//         var avg = obtainedMarks1+obtainedMarks2+obtainedMarks3/3
//         return avg;
//     }
//     function percent(){
//         var percent = obtainedMarks1+obtainedMarks2+obtainedMarks3 / totalMarks *100;
//         return percent;
//     }
//     document.write("Average: " + average() + "<br>");
//     document.write("Percentage: " + percent() + "%")
// }

// document.write(mainFunction())

///----- task#5

// function indexOf(para, char){
//     var splitPara = para.split("");
//     document.write * (splitPara)

//     for (var i = 0; i < splitPara.length; i++){
//         if (splitPara[i] === char) {
//             document.write(" <br>index of " + splitPara[i] + " is " + i)
//         }
//     }
// }

// para = prompt("Enter a sentence: ");
// char = prompt("Enter a character: ")
// indexOf(para, char);

//------ task#6

// function vowel(){
//     var string = "heelloo world";

//     string = string.replace( /[aeiou]/g, '' );
    
//     document.write(string);
// }
// vowel();

//------ task#7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());

//------ task#8

// function distanceMeter(dist){
//     var convert = dist *1000;
//     document.write("Distance in meters: "  + convert + "m");

// }
// dist = prompt("Enter Distance in km between two cities:");
// distanceMeter(dist);

// function distanceFeet(dist){
//     var convert = dist *3281;
//     document.write("Distance in feets: "  + convert + "ft.");

// }
// dist = prompt("Enter Distance in km between two cities:");
// distanceFeet(dist);


// function distanceInch(dist){
//     var convert = dist * 39370 ;
//     document.write("Distance in inches: "  + convert + "in.");

// }
// dist = prompt("Enter Distance in km between two cities:");
// distanceInch(dist);

// function distanceCenti(dist){
//     var convert = dist * 100000 ;
//     document.write("Distance in Centimeters: "  + convert + "cm");

// }
// dist = prompt("Enter Distance in km between two cities:");
// distanceCenti(dist);


//// ------ task#9













//// ======== Chapter 43- 48 =======\\\\

/// --- Task# 1

/// done on html!

////------- task#2

/// done on html!


///// ----- task #4

//done on html


//// ----- task# 5

//done on html


//// ======== Chapter 49- 52 =======\\\\

//// ----- task# 1

// function testVariable() {
//     var strText = document.getElementById("textone").value;          
//     var strText1 = document.getElementById("textTWO").value;
//     var result = strText + ' ' + strText1;
//     document.getElementById('spanResult').textContent = result;
     
// }
//rest on html!


//// ----- task# 2

// function expandLoris() {
//      var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//      document.getElementById("slowLoris").innerHTML = expandedParagraph;
//      }

//// ----- task# 3

/// skipped difficult


//// ======== Chapter 53- 58(Modal) =======\\\\

// rest work done in html!

// function showImage(e){
//  var modalImage = document.getElementById("modalImage")
//  modalImage.src = e.src
// }

// TASK 2 

// function zoomIn() {
//     var para = document.getElementById("par")
//     para.style.fontSize = +para.style.fontSize.slice(0, -2) + 10 + "px"

// }

// function zoomOut() {
//     var para = document.getElementById("par")

//     para.style.fontSize = +para.style.fontSize.slice(0, -2) - 10 + "px"
// }

//// ======== Chapter 58- 67(DOM) =======\\\\
//TASK 1 (i)


var main = document.getElementById("main-content")


//TASK 1(ii)

var mainElements = main.childNodes;
for (var i = 0; i <= mainElements.length; i++) {

    document.write(mainElements[i].nodeName + "<br>")
}
 

//TASK 1(iii)


var render = document.getElementsByClassName("render")
for (var i = 0; i < render.length; i++) {
    document.write(render[i].firstChild.nodeValue + "<br>")
}

//TASK 1(iv)


var main = document.getElementById("main-content")
var fname = document.getElementById("first-name")
fname.value = main.childNodes[1].firstChild.nodeValue
console.log(fname.value)

//TASK 1 (v)

var main = document.getElementById("main-content")
var lname = document.getElementById("last-name")
lname.value = main.childNodes[2].firstChild.nodeValue
console.log(lname.value)

var main = document.getElementById("main-content")
var email = document.getElementById("email")
email.value = main.childNodes[3].firstChild.nodeValue
console.log(email.value)



document.write("The value of element having id first name is " + fvalue + "<br>")

//TASK 2 (i)
var form = document.getElementById("form-content")
document.write("The node type of id form-content is " + form.nodeType + "<br>")

//TASK 2 (ii)

var last = document.getElementById("lastName")
var child = last.firstChild.nodeValue
document.write("<br>" + "The node type of id lastName is " + last.nodeType + " and  child node is  " + child + "<br>")

//TASK 3 (iii)

var update = child = "Last Name : Price"
document.write("The updated value of child node of id lastName is " + update + "<br>")

//TASK(iv)

var main = document.getElementById("main-content")
document.write("The first child of id main-content is " + main.firstChild.nodeName + "<br>")

//TASK (v)

var last = document.getElementById("lastName")
var next = last.nextSibling.nodeValue;
var previous = last.previousSibling.nodeValue
document.write("The next sibling of id last name is " + next + "<br>")
document.write("The previous sibling of id last name is " + previous + "<br>")

//TASK (vi)

var email = document.getElementById("email")
var parent = email.parentNode
var type = email.nodeType
document.write("The parent node  of element having id email is  " + parent.nodeName + "<br>")
document.write("The node type of element having id email is  " + type)
