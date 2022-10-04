
// 1
// var age
// var age = Number(window.prompt("Enter Your age"));
// document.getElementById("test").innerHTML = "Your age is: " + age;


//2
// var num
// var num = Number(window.prompt("Enter a number"));
// if (num % 3 == 0 && num % 4 == 0){
//     document.getElementById("test").innerHTML = "Yes";  
// }
// else{
//     document.getElementById("test").innerHTML = "No"; 
// }


//3
// var num1;
// var num2;
// var num1 = Number(window.prompt("Enter the first integer"));
// var num2 = Number(window.prompt("Enter the second integer"));
// if(num1 > num2){
//     document.getElementById("test").innerHTML = num1;
// }
// else if(num2 > num1){
//     document.getElementById("test").innerHTML = num2;
// }


//4
// var num 
// var num = Number(window.prompt("Enter a Number"));
// if (num > 0) {
//     document.getElementById("test").innerHTML = "Positive";
// } else if (num < 0){
//     document.getElementById("test").innerHTML = "Negative";   
// }



//5
// var num1;
// var num2;
// var num3;
// var max;
// var min;


// var num1 = Number(window.prompt("Enter the first integer"));
// var num2 = Number(window.prompt("Enter the second integer"));
// var num3 = Number(window.prompt("Enter the third integer"));
// function max() {
//     if(num1 > num2 && num1 > num3){
//         max = num1;
//         document.getElementById("demo1").innerHTML = "The max element is: " + max;
//         console.log(max);
//         return max;
//     }
//     else if(num2 > num1 && num2 > num3){
//         max = num2;
//         document.getElementById("demo1").innerHTML = "The max element is: " + max;
//         console.log(max);
//         return max;
//     }
//     else if(num3 > num1 && num3 > num1){
//         max = num3;
//         document.getElementById("demo1").innerHTML = "The max element is: " + max;
//         console.log(max);
//         return max;
//     }
// }
// max();

// function min() {
//     if(num1 < num2 && num1 < num3){
//         min = num1;
//         document.getElementById("demo2").innerHTML = "The min element is: " + min;
//         console.log(min);
//         return min;
//     }
//     else if(num2 < num1 && num2 < num3){
//         min = num2;
//         document.getElementById("demo2").innerHTML = "The min element is: " + min;
//         console.log(min);
//         return min;
//     }
//     else if(num3 < num1 && num3 < num1){
//         min = num3;
//         document.getElementById("demo2").innerHTML = "The min element is: " + min;
//         console.log(min);
//         return min;
//     }
// }
// min();




//6
// var num;
// var num = Number(window.prompt("Enter a number"));

// function count() {
//     if (num % 2 == 0) {
//         document.getElementById("test").innerHTML = "Even"; 
//     } else {
//         document.getElementById("test").innerHTML = "Odd"; 
//     }
// }
// count();



//7
// var char;
// var char = window.prompt("Enter a letter");
// function isVowel() {
//     if (char == "a" || char == "e"  || char == "o" || char == "u" || char == "i" || char == "A" || char == "E"  || char == "O" || char == "I" || char == "U"){

//         document.getElementById("test").innerHTML = "Vowel";
//     }else{
//         document.getElementById("test").innerHTML = "Consonant";
//     }
// }
// isVowel();




//8
// var num = Number(window.prompt("Enter a number")) ;

// for (var i = 1; i <= num ; i++) {
//   document.write ( i + "<br/>");
//   console.log(i);
// }



//9
// var num = Number(window.prompt("Enter a number")) ;
// for (var i = 1; i <= 12 ; i++) {
//     var result = num * i ;
//     console.log(result);
//     document.write (num + " * " + i + " = " + result +"<br/>");
// }


//10
// var num = Number(window.prompt("Enter a number")) ;

// for (var i = 1 ; i <= num ; i++) {
   
//     if (i % 2 === 0) {   
//         console.log(i);
//         document.write (i +"<br/>");
//     }
// }




// 11
// var a = Number(window.prompt("Enter a number")) ;
// var b = Number(window.prompt("Enter a number")) ;

// function power(a , b) {
//     if (b === 0) {
//         return 1;
//     } else {
//         return a * power(a , b - 1) 
//     }
// }
// power(a , b);
// console.log(power(a , b))
//     document.getElementById("test").innerHTML = (a + " ^ " + b + " = " + power(a , b));





//13

// var month = Number(window.prompt("Enter month number")) ;
// function checkMonth() {
//     if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//         document.getElementById("test").innerHTML = ( " Days in Month: " +  31 );
//         console.log("Days in Month is 31");

//     } else if (month == 2 ) {
//         document.getElementById("test").innerHTML = ( " Days in Month: " +  28 );
//         console.log("Days in Month is 28");
//     }
//     else{
//         document.getElementById("test").innerHTML = ( " Days in Month: " +  30 );
//         console.log("Days in Month is 30");
//     }
// }
// checkMonth();






//14
// var physics = Number(window.prompt("Enter your physics degree")) ;
// var chemistry = Number(window.prompt("Enter your chemistry degree")) ;
// var biology = Number(window.prompt("Enter your biology degree")) ;
// var mathematics = Number(window.prompt("Enter your mathematics degree")) ;
// var computer = Number(window.prompt("Enter your computer degree")) ;

// var degree = 500;
// var total = physics + chemistry + biology + mathematics + computer;
// var percentage = (total / degree) * 100 ;

// if (percentage >= 90) {
//     document.getElementById("test").innerHTML = (percentage + " % " +" : " + "Grade A")
// } else if (percentage >= 80) {
//     document.getElementById("test").innerHTML = (percentage + " % " +" : " + "Grade B")
// } else if (percentage >= 70) {
//     document.getElementById("test").innerHTML = (percentage + " % " +" : " + "Grade C")
// } else if (percentage >= 60) {
//     document.getElementById("test").innerHTML = (percentage + " % " +" : " + "Grade D")
// } else if (percentage >= 40) {
//     document.getElementById("test").innerHTML = (percentage + " % " +" : " + "Grade E")
// } else if (percentage < 40) {
//     document.getElementById("test").innerHTML = (percentage + " % " +" : " + "Grade F")
// }



// SWITCH CASE
//15

// var month = Number(window.prompt("Enter month number")) ;

// switch (month) {
//     case  1 || 3 || 5 || 7 || 8 || 10 || 12 :
//     document.getElementById("test").innerHTML = ( " Days in Month: " +  31 + " days");
//     console.log("Days in Month is 31");
//     break;

//     case 2 :
//     document.getElementById("test").innerHTML = ( " Days in Month: " +  28 + " days");
//     console.log("Days in Month is 28");
//     break;

//     default:
//     document.getElementById("test").innerHTML = ( " Days in Month: " +  30 + " days");
//     console.log("Days in Month is 30");
//     break;
// }




//16

// var char;
// var char = window.prompt("Enter a letter");
// switch (char) {
//     case   "a" || "e"  || "o" || "u" || "i" || "A" || "E"  || "O" || "I" || "U" :

//     document.getElementById("test").innerHTML = "Vowel";
//         break;

//     default:
//         document.getElementById("test").innerHTML = "Consonant";
//         break;
// }




//17
// var num1 = Number(window.prompt("Enter a number"));
// var num2 = Number(window.prompt("Enter a number"));
// switch (true) {
//     case num1 > num2:
//         document.getElementById("test").innerHTML = num1;
//     break;

//     case num2 > num1:
//         document.getElementById("test").innerHTML = num2;
//         break;
// }





//18
// var num;
// var num = Number(window.prompt("Enter a number"));

// function count() {
//     switch (true){
//     case num % 2 == 0:
//         document.getElementById("test").innerHTML = "Even";
//     break; 
    
//     default:
//         document.getElementById("test").innerHTML = "Odd"; 
//     break;
//     }
// }
// count();





//19
// var number = window.prompt("Enter a number");
// switch (true) {
//     case number < 0:
//         document.getElementById("test").innerHTML = "Negative";
//         console.log("Negative");
//     break;

//     case  number == 0:
//         document.getElementById("test").innerHTML = "Zero";
//         console.log("zero");
//     break;
        
//     default:
//     document.getElementById("test").innerHTML = "Positive";
//     console.log("Positive");
//     break;
// }



//20
// var num1 = Number(window.prompt("Enter first number"));
// var operation = (window.prompt("Enter operator either + , - ,* or / " ))
// var num2 = Number(window.prompt("Enter second number"));

// function calc() {
//     switch (operation) {
//         case "+":
//             var result = num1 + num2;
//             document.getElementById("test").innerHTML = (result)
//         break;
//         case "-":
//             var result = num1 - num2;
//         document.getElementById("test").innerHTML = (result)
//         break;
//         case "/":
//             var result = num1 / num2;
//         document.getElementById("test").innerHTML = (result)
//         break;
//         case "*":
//             var result = num1 * num2;
//         document.getElementById("test").innerHTML = (result)
//         break;
    
//         default:
//             document.getElementById("test").innerHTML = ("Invalid operator");
//             break;
//     }
// }
// calc()