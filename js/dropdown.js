let downloadapp = document.querySelector('.download-app');
let downloadbox = document.querySelector('.download-box');
downloadapp.addEventListener('mouseenter', function () {
  downloadbox.style.height = '148px';
})
downloadbox.addEventListener('mouseleave', function () {
  downloadbox.style.height = '0';
})
/*
downloadapp.onmouseover = function () {
  downloadbox.style.height = '148px';
}
downloadbox.onmouseout = function () {
  downloadbox.style.height = '0';
}*/

