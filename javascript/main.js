const images = document.querySelector("#images");
const left = document.getElementById("left");
const right = document.getElementById("right");

const imgItem = document.querySelectorAll("#images img");
let index = 0;


function changeImg() {
  if (index > imgItem.length - 1) {
    index = 0;
  }else if(index < 0) {
    index = 0;
  }
  images.style.transform = `translateX(${-index * 570}px)`;
}

right.addEventListener("click", () => {
  index++;
  changeImg();
});

left.addEventListener("click", () => {
  index--;
  changeImg();
  resetInter();
})

let interval = setInterval(run,2000);

function run() {
  index++;
  changeImg();
  resetInter();
}

function resetInter() {
  clearInterval(interval);

  interval = setInterval(run, 2500);
}