//client side code

var socket;
var msg = document.getElementById('inputMsg');
var notif = document.getElementById('notif');
var btn = document.getElementById('btn');
var username = document.getElementById('inputName');

var inputR;
var inputG;
var inputB;
var stationNum;

function setup() {
  // createCanvas(400, 400);
  // background(20);
  socket = io.connect();  //connect to the open socket

  //b4.when this client receives data called "notif", do showNotif()
  socket.on('notif', showNotif);
}

function showNotif(data){

  notif.innerHTML = data;
  notif.style.color = color(random(255),100,255);
}

 //this function triggers the web client to send data to the server
function OnBtnClicked(){

  var data = {
    name: username.value,
    msg: msg.value,
    r:inputR,
    g:inputG,
    b:inputB,
    n:stationNum
  }

  //1.sending data called "new message" including data to server
  socket.emit('new message', data);
  console.log(data);
}



//HTML chores

function color2selected(){
   btn.style.backgroundColor= "#4ECDC4";
   inputR = "78";
   inputG = "205";
   inputB = "196";
   stationNum = "1";
}
function color3selected(){
   btn.style.backgroundColor= "#F7FFF7"; //247,255,247
   inputR = "247";
   inputG = "255";
   inputB = "247";
   stationNum = "2";
}
function color4selected(){
   btn.style.backgroundColor= "#FF6B6B"; //255, 107, 107
   inputR = "255";
   inputG = "107";
   inputB = "107";
   stationNum = "3";
}
function color5selected(){
   btn.style.backgroundColor= "#FFE66D";//255,230,109
   inputR = "255";
   inputG = "230";
   inputB = "109";
   stationNum = "4";
}
function color6selected(){
   btn.style.backgroundColor= "#5BC0EB";//198,61,92
   inputR = "198";
   inputG = "61";
   inputB = "92";
   stationNum = "5";

}

function draw() {
//  background(20);


}
