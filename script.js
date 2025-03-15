function moveRandomEl(elm) {
    elm.style.position = "absolute";
    let newX, newY;
    
    do {
        newX = Math.floor(Math.random() * 80) + 10; // Ensures it stays within view
        newY = Math.floor(Math.random() * 80) + 10;
    } while ((newX < 10 || newX > 90) || (newY < 10 || newY > 90)); // Prevents sticking to corners
    
    elm.style.left = newX + "%";
    elm.style.top = newY + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});

moveRandom.addEventListener("touchstart", function (e) { // Mobile touch fix
    moveRandomEl(e.target);
    e.preventDefault(); // Prevents accidental clicks
});
