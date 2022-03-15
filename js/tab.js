function tabChange(tab, item) {
  var tabs = document.querySelector(tab).querySelectorAll('li');
  var rows = document.querySelector(item).querySelectorAll('.row-r');
  // console.log(rows);
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].index = i;
    tabs[i].onmouseover = function () {
      console.log(this);
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].className = '';
        rows[j].className = 'row-r';
      }
      this.className = 'liactive';
      rows[this.index].className = 'row-r rowactive';
    }
  }
}
tabChange('.tab-wear', '.item-wear');
tabChange('.tab-home', '.item-home');
tabChange('.tab-life', '.item-life');
tabChange('.tab-cook', '.item-cook');
tabChange('.tab-sound', '.item-sound');
tabChange('.tab-sport', '.item-sport');
tabChange('.tab-dairy', '.item-dairy');