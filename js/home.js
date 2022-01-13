
/*VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glade:true,
  "max-glare":1
});*/

const container = document.querySelector(".container");
const cards = document.querySelector(".noidung");

let isDown = false;

let cursorX;

container.addEventListener("mousedown", (e) =>{
  isDown = true;
  cursorX = e.offsetX- cards.offsetLeft;
});

container.addEventListener("mouseup", () =>{
  container.style.cursor = "grab";
});
window.addEventListener("mouseup", () =>{
  isDown = false;
});
container.addEventListener("mousemove", (e) =>{
  if(!isDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorX}px`
  boundCards();
});

function boundCards(){
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();
  
  if(parseInt(cards.style.left) > 0){
    cards.style.left = 0;
  } else if(cards_rect.right < container_rect.right){
    cards.style.left = `-${cards_rect.width - container_rect.width}px`
  }
}

//icon

let toggle = document.querySelectorAll('.toggle');
let menu = document.querySelectorAll('.menu');
const card = document.querySelectorAll('.card')
function show(a){
  menu[a].classList.toggle('active')
}
function xoa(a){
  card[a].style.display="none"
}