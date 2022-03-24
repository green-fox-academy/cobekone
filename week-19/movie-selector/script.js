let formBlock = document.querySelector('form');
let genreSelector = document.querySelector('#genre')
let moviesArray = document.querySelectorAll('#movie option')
let movieSelector = document.querySelector('#movie')
let theSelectedMovieText = document.querySelector('#selectedmovie')

genreSelector.addEventListener('click',showOnlySelectedGenre)
movieSelector.addEventListener('click',writeSelectedMovie)

let selectedGenre = 'scifi';

function showOnlySelectedGenre(event){
    selectedGenre = event.srcElement.selectedOptions[0].value

    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray[i].className == selectedGenre || selectedGenre == 'all') {
            moviesArray[i].hidden = false;
        }else{
            moviesArray[i].hidden = true;
        }
        
    }
}

function writeSelectedMovie(event) {
    console.log(event)
    if (event.srcElement.selectedOptions[0].className == 'all') {
        
    }else{
    theSelectedMovieText.innerHTML = event.srcElement.selectedOptions[0].innerHTML}
}