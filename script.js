const images = document.querySelectorAll(".grid img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});