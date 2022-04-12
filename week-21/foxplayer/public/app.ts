let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let previousButton = document.querySelector('.previous')
let nextButton = document.querySelector('.next')
let audioTags = document.querySelectorAll('audio')
let songSelector = document.querySelector('.song-selector')
let singleSong = document.querySelector('.single-song-container') as HTMLElement

const BASE_URL = "http://localhost:3000";
let selectedSongIndex:number = 0;
let isItCurrentlyPlaying = false;
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
    if (currentlySelectedSongInOrder >= 0) {
        pauseCurrentTrack();
        currentlySelectedSongInOrder = songIndexes.indexOf(selectedSongIndex)
        selectedSongIndex = songIndexes[currentlySelectedSongInOrder-1];
    }
    console.log(songIndexes.length)
    console.log(currentlySelectedSongInOrder)
}

function nextTrack():void {
    if (currentlySelectedSongInOrder < songIndexes.length-2) {
        pauseCurrentTrack();
        currentlySelectedSongInOrder = songIndexes.indexOf(selectedSongIndex)
        selectedSongIndex = songIndexes[currentlySelectedSongInOrder+1];
    }

}

function songSelectorPlayer(event:any):void {
    pauseCurrentTrack();
    selectedSongIndex = event.path[0].id.substring(1);

    console.log(event.path[0].id.substring(1))
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
            })
        }
}

generatePlaylistSongs('all');


playButton?.addEventListener('click', playCurrentTrack)
pauseButton?.addEventListener('click', pauseCurrentTrack)
previousButton?.addEventListener('click',previousTrack)
nextButton?.addEventListener('click',nextTrack)
songSelector?.addEventListener('click',songSelectorPlayer) 