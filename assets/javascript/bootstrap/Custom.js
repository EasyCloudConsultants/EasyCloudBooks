
var ul = document.getElementById("main");
var btns = ul.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
    alert(i);
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("action");
      current[0].className = current[0].className.replace(" action", "");
      this.className += " action";
  });
}