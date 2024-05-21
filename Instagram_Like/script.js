let con=document.querySelector('.container')
let love=document.querySelector('i')

console.log("working ")
con.addEventListener("dblclick",function(ev){
    console.log("double clicked")
    love.style.transform= "translate(-50%,-50%) scale(1)"
    setTimeout(function(){
        love.style.transform= "translate(-50%,-50%) scale(0)"
    },2000)
});

