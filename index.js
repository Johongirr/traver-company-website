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

const toggleSubMenu1 = (e)=>{
    if(!isSubMenu1Open){
        subMenu1.style.display = "block";
        isSubMenu1Open = true;
    } else {
        subMenu1.style.display = "none";
        isSubMenu1Open = false;
    }
}

const toggleSubMenu2 = (e)=>{
    if(!isSubMenu2Open){
        subMenu2.style.display = "block";
        isSubMenu2Open = true;
    } else {
        subMenu2.style.display = "none";
        isSubMenu2Open = false;
    }
}

const toggleMenu = ()=>{
    if(!isMenOpen){
        menu.style.display = "block";
        isMenOpen = true;
        closeMenuBtn.addEventListener('click', ()=>{
            console.log(213123)
            if(isMenOpen){
                menu.style.display = "none";
                isMenOpen = false;
            }
        })
    } 
}
collapseBtn1.addEventListener('click', toggleSubMenu1);
collapseBtn2.addEventListener('click', toggleSubMenu2);
openMenuBtn.addEventListener('click', toggleMenu);
