//返回顶部
window.addEventListener('scroll', function () {
  let num = document.documentElement.scrollTop
  //获取主页面全部盒子  取数组第一个mainboxs[0]
  let mainboxs = document.querySelectorAll('.main-box')
  //mainboxs[0].offsetTop   手机栏距离页面顶部的距离
  if (num >= mainboxs[0].offsetTop) {
    // backtop.style.display = 'block'
    backtop.className = 'tool-item backtop active'
  } else {
    // backtop.style.display = 'none'
    backtop.className = 'tool-item backtop'
  }
})
let backtop = document.querySelector('.backtop')
backtop.addEventListener('click', function () {
  document.documentElement.scrollTop = 0
})