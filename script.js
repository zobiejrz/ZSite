function selectMenuItem(n) {
    var items = document.getElementsByClassName("menu-item");
    for (var i = 0; i < items.length; i++) {
        // items[i].style.borderBottom = "2.5px solid transparent";
        items[i].className = items[i].className.replace(" active-menu", "");
    }

    items[n].className += " active-menu"
    items[n].style.transitionDuration = "0.3s";

}

function GitLink(n) {
    var win = window.open("https://github.com/zobiejrz/"+n, '_blank');
	win.focus();
}
window.addEventListener("resize", CheckSize());
function CheckSize()
{
    var item = document.getElementById("projects");
    item.className = item.className.replace("one", "");
    item.className = item.className.replace("two", "");
    item.className = item.className.replace("three", "");

    if(window.innerWidth < 900) {
        item.classList.add("one");
    } else if (window.innerWidth < 1300){
        item.classList.add("two");
    } else {
        item.classList.add("three");
    }
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
 
var docheight = getDocHeight()

var winheight, docheight, trackLength, throttlescroll
 
function getmeasurements(){
    winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    docheight = getDocHeight()
    trackLength = docheight - winheight
}
 
function amountscrolled(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    if (pctScrolled > 40) {
        selectMenuItem(1);
    } else {
        selectMenuItem(0);
    }
}
 
getmeasurements()
 
window.addEventListener("resize", function(){
    getmeasurements()
}, false)
 
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
        amountscrolled()
    }, 50)
}, false)