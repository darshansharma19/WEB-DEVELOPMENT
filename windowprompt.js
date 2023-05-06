// alert("INFOSYS IS STARTED HIRING..... Are you ready ?")
// var myName = window.prompt("What's Your Name ?");
// var myemail = window.prompt("Put your Email HERE ..");
// var mypassword = window.prompt("Password")

// console.log("Hello",myName);
// console.log("Email",myemail);
// console.log("password",mypassword);

// let symbol = window.prompt("Enter a symbol");
// let rows = window.prompt("enter the no. of Rows");
// let columns = window.prompt("enter the no. of col.");

// for(let i = 1; i <= rows; i++) {
//    for(let j = 1; j <= columns; j++){
//     document.getElementById("myrec").innerHTML += symbol;
// }
// document.getElementById("myrec").innerHTML += "<br>";
// }

// function startwishing(){
// let userName = "Darshan";
// let age = 19;
// Birthday(userName,age);
// }

// function Birthday(u,a){
// console.log("Happy Birthday to you");
// console.log("Happy Birthday to you");
// console.log("Happy Birthday dear",u);
// console.log("Happy Birthday to you");
// console.log("You are", a ,"years old");
// }

// startwishing();

let adult = checkage(16);
console.log(adult);

function checkage(age){
   return age >= 18 ? true : false;
}

checkwinner(true);

function checkwinner(win){
    win ? console.log('you won!!') : console.log('you lose');

}