let timeot;
window.addEventListener("mousemove", (e) =>{
  clearTimeout(timeot);
 setTimeout(() =>{
  console.log(e.x);
 },3000);
});