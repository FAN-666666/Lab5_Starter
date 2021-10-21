// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById('horn-select');
  let soundName;
  selectElement.addEventListener('change', function() {
    const image = document.querySelector("img");
    let aud = document.querySelector(".hidden");
    soundName = event.target.value;
    let imageFile = "assets/images/"+soundName+".svg";
    let audioFile = "assets/audio/"+soundName+".mp3"
    image.setAttribute("src",imageFile);
    image.setAttribute("alt",soundName);
    aud.setAttribute("src",audioFile);
  });

  const volumeRange = document.querySelector("input[type=range]");
  volumeRange.addEventListener("change",function(){
    let volumeValue = Number(event.target.value);
    const volumeimg = document.querySelector("#volume-controls img")
    if (volumeValue==0){
      volumeimg.setAttribute("src","assets/icons/volume-level-0.svg");
      volumeimg.setAttribute("alt","volume-level-0");
    }else if(volumeValue<33){
      volumeimg.setAttribute("src","assets/icons/volume-level-1.svg");
      volumeimg.setAttribute("alt","volume-level-1");
    }else if(volumeValue<67){
      volumeimg.setAttribute("src","assets/icons/volume-level-2.svg");
      volumeimg.setAttribute("alt","volume-level-2");
    }else{
      volumeimg.setAttribute("src","assets/icons/volume-level-3.svg");
      volumeimg.setAttribute("alt","volume-level-3");
    }
    const aud = document.querySelector(".hidden");
    aud.volume = volumeValue*0.01;
  });

  const buttonType = document.querySelector("button"); 
  buttonType.addEventListener("click",function(){
    let aud = document.querySelector(".hidden");
    aud.play();
    if(soundName=='party-horn'){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
};




