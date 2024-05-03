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

//popup -------------------------
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}


//pop delete ------------------------
let pop = document.getElementById("popupDel");

function openPop() {
    popupDel.classList.add("open-pop");
}

function closePop() {
    popupDel.classList.remove("open-pop");
}


//pop ADD ------------------------
let popadd = document.getElementById("popadd");

function openAdd() {
    popadd.classList.add("open-add");
}

function closeAdd() {
    popadd.classList.remove("open-add");
}