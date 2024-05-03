//Sidebar -----------------------
var sidebarOpen = false;
var sidebar =document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

//popup suspend -------------------------

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}


//popup delete ------------------------
let pop = document.getElementById("popupDel");

function openPop() {
    popupDel.classList.add("open-pop");
}

function closePop() {
    popupDel.classList.remove("open-pop");
}