const $title = document.querySelector(".title");
const $humen = document.querySelector(".humen");
const $bg = document.querySelector(".back");
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
const speed = 0.03;

window.addEventListener("mousemove", mouseEvent);

function mouseEvent(e) {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;
}
loof();

function loof() {
  console.log(mx);
  console.log(my);
  mx += (x - mx) * speed;
  my += (y - my) * speed;
  $title.textContent = `x: ${mx} y: ${my}`;
  $humen.style.transform = `translate(${mx / 2}px, ${my / 2}px)`;
  $bg.style.transform = `translate(-${mx / 6}px, -${my / 6}px)`;

  window.requestAnimationFrame(loof);
}
