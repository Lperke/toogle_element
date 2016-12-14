function Menu(options) {
  var elem = options.elem;

  elem.onmousedown = function() {
  //  return false;
  }

  elem.onclick = function(event) {
    var title = event.target.closest('.title');
    if (title) {
      elem.classList.toggle('open');
        elem.classList.contains('open') ? title.innerText = 'close' : title.innerText = 'open';
    }      
  };

}
