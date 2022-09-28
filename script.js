var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});

var count = 0;
function setColor(btn) {
  var property = document.getElementById(btn);
  console.log(btn)
  if (count == 0) {
      property.style.color = "blue"
      count = 1;        
  }
  else {
      property.style.color = "black"
      count = 0;
  }
}