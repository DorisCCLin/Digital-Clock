var clock=document.querySelector('.clock');
var bg=document.querySelector('.background');
var msg=document.querySelector('.msg');

function time(){
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
   h = checkTime(h);
   m = checkTime(m);
   s = checkTime(s);
   clock.innerHTML = h + ":" + m + ":" + s;
   clock.style.color = '#' + h + m + s;
   clock.style.textShadow = "2px 2px 1px #ffffff"; 
   if(h >=0 && h<3){
   	bg.style.backgroundImage = "url('img/midnight.jpg')";
      msg.innerHTML = "Sweet dreams!";
   } else if (h >=3 && h<6) {
   	bg.style.backgroundImage = "url('img/dawn.jpg')";
      msg.innerHTML = "It's going to be a great day!";
   } else if (h >=6 && h<9) {
   	bg.style.backgroundImage = "url('img/morning1.jpg')";
      msg.innerHTML = "Good morning! Coffee?";
   } else if (h >=9 && h<12) {
   	bg.style.backgroundImage = "url('img/morning2.jpg')";
      msg.innerHTML = "Don't forget to take a break :)";
   } else if (h >=12 && h<15) {
   	bg.style.backgroundImage = "url('img/noon.jpg')";
      msg.innerHTML = "It's time for lunch! Hurray!";
   } else if (h >=15 && h<18) {
   	bg.style.backgroundImage = "url('img/afternoon.jpg')";
      msg.innerHTML = "A nap sounds help now.";
   } else if (h >=18 && h<21) {
   	bg.style.backgroundImage = "url('img/evening.jpg')";
      msg.innerHTML = "Hey, what's for dinner?";
   } else if (h >=21 && h<24) {
   	bg.style.backgroundImage = "url('img/night.jpg')";
      msg.innerHTML = "Do something fun!";
   }  
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;}  

window.setInterval(time, 100);



