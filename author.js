function opendetails(evt, detailName) {
    var i, tabcontent, tabButton;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
      tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    document.getElementById(detailName).style.display = "flex";
    evt.currentTarget.className += " active";
}
function following () {
  var x = document.getElementById("button");
  console.log(x);
  if (x.innerHTML === "Follow") {
    x.innerHTML = "Following";
  } else {
    x.innerHTML = "Follow";
  }
}