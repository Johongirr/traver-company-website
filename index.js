const subMenu1 = document.querySelector('.mobile-menu__submenu-1');
const subMenu2 = document.querySelector('.mobile-menu__submenu-2');
const collapseBtn1 = document.querySelector('.collapse-1');
const collapseBtn2 = document.querySelector('.collapse-2');
const openMenuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.mobile-menu__close');
let isSubMenu1Open = false;
let isSubMenu2Open = false;
let isMenOpen = false;
let counter = 0;


const toggleSubMenu1 = (e)=>{
    collapseBtn1.classList.toggle("show");
    if(!isSubMenu1Open){
        subMenu1.style.display = "block";
        collapseBtn1.style.transform = "rotate(270deg)";
        isSubMenu1Open = true;
    } else {
        subMenu1.style.display = "none";
        collapseBtn1.style.transform = "rotate(90deg)";
        isSubMenu1Open = false;
    }
}

const toggleSubMenu2 = (e)=>{
    if(!isSubMenu2Open){
        subMenu2.style.display = "block";
        collapseBtn2.style.transform = "rotate(270deg)";
        isSubMenu2Open = true;
    } else {
        subMenu2.style.display = "none";
        collapseBtn2.style.transform = "rotate(90deg)";
        isSubMenu2Open = false;
    }
}

const toggleMenu = ()=>{
    
    if(!isMenOpen){
        console.log("IT'S WORKING!!!!");
        
        menu.style.transform = "translateX(0)";
        isMenOpen = true;
        closeMenuBtn.addEventListener('click', ()=>{
            console.log(213123)
            if(isMenOpen){
                menu.style.transform = "translateX(20rem)";
                isMenOpen = false;
            }
        })
    } 
}

 

collapseBtn1.addEventListener('click', toggleSubMenu1);
collapseBtn2.addEventListener('click', toggleSubMenu2);
openMenuBtn.addEventListener('click', toggleMenu);

