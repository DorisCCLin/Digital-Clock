var clock=document.querySelector('.clock');
var bg=document.querySelector('.background');

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
   if(s >=0 && s<10){
   	bg.style.backgroundImage = "url('img/midnight.jpg')";
   } else {
   	bg.style.backgroundImage = "url('img/dawn.jpg')";
   }
   // if(h >=0 && h<3){
   // 	bg.style.backgroundImage = "url('img/midnight.jpg')";
   // } else if (h >=3 && h<6) {
   // 	bg.style.backgroundImage = "url('img/dawn.jpg')";
   // } else if (h >=6 && h<9) {
   // 	bg.style.backgroundImage = "url('img/morning1.jpg')";
   // } else if (h >=9 && h<12) {
   // 	bg.style.backgroundImage = "url('img/morning2.jpg')";
   // } else if (h >=12 && h<15) {
   // 	bg.style.backgroundImage = "url('img/noon.jpg')";
   // } else if (h >=15 && h<18) {
   // 	bg.style.backgroundImage = "url('img/afternoon.jpg')";
   // } else if (h >=18 && h<21) {
   // 	bg.style.backgroundImage = "url('img/evening.jpg')";
   // } else if (h >=21 && h<24) {
   // 	bg.style.backgroundImage = "url('img/night.jpg')";
   // }  
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;}  

window.setInterval(time, 100);



