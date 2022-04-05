let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let previousButton = document.querySelector('.previous')
let nextButton = document.querySelector('.next')
let audioTags = document.querySelectorAll('audio')
let selectedSongIndex:number = 0;


function playCurrentTrack():void {
    audioTags[selectedSongIndex].play();
    playButton?.classList.toggle('hidden')
    pauseButton?.classList.toggle('hidden')
    console.log('started playing')
}

function pauseCurrentTrack():void {
    audioTags[selectedSongIndex].pause();
    playButton?.classList.toggle('hidden')
    pauseButton?.classList.toggle('hidden')
    console.log('paused playing')
}

function previousTrack():void {
    if (selectedSongIndex > 0) {
        pauseCurrentTrack();
        selectedSongIndex--;
    }
    console.log(selectedSongIndex)
}

function nextTrack():void {
    if (selectedSongIndex < audioTags.length-1) {
        pauseCurrentTrack();
        selectedSongIndex++;
    }
    console.log(selectedSongIndex)
}

playButton?.addEventListener('click', playCurrentTrack)
pauseButton?.addEventListener('click', pauseCurrentTrack)
previousButton?.addEventListener('click',previousTrack)
nextButton?.addEventListener('click',nextTrack)