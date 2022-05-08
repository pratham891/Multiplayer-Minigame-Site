var audio = new Audio("audio/audio.wav");
var wrongAudio= new Audio("audio/wrong-ans.mp3");
var uiClick = new Audio("audio/ui-click.mp3");



const cont1 = document.querySelector('#container1');
const cont2 = document.querySelector('#container2');



cont1.addEventListener('click', () => {
    uiClick.play();
});

cont2.addEventListener('click', () => {
    uiClick.play();
});



