var items = document.querySelector('.site-list').querySelectorAll('.site-item');
var children = document.querySelector('.item-list').querySelectorAll('.item-children');

for (let i = 0; i < items.length; i++) {
    items[i].index = i;
    items[i].onmouseover = function () {
        children[i].style.height = '230px'
    }
    items[i].onmouseout = function () {
        children[i].style.height = '0px'
    }
}