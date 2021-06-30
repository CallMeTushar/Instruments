$(".drum").click(function () {
  playSound(this.innerHTML);
  addAnimation(this.innerHTML);
});

$(document).keydown(event, function () {
  playSound(event.key);
  addAnimation(event.key);
});

function addAnimation(key) {
  $("." + key).addClass("pressed");

  setTimeout(function () {
    $("." + key).removeClass("pressed");
  }, 100);
}

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("Sounds/Drum/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("Sounds/Drum/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("Sounds/Drum/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("Sounds/Drum/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("Sounds/Drum/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("Sounds/Drum/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("Sounds/Drum/kick-bass.mp3");
      audio.play();
      break;
  }
}
