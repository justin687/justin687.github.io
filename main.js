var mobileNavActive = 0;

function mobileNav() {
    var navMenu = document.getElementById("mobileNav");
    if(mobileNavActive){
        navMenu.style.width = "0";
        navMenu.style.height = "0";
        mobileNavActive = 0;
    }
    else{
        navMenu.style.width = "60%";
        navMenu.style.height = "180px";
        mobileNavActive = 1;
    }
}