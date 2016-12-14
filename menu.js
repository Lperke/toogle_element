function Menu(options) {
  var elem = options.elem;

  elem.onmousedown = function() {
  //  return false;
  }

  elem.onclick = function(event) {
    var title = event.target.closest('.title');
    if (title) {
      elem.classList.toggle('open');
    }
    
    elem.hasClass('open') ? title.html('close') : title.html('open');
      
  };

}
