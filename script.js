// 1. Consider you have 4 images in a file as shown below:

let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let closeBtn = document.getElementById("close");
let images = document.querySelectorAll("body > img");

images.forEach(function (img) {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;  
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// . On each click on “zoom in”(+) , add 10px in font size of paragraph.
// . And on each click on “zoom out”(-) , minus 10px in font size of paragraph.


    let para = document.getElementById("text");
    let zoomInBtn = document.getElementById("zoomIn");
    let zoomOutBtn = document.getElementById("zoomOut");

    // Zoom in (+)
    let fontSize = 20;
    zoomInBtn.addEventListener("click", function() {
      fontSize += 10;
      para.style.fontSize = fontSize + "px";
    });

    // Zoom Out (-)
    zoomOutBtn.addEventListener("click", function() {
      fontSize -= 10;
      if (fontSize < 10) fontSize = 10; 
      para.style.fontSize = fontSize + "px";
    });
