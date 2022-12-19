for(let i = 0 ; i < document.querySelectorAll("button").length ; i++){
  document.getElementsByClassName("drum")[i].addEventListener("click", function(){
    var audio = new Audio('sounds/'+(i+1)+'.mp3');
    audio.play();
  })
}
