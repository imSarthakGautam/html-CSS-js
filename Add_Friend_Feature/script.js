let addFriend =document.querySelector('.add')
// let removeFriend=document.querySelector('.remove')
let isStatus=document.querySelector('h6')
let check=0;


addFriend.addEventListener('click',()=>{

    if (check==0){
 isStatus.innerHTML="Friends";
 isStatus.style.color="green"
 console.log("Added Friend");
 addFriend.innerHTML="Remove Friend";
 check=1;
    }
    else{
        console.log("Removed from Friend");
        isStatus.innerHTML="Stranger";
      isStatus.style.color="red"
      addFriend.innerHTML="Add Friend";
      check=0;
}
});

