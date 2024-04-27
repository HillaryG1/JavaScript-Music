const button1 = document.getElementById('button1');
let audio1 = new Audio();
audio1.src = 'Sound Clips/MJ Smooth.mp3';

button1.addEventListener('click', function() {
  audio1.play();
  audio1.addEventListener('playing', function(){
    console.log('Audio 1 is playing!');
  });
  audio1.addEventListener('ended', function(){
    console.log('Audio 1 ended!')
  })
});