window.addEventListener("load", () =>{
  alert("Aceite os termos de uso");
});

window.addEventListener("beforeunload", (e) =>{
  e.returnValue = null;
});