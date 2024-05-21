const clockhr = document.querySelector('.clockhr');
const clockmin = document.querySelector('.clockmin');
const clocksec = document.querySelector('.clocksec');



setInterval(()=>{
    d =new Date();
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();

hrotation= 30*htime +mtime/2;  
mrotation= 6* mtime;
srotation = 6* stime;

clockhr.style.transform =`rotate(${hrotation}deg)`;
clockmin.style.transform =`rotate(${mrotation}deg)`;
clocksec.style.transform =`rotate(${srotation}deg)`;
},
    1000)