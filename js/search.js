var txt = document.querySelector('.search-text');
var btn = document.querySelector('.search-btn');
var list = document.querySelector('.result-list');

// txt.onfocus = function () {
//   this.value = '';
//   txt.style.borderColor = '#ff6700';
//   btn.style.borderColor = '#ff6700';
// }
// txt.onblur = function () {
//   this.value = '手机';
//   txt.style.borderColor = '#e0e0e0';
//   btn.style.borderColor = '#e0e0e0';
// }

txt.addEventListener('focus', function () {
  this.value = '';
  // txt.style.borderColor = '#ff6700';
  txt.classList.add('search-click')
  btn.style.borderColor = '#ff6700';
  list.style.display = 'block'
})
txt.addEventListener('blur', function () {
  this.value = '小米';
  // txt.style.borderColor = '#e0e0e0';
  txt.classList.remove('search-click')
  btn.style.borderColor = '#e0e0e0';
  list.style.display = 'none'
})
// txt.addEventListener('mouseenter',function () {
//   this.value = '小米';
//   txt.style.borderColor = '#999';
//   btn.style.borderColor = '#999';
// })
// txt.addEventListener('mouseout',function () {
//   this.value = '小米';
//   txt.style.borderColor = '#e0e0e0';
//   btn.style.borderColor = '#e0e0e0';
// })

