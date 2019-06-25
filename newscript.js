function selectMenuItem(n) {
    var items = document.getElementsByClassName("menu-item");
    for (var i = 0; i < items.length; i++) {
        // items[i].style.borderBottom = "2.5px solid transparent";
        items[i].className = items[i].className.replace(" active-menu", "");
    }
    if (n != 404)
    {
        items[n].className += " active-menu"
    }
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