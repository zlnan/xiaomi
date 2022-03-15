var items = document.getElementsByClassName("item");
var points = document.getElementsByClassName("point");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var time = 0;
var index = 0;
function clearActive() {
  for (var i = 0; i < items.length; i++) {
    items[i].className = "item";
  }
  for (var i = 0; i < points.length; i++) {
    points[i].className = "point";
  }
}
function goIndex() {
  clearActive();
  points[index].className = "point active";
  items[index].className = "item active";
}
function goNext() {
  if (index < 3) {
    index++;
  }
  else {
    index = 0;
  }
  goIndex();
}
function goPrev() {
  if (index == 0) {
    index = 3;
  }
  else {
    index--;
  }
  goIndex();
}
nextBtn.addEventListener("click", function () {
  goNext();
})
prevBtn.addEventListener("click", function () {
  goPrev();
})
for (var i = 0; i < points.length; i++) {
  points[i].addEventListener("click", function () {
    var pointIndex = this.getAttribute("data-index");
    index = pointIndex;
    goIndex();
    time = 0;
  })
}
setInterval(function () {
  time++;
  if (time == 60) {
    goNext();
    time = 0;
  }
}, 80);