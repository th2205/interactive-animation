const img1 = document.querySelector(".img1");
// const img2 = document.querySelector(".img2");
// const img3 = document.querySelector(".img3");
// const img4 = document.querySelector(".img4");
const speed = 0.05;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;

window.addEventListener("mousemove", (e) => {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;
  console.log(img1);
});

loop();
function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  img1.style.transform = `translate(-${mx}px, -${my}px)`;
  //   img3.style.transform = `translate(${mx}px, ${my}px)`;
  //   img4.style.transform = `translate(-${mx}px, -${my}px)`;
  //   img2.style.transform = `translate(${mx}px, ${my}px)`;
  window.requestAnimationFrame(loop);
}
