var mobileNavActive = 0;

function mobileNav() {
    var navMenu = document.getElementById("mobileNav");
    var menu = document.getElementById("navMenu");
    if(mobileNavActive){
        navMenu.style.width = "0";
        menu.style.position = "absolute";
        menu.style.color = "white";
        menu.classList.replace("fa-times", "fa-bars");
        mobileNavActive = 0;
    }
    else{
        navMenu.style.width = "100%";
        menu.style.position = "fixed";
        menu.style.color = "black";
        menu.classList.replace("fa-bars", "fa-times");
        mobileNavActive = 1;
    }
}