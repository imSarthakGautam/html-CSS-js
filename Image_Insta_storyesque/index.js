let arr=[
    {
        dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1533275827314-af538c02d1de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D"

    },

    {
        dp:"https://images.unsplash.com/photo-1531908012224-8f8865e79a96?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1531907779240-9a7c7ad096df?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }
];

let clutter=""
arr.forEach(function(elem,idx){
    clutter+=`   <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})
let stories=document.querySelector("#stories");
stories.innerHTML=clutter;

stories.addEventListener('click', function(dets){
   
    console.log("dp clicked");
  
    console.log(arr[dets.target.id].story)
   document.querySelector('#full-screen').style.display="block";
  document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`

   // objects aauxa of each story owner
setTimeout(function(){
    document.querySelector('#full-screen').style.display="none";
},2000)
});