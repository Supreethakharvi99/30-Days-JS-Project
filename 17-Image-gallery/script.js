let scrollContainer = document.querySelector(".gallery")
let backbtn = document.getElementById('backbtn')
let nextbtn = document.getElementById('nextbtn')

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollBy({
        left: evt.deltaY,
        behavior: "smooth"
    });
}, { passive: false });

nextbtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: 900,
        behavior: "smooth"
    });
});

backbtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -900,
        behavior: "smooth"
    });
});