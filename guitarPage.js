$(".guitar").click(function() {
  playSound(this.innerHTML);
  addAnimation(this.innerHTML);
});

$(document).keydown(event,function(){
  playSound(event.key);
  addAnimation(event.key);
});

function addAnimation(key){
  $(".s"+key).addClass("pressed");

  setTimeout(function(){
      $(".s"+key).removeClass("pressed");
  },100);
}

function playSound(key) {

  switch (key) {
    case "1":
    var audio = new Audio("Sounds/Guitar/s1.mp3");
    audio.play();
    break;

    case "2":
    var audio = new Audio("Sounds/Guitar/s2.mp3");
    audio.play();
    break;

    case "3":
    var audio = new Audio("Sounds/Guitar/s3.mp3");
    audio.play();
    break;

    case "4":
    var audio = new Audio("Sounds/Guitar/s4.mp3");
    audio.play();
    break;

    case "5":
    var audio = new Audio("Sounds/Guitar/s5.mp3");
    audio.play();
    break;

    case "6":
    var audio = new Audio("Sounds/Guitar/s6.mp3");
    audio.play();
    break;

  }
}
