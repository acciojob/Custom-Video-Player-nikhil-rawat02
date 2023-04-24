let progressFilled = document.getElementsByClassName("progress__filled")[0];
let playButton = document.getElementsByClassName("player__button")[0];
let video = document.getElementsByTagName("video")[0];
let player = document.getElementsByClassName("player")[0];
let playerControls = document.getElementsByClassName("player__controls")[0];
let backward = document.getElementsByClassName("player__button")[1];
let forward = document.getElementsByClassName("player__button")[2];
let volume = document.getElementsByClassName("player__slider")[0];
let playBackRate = document.getElementsByClassName("player__slider")[1];
let playPause = false; // false == pause true == play


video.addEventListener("timeupdate",()=>{
    
    const len=(video.currentTime/video.duration)*100;
    progressFilled.style.width=len + '%';
})
video.addEventListener("ended",()=>{
    progressFilled.style.width = 0 + '%';
})

playButton.addEventListener('click', (event) => {
    let target = event.target;
    if (playPause) {
        video.pause();
        target.innerHTML = "►";
        
    } else {
        target.innerHTML = "||";
        target.style.width = '20px'
        video.play();
    }
    playPause = !playPause;
})

backward.addEventListener('click', (event) => {
    let time = Math.floor(video.currentTime) + parseInt(event.target.dataset.skip);
    if(time >= 0){
        video.currentTime = time;
    }
})

forward.addEventListener('click', (event) => {
    let time = Math.floor(video.currentTime) + parseInt(event.target.dataset.skip);
    if(time < video.duration){
        video.currentTime = time;
    }
})


volume.addEventListener('change', () => {
    video.volume = volume.value;
    console.log(video.volume);
});

playBackRate.addEventListener('change', () => {
    video.playbackRate = playBackRate.value;
    console.log(video.playbackRate);
})