const seeMore = document.querySelector(".seeMore");
const cardsButtons = document.querySelectorAll(".sales__button");

seeMore.addEventListener("click",e=>{
    location.assign("products.php");
});

for(i of cardsButtons){
    i.addEventListener("click",e=>{
    location.assign("products.php");
});
}
