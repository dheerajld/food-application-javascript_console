console.log("hello,welcome to the food app");
console.log("let's create an account");
 
var username = prompt("please create a username : ");

var password = prompt("please create a password : ");
console.log("Thank you your account have been created");

console.log("please enter your login information");
var tryuser = prompt("username");
var trypass = prompt("password");

while(username != tryuser && password != trypass){

console.log("wrong username or password pleas try again");
var tryuser = prompt("Enter your username");
var trypass = prompt("Enter your password");
}
console.log("you are connected"); 


var balance = 10;
 console.log("Your current balance is "+ balance +"dollars");
var q1 = prompt("would you like to add money to your account");

if(q1 == "yes"){

var q2 = prompt("how much would you like add: ");
var balance = balance + Number(q2);
console.log("your new balance is "+ balance + " dollars");
}else{

  console.log("greet");
}

q4 = prompt("would you like a burger ");

if(q4 == "yes"){
console.log("please choose what burger you want ");
var burgertypes = ["cheese burger","Fish burger","All dress burger"];
var price = [1,2,3];
console.log("choice 1: "+burgertypes[0]+" "+price[0]+" dollars");
console.log("choice 2: "+burgertypes[1]+" "+price[1]+" dollars");
console.log("choice 3: "+burgertypes[2]+" "+price[2]+" dollars");

var q5 = prompt("what is your choice");

if(q5 == "choice 1"){
console.log("you have orderd a "+burgertypes[0]);
console.log("the total of the order is "+price[0]+" dollars");
var balance = balance - price[0];
console.log("you have "+balance+" dollars left on your balance");
}else if(q5 == "choice 2"){
  console.log("you have orderd a "+burgertypes[1]);
  console.log("the total of the order is "+price[1]+" dollars");
  var balance = balance - price[1];
console.log("you have "+balance+" dollars left on your balance");
}else if(q5 == "choice3"){
 console.log("you have orderd a "+burgertypes[2]);
  console.log("the total of the order is "+price[2]+" dollars");
  var balance = balance - price[2];
console.log("you have "+balance+" dollars left on your balance");
}
}else{
console.log("have a good day");
}