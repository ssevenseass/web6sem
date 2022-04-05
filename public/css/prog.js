(function() {
    window.startTime = (new Date()).getTime();
    window.addEventListener('load', function(){
        const loadEl = document.getElementById('loadTime');
        if (loadEl) {
            loadEl.innerHTML += ((new Date).getTime() - window.startTime) + 'ms';
        }
    });
})();


var myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


const list = document.getElementById("myUL");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


window.newElement = () => {
    var inputValue = document.getElementById("myInput").value;
    createListElement(inputValue);
    save();
}

window.createListElement = (inputValue) => {
    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Вы должны что-то написать!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

const save = () => {
    const items = Array.from(list.children).map(x => ({ text: x.childNodes[0].nodeValue, checked: x.classList.contains('checked') }));
    localStorage.setItem("items", JSON.stringify(items));
};
const load = () => {
    Array.from(list.children).forEach(x => list.removeChild(x));
    const items = JSON.parse(localStorage.getItem("items"));
    items.forEach(i => {
        createListElement(i.text);
    });
}

load();


