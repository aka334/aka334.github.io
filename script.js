var count = 0;
function setColor(btn) {
  var property = document.getElementById(btn);
  if (count == 0) {
      property.style.color = "blue"
      property.innerHTML = `<span><i
      class="fa-solid fa-thumbs-up"></i> Like</span>`
      count = 1;        
  }
  else {
      property.style.color = ""
      property.innerHTML = `<span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/H6IBF1RX3vl.png&quot;); background-position: 0px -251px; background-size: auto; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>Like</span>`
      count = 0;
  }
}

function removeBlur(id1, id2, id3){
  const userDiv = document.getElementById(id1);
  const img = document.getElementById(id2);
  const btn = document.getElementById(id3);
  btn.style.display = "none"
  userDiv.style.display="none";
  img.style.filter="none";
}
counter=0
function buttonText(id1){
  const btn = document.getElementById(id1);
  if (counter == 0) {
    btn.style.color = "black"
    btn.innerHTML = `<span><i
  class="fa-solid fa-thumbs-up"></i> Liked</span>`
    count = 1;        
}
else {
    btn.style.color = "white"
    btn.innerHTML = `<span><i
  class="fa-solid fa-thumbs-up"></i> Like</span>`
    count = 0;
}
}