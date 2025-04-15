document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("dropdownToggle")
    const dropdownMenu = document.getElementById("dropdownMenu")
    const overlay = document.getElementById("overlay")
    const navitem = document.getElementsByClassName("navbar_item")
    const dropdownWrapper = document.getElementById("dropdownWrapper");



    for (let i = 0; i < navitem.length; i++) {
        navitem[i].addEventListener("mouseenter", function () {
            navitem[i].style.background = "#0101ff"
            navitem[i].style.padding = "10px "
            // navitem[i].style.transition = 'all 0.5s ease;'
            navitem[i].style.borderRadius = "10px "
        })
    }
    for (let i = 0; i < navitem.length; i++) {
        // navitem[i].style.background = "#0101ff;"
        navitem[i].addEventListener("mouseout", function () {
            // navitem[i].style.transition = 'all 0.5s ease;'
            navitem[i].style.background = "none"
            navitem[i].style.padding = ""
        })
    }
    dropdownWrapper.addEventListener("mouseenter", function () {
        // navitem.style.background = "#0101ff"
        dropdownMenu.style.display = "flex";
        dropdownMenu.style.width = "34vw"
        dropdownMenu.style.transition = 'all 1s ease'
        dropdownMenu.style.height = "24vw"
        overlay.style.display = "block";
    });


    dropdownWrapper.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
        overlay.style.display = "none";
    });
    toggleBtn.addEventListener("mouseenter", function (e) {

        if (dropdownMenu.style.display === "flex") {
            dropdownMenu.style.display === "none"
           
        } else {
            dropdownMenu.style.display = "flex"
            overlay.style.display = "block"
           
        }
    })

    toggleBtn.addEventListener("mouseleave", function (e) {

        if (dropdownMenu.style.display === "none") {
            dropdownMenu.style.display === "none"
        } else {
            dropdownMenu.style.display = "none"
            overlay.style.display = "none"
        }
    })

    // overlay.addEventListener("mouse", function (e) {
    //     dropdownMenu.style.display = "none"
    //     overlay.style.display = "none"

    // })
})

// ========================



const image_animation = document.getElementById("image_animation");


let angle = 0;
let direction = 1; // +1 ya -1

function animateImages() {
    angle += direction;

    image_animation.style.transform = `rotate(${angle}deg)`;

    if (angle >= 40 || angle <= 0) {
        direction *= -1; // direction ulta chalyga
    }
    requestAnimationFrame(animateImages);
}

animateImages();

const image_animation2 = document.getElementById("image_animation2");

let angle1 = 0;
let direction1 = 1; // +1 ya -1

function animateImages1() {
    angle1 += direction1;

    image_animation2.style.transform = `rotate(${angle1}deg)`;
    // image_animation2.style.marginTop = "10vh"

    if (angle1 <= -10 || angle1 >= 50) {
        direction1 *= -1; // direction ulta karo

    }

    requestAnimationFrame(animateImages1);
}

animateImages1();
