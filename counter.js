let count = 0;

document.getElementById("ibutton").onclick = function(){
    count += 1;
   document.getElementById("yahabadlo").innerHTML = count;
}
document.getElementById("rbutton").onclick = function(){
    count = 0;
   document.getElementById("yahabadlo").innerHTML = count;
}
document.getElementById("dbutton").onclick = function(){
    count -= 1;
   document.getElementById("yahabadlo").innerHTML = count;
}


let dice;

document.getElementById("dice1").onclick = function(){

   dice = Math.floor(Math.random() * 6 ) + 1;

   document.getElementById("yahaper").innerHTML = dice;
}
