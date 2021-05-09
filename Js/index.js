var close = document.getElementById("close-side");
let sideChildren = document.getElementById("sideChildren");
var sideNav = document.getElementById("side-nav");
var sideToggle = document.getElementById("side-toggler");
var alertBody = document.getElementById("alert-body");
var alertToggler = document.getElementById("alert-toggler");
var alertAddition = document.getElementById("alert-addition");
var mainPage = document.getElementById("page-content");
var hoverBtn = document.getElementById("hover-secondary");
var loginBox = document.getElementById("login-panel");
var loginActivator = document.getElementById("login-toggle");
var goaList = document.getElementsByClassName("goals-list");
var moveTab = document.getElementById("nav-tab");


function toggleSide() {
    let element = event.target;
    if(element.id == "plus"){
        let theTarget = element.parentNode.parentNode.children[2];
        console.log();
        theTarget.classList.toggle("show");
        }

    else if (element.id =="topic") {
        let theTarget = element.parentNode.children[2];
        let plus = element.parentNode.children[1];
        theTarget.classList.toggle("show");
        plus.classList.toggle("rotate");
        }
    
    else {
        let theTarget = element.children[2];
        theTarget.classList.toggle("show");
        console.log(theTarget);
        
        let plus = theTarget.parentNode;
        let fake = plus.children[1];
        fake.classList.toggle("rotate");
    }
  
};


function toggleSidenav() {
    sideNav.classList.toggle("open");
    mainPage.classList.toggle("transparent");

    if(sideNav.classList.contains("open")){
        document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    } else {
        document.body.style.backgroundColor = "white";
    }
};

function removeSidenav() {
    if(sideNav.classList.contains("open")){
        sideNav.classList.toggle("open");
         mainPage.classList.toggle("transparent");
        document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    } else {
        document.body.style.backgroundColor = "white";
    }
};

sideToggle.addEventListener('click', function name() {
    if(sideNav.classList.contains("open")){
        toggleSidenav();
    } else {
        document.body.style.backgroundColor = "white";
    }
  
});


close.addEventListener('click', function name() {
    toggleSidenav();
});

// mainPage.addEventListener('click', function name() {
//     removeSidenav();
// });


alertToggler.addEventListener('click', function click() {
    if(alertBody.classList.contains("show")){
        document.getElementById("close-alert").style.display = "none";
        document.getElementById("alert-addition").style.visibility = "visible";
    } else {
        document.getElementById("close-alert").style.display = "block";
        document.getElementById("alert-addition").style.visibility = "hidden";
    }
});

hoverBtn.onmouseover = function name() {
    let element = event.target;
    for (let i = 0; i < element.length; i++) {
        const element = element[i];
        console.log(element);
    }
};


loginActivator.onclick = function show() {
    loginBox.classList.toggle("showing");
}

moveTab.onclick = function eletop() {
    moveTab.scrollIntoView({
        behavior: "smooth"
    });
};

// document.addEventListener('click', function trigger() {
//     removeSidenav();
// });