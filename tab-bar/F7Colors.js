//  Framework7 Color System (F7Color)
//  Author: S0n1c
//  Date: 07/16/16




//load everything needed to have f7colors working
function F7Color() {
console.log("Launching F7Colors...");
layoutStore();
ThemeStore();
checkFirst();
injectDivIDs();
customStore();
console.log("F7Colors Launched!");
}

// inject css area for F7Colors into Site
function injectDivIDs() {
var colorArea = '<div id="colorArea"></div>';
$$('body').append(colorArea);
var pageColorArea = '<div id="pageColorArea"></div>';
$$('body').append(pageColorArea);
}

// check for first run
function checkFirst() {
var firstRun = localStorage.getItem("checkFirst-f7colors");
if (firstRun == "done") {
console.log("first run passed already, proceeding...");
} else {
console.log("found a first run!");
console.log("setting layout TDM as main layout and theme blue as main tint.");
setLayout("FBM");
setTheme("blue");
localStorage.setItem("checkFirst-f7colors", "done");
}
}
// Layout Setting
function layoutStore() {
var layout = localStorage.getItem("layout");
setLayout(layout);
}


function setLayout(value){
	removePreviousLayouts();
	console.log("setting layout to "+ value +"");
	$$('body').addClass("layout-"+ value);
	localStorage.setItem("layout", value);

}

function removePreviousLayouts() {
console.log("Taking out any previous themes");
$$('body').removeClass("layout-FBM");
$$('body').removeClass("layout-TDM");
$$('body').removeClass("layout-light");
$$('body').removeClass("layout-white");
$$('body').removeClass("layout-dark");

}


//end of Layout Part

// Tint Part

function removePreviousThemes() {
console.log("Taking out any previous themes");
$$('body').removeClass("theme-blue");
$$('body').removeClass("theme-grey");
$$('body').removeClass("theme-black");
$$('body').removeClass("theme-lightblue");
$$('body').removeClass("theme-yellow");
$$('body').removeClass("theme-orange");
$$('body').removeClass("theme-pink");
$$('body').removeClass("theme-green");
$$('body').removeClass("theme-red");
}


function setTheme(value){
	removePreviousThemes();
	console.log("setting theme to "+ value +"");
	$$('body').addClass("theme-"+ value);
	localStorage.setItem("theme", value);
}

function ThemeStore() {
	var theme = localStorage.getItem("theme");
	setTheme(theme);

}



// end of Tint part

// start of Custom Colors
// check storage for colors
function customStore() {
var customNavTabcolor = localStorage.getItem("NavTabcolor");
var customNavTabback = localStorage.getItem("NavTabback");
var pageContentcolor = localStorage.getItem("pageContentcolor");
var pageContentback = localStorage.getItem("pageContentback");
navTab(customNavTabcolor, customNavTabback);
pageContent(pageContentcolor, pageContentback);

injectDivIDs();
}

function setNavBar() {
var navTabColorTXT = document.getElementById("navtabcolortxt");
var navTabBackTXT = document.getElementById("navtabbacktxt");
navTab(navTabColorTXT.value, navTabBackTXT.value);
}
function setPageContent() {
var pageColorTXT = document.getElementById("pagecolortxt");
var pageBackTXT = document.getElementById("pagebacktxt");
pageContent(pageColorTXT.value, pageBackTXT.value);
}

// custom nav-tab
function navTab(colorhex, backhex) {
console.log("using the hex "+ colorhex +" for the text color's, and "+ backhex +" for the background hex.");
var customCSS = '<style>'+
'.navbar, .subnavbar, .toolbar {'+
 ' color: #'+ colorhex +';'+
'  background-color: #'+ backhex +';'+
'}</style>';

var colorArea = document.getElementById("colorArea");
$$(colorArea).html(customCSS);
localStorage.setItem("NavTabcolor", colorhex);
localStorage.setItem("NavTabback", backhex);
}
// end of nav-tab

// custom page-content color
function pageContent(colorhex, backhex) {
console.log("using the hex "+ colorhex +" for the text color's, and "+ backhex +" for the background hex.");
var customCSS = '<style>'+
'.page-content {'+
 ' color: #'+ colorhex +';'+
'  background-color: #'+ backhex +';'+
'}</style>';

var pageColorArea = document.getElementById("pageColorArea");
$$(pageColorArea).html(customCSS);
localStorage.setItem("pageContentcolor", colorhex);
localStorage.setItem("pageContentback", backhex);
}


// end of custom page-content
// end of custom colors

function restoreStyle() {
localStorage.removeItem("NavTabcolor");
localStorage.removeItem("NavTabback");
localStorage.removeItem("pageContentcolor");
localStorage.removeItem("pageContentback");
localStorage.removeItem("layout");
localStorage.removeItem("theme");
reload();
F7Color();
}
