const searchBox=document.getElementById("searchBox");

searchBox.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value))
card.style.display="block";

else
card.style.display="none";

});

});
