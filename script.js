var count = 0;
function setColor(btn) {
  var property = document.getElementById(btn);
  if (count == 0) {
      property.style.color = "blue"
      property.innerHTML = `<span><i
      class="fa-solid fa-thumbs-up"></i> Liked</span>`
      count = 1;        
  }
  else {
      property.style.color = "black"
      property.innerHTML = `<span><i
      class="fa-solid fa-thumbs-up"></i> Like</span>`
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

function buttonText(id1){
  const btn = document.getElementById(id1);
  console.log("here");
  btn.innerHTML = `<span><i
  class="fa-solid fa-thumbs-up"></i> Liked</span>`
}