document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".pdf4").addEventListener("click", () => {
  console.log();
  window.open("../recursos/pdf4.pdf","_blank");
});

document.querySelector(".pdf5").addEventListener("click", () => {
  console.log();
  window.open("../recursos/pdf5.pdf","_blank");
});

document.querySelector("#m4").addEventListener("click", () => {
  console.log();
  window.open("../html/m4.html","_self");
});

document.querySelector("#m5").addEventListener("click", () => {
  console.log();
  window.open("../html/m5.html","_self");
});