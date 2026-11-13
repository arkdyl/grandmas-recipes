if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.getElementById("btn").innerHTML = "Light mode";
}

function darkMode() {
    document.body.classList.toggle("dark");
    if
    (document.body.classList.contains("dark"))
{
    document.getElementById("btn").innerHTML = "Light Mode";
    }
    else {
        document.getElementById("btn".innerHTML = "Dark Mode")
    }
}

var li = document.querySelectorAll(".ingredients li");
for (var i=0; i<li.length; i++){
    li[i].onclick=function(){
        this.classList.toggle("done");
    }
}

function random() {
    var a = ["pierogi", "szarlotka", "rosol", "nalesniki"];
    var b = ["Pierogi", "Szarlotka", "Rosół", "Naleśniki"];
    var x = Math.floor(Math.random() * 4);
    document.getElementById("res").innerHTML='<a href=" ' + a[x] + '">' + b[x] + '</a>';
}