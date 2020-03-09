let globalHref = null;

window.addEventListener("focus", () => {
   if(globalHref) {
       setTimeout(() => window.location = globalHref, 300);
   }
});

document.body.addEventListener("click", event => {
    if (event.target.tagName === "A"){
            if(localStorage.getItem("HREF")){
                localStorage.removeItem("HREF")
            }
            localStorage.setItem("HREF", event.target.href);
    }
});

window.addEventListener("storage", event =>  {
    globalHref = event.newValue;
});