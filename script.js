const button = document.querySelector(".btn");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");

button.addEventListener('click', ()=>{
    card.style.display = "none";
    card2.style.display = "block";

})