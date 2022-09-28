var count = 0;
function setColor(btn) {
  var property = document.getElementById(btn);
  if (count == 0) {
      property.style.color = "blue"
      count = 1;        
  }
  else {
      property.style.color = "black"
      count = 0;
  }
}