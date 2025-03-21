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

// Check if we are on no3.html before enabling movement
if (window.location.pathname.includes("no3.html")) {
    const moveRandom = document.querySelector("#move-random");
    
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });

    moveRandom.addEventListener("touchstart", function (e) { // Mobile touch fix
        moveRandomEl(e.target);
        e.preventDefault(); // Prevents accidental clicks
    });
}

// Auto-submit form to send email when she clicks Yes
if (window.location.pathname.includes("yes.html")) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("yesForm").submit();
        alert("YAY! She said YES! ❤️");
    });
}
