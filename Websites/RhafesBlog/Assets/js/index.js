let left_content = document.getElementById("nav");
let menu = document.getElementById("content");

function showMenu() {
    left_content.style.left = "0";
    content.style.marginTop= "-60px";
}

function closeMenu(){
    left_content.style.left = "-300px";
    content.style.marginTop= "0px";
}
