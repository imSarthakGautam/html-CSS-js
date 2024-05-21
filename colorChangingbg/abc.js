//hex values


const randomColor= function(){

    let hex='0123456789ABCDEF';
    let color="#"
    //6 digit hex code
    for ( let i=0; i<6; i++){
       let a=Math.floor(Math.random()*16);
        color+=hex[a]
    }
return color;
}


let intervalId;
const startColorChange=function(){

    if (!intervalId){
        intervalId=setInterval(changeBg,2000);
    }

     function changeBg(){
    document.body.style.backgroundColor=randomColor();
    }

   
};

const stopColorChange=function(){
    clearInterval(intervalId);
    intervalId=null
};

let start=document.querySelector('.start');
let stop=document.querySelector('.stop');

start.addEventListener('click',startColorChange);
stop.addEventListener('click',stopColorChange);
