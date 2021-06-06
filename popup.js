
var interval = setInterval(function(){
 var date = new Date();
 document.getElementById('time').innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
},1000);
