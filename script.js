let openFace = document.querySelector(".open");
let closeFace = document.querySelector(".close");

closeFace.addEventListener("click", () => {
    if(openFace.classList.contains("open")){
        openFace.classList.add("active");
        closeFace.classList.remove("active");
    }
});

openFace.addEventListener("click", () => {
    if(closeFace.classList.contains("close")){
        openFace.classList.remove("active");
        closeFace.classList.add("active");
    }
});
