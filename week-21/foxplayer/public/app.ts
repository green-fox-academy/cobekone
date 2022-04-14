let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let previousButton = document.querySelector('.previous')
let nextButton = document.querySelector('.next')
/* let audioTags = document.querySelectorAll('audio') */
let songSelector = document.querySelector('.song-selector')
let singleSong = document.querySelector('.single-song-container') as HTMLElement
let slider = document.querySelector('.slider') as HTMLElement
let remainingTime = document.querySelector('.remaining-time') as HTMLElement
let totalLength = document.querySelector('.total-length') as HTMLElement

const BASE_URL = "http://localhost:3000";
export let selectedSongIndex:number = 0;
let isItCurrentlyPlaying = false;
let wasPlayingBeforeSeeking = false;
let songIndexes:number[] = [];
let currentlySelectedSongInOrder = 0;


function playCurrentTrack():void {
    let currentlySelectedSongAudioElement = document.querySelector(`audio[id=s${selectedSongIndex}]`) as HTMLAudioElement;
    currentlySelectedSongAudioElement?.play();
/*     currentlySelectedSongInOrder = currentlySelectedSongAudioElement. */
    console.log(selectedSongIndex)
    console.log(currentlySelectedSongAudioElement)
    /* audioTags[selectedSongIndex].play(); */
    if (!isItCurrentlyPlaying) {
        playButton?.classList.toggle('hidden')
        pauseButton?.classList.toggle('hidden')
    }
    isItCurrentlyPlaying = true;
    console.log('started playing')

}

function pauseCurrentTrack():void {
    let currentlySelectedSongAudioElement = document.querySelector(`audio[id=s${selectedSongIndex}]`) as HTMLAudioElement;
    currentlySelectedSongAudioElement?.pause();
    /*audioTags[selectedSongIndex].pause(); */
    if (isItCurrentlyPlaying) {
    playButton?.classList.toggle('hidden')
    pauseButton?.classList.toggle('hidden')
    }
    isItCurrentlyPlaying = false;
    console.log('paused playing')
}

function previousTrack():void {
    if (currentlySelectedSongInOrder >= 1) {
        pauseCurrentTrack();
        currentlySelectedSongInOrder = songIndexes.indexOf(selectedSongIndex)
        selectedSongIndex = songIndexes[currentlySelectedSongInOrder-1];
        currentlySelectedSongInOrder = songIndexes.indexOf(selectedSongIndex)
    }
}

function nextTrack():void {
    if (currentlySelectedSongInOrder < songIndexes.length-1) {
        pauseCurrentTrack();
        currentlySelectedSongInOrder = songIndexes.indexOf(selectedSongIndex)
        selectedSongIndex = songIndexes[currentlySelectedSongInOrder+1];
        currentlySelectedSongInOrder = songIndexes.indexOf(selectedSongIndex)
    }
}

function songSelectorPlayer(event:any):void {
    pauseCurrentTrack();
    selectedSongIndex = event.path[0].id.substring(1);

    console.log(event.path[0].id.substring(1))
    updateSeekBarLabels();
    generatePlaylistSongsDurationLabels()
}

function singleSongElementGenerator() {
    const div = document.createElement("div");
/*     const audio = document.createElement("audio"); */
    div.innerHTML = singleSong.innerHTML;
    console.log(div)
    div.classList.add('single-song-container')
/*     div.appendChild(audio) */
    return div;
  }

function generatePlaylistSongs(playlistName:string) {
    if (playlistName == 'all') {
        fetch(`${BASE_URL}/api/songs`)
            .then((resp) => resp.json())
            .then((songs) => {
                console.log(songs);
                for (let i = 0; i < songs.files.length-1; i++) {
                    songSelector?.appendChild(singleSongElementGenerator())                                  
                }
                let singleSongContainers = document.querySelectorAll('.single-song-container');
                let singleSongContainerNumbers = document.querySelectorAll('.number');
                let singleSongContainerTitles = document.querySelectorAll('.song-title');
                let singleSongContainerLengths = document.querySelectorAll('.song-length');
                let singleSongContainerAudios = document.querySelectorAll('audio');        
                
                
                for (let i = 0; i < singleSongContainers.length; i++) {
                    songIndexes.push(songs.files[i].id)
                    singleSongContainers[i].id = `s${songs.files[i].id}`
                    singleSongContainerNumbers[i].id = `s${songs.files[i].id}`
                    singleSongContainerTitles[i].id = `s${songs.files[i].id}`
                    singleSongContainerLengths[i].id = `s${songs.files[i].id}`
                    singleSongContainerAudios[i].id = `s${songs.files[i].id}`
                    singleSongContainerNumbers[i].textContent = `${i+1}`
                    singleSongContainerTitles[i].textContent = `${songs.files[i].filename.replace(/_/g,' ')}`
                    singleSongContainerAudios[i].src = `./mp3/${songs.files[i].filename}`

                }
                
                selectedSongIndex = songIndexes[0]
                currentlySelectedSongInOrder = songIndexes.indexOf(selectedSongIndex)
            })
        }
}

function transformDurationIntoTimeLabel(durationInSec:number):string {
    return `${Math.floor(durationInSec/60)}:${Math.floor(durationInSec%60)}`
}

function updateSeekBarLabels() {
    let currentlySelectedSongAudioElement = document.querySelector(`audio[id=s${selectedSongIndex}]`) as HTMLAudioElement;
    totalLength.innerHTML = `${transformDurationIntoTimeLabel(currentlySelectedSongAudioElement.duration)}`
    remainingTime.innerHTML = `0:00`
    console.log(currentlySelectedSongAudioElement.duration)
    slider.setAttribute('max',`${currentlySelectedSongAudioElement.duration}`)
    slider.value = `0`
}

function generatePlaylistSongsDurationLabels(){
        let songNodes = document.querySelectorAll(`audio`)
        let singleSongContainerLengths = document.querySelectorAll('.song-length');
        for (let i = 0; i < songNodes.length; i++) {
            singleSongContainerLengths[i].textContent = `${transformDurationIntoTimeLabel(songNodes[i].duration)}`           
        }
    }


var existCondition = setInterval(function() {
    let songNodes = document.querySelectorAll(`audio`)
    if (songNodes.length) {
        clearInterval(existCondition);
        generatePlaylistSongsDurationLabels();
    }
    }, 100);


generatePlaylistSongs('all')



playButton?.addEventListener('click', playCurrentTrack)
pauseButton?.addEventListener('click', pauseCurrentTrack)
previousButton?.addEventListener('click',previousTrack)
nextButton?.addEventListener('click',nextTrack)
songSelector?.addEventListener('click',songSelectorPlayer) 
slider.onmousedown = function(){
    if (isItCurrentlyPlaying) {
        wasPlayingBeforeSeeking = true
    } else {
        wasPlayingBeforeSeeking = false
    }
    pauseCurrentTrack()
}
slider.onmouseup = function(){
    if (wasPlayingBeforeSeeking) {
        playCurrentTrack()
    }
}
slider.oninput = function() {
    let currentlySelectedSongAudioElement = document.querySelector(`audio[id=s${selectedSongIndex}]`) as HTMLAudioElement;
    remainingTime.innerHTML = transformDurationIntoTimeLabel(this.value);
    currentlySelectedSongAudioElement.currentTime = this.value
  }
