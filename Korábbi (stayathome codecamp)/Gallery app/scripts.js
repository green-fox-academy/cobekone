let data = {
    photo: 'images/BluebellWood.jpg',
    phototitle: 'Garden in the woods',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'
}

let data2 = {
    photo: 'images/CarrickSpring.jpg',
    phototitle: 'Carrick Spring',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'    
}

let data3 = {
    photo: 'images/GPS.jpg',
    phototitle: 'Colorful Spring',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'
}

let data4 = {
    photo: 'images/KokuField.jpg',
    phototitle: 'Koku Field',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'
}

let data5 = {
    photo: 'images/LasMedulasMine.jpg',
    phototitle: 'Las Medulas Mine',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'
}

let data6 = {
    photo: 'images/MegellanicCloud.jpg',
    phototitle: 'Megellanic Cloud',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'
}

let data7 = {
    photo: 'images/Qingming2020.jpg',
    phototitle: 'Qingming 2020',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'
}

let data8 = {
    photo: 'images/RubySunset.jpg',
    phototitle: 'Ruby Sunset',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias mollitia ipsam repellendus ab officiis, alias consectetur consequatur saepe, magnam veritatis qui.'
}


let currentPhoto = 0
let imagesData = [data, data2, data3, data4, data5, data6, data7, data8]

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#phototitle').text(imagesData[currentPhoto].phototitle);
    $('#description').text(imagesData[currentPhoto].description);

    $('.selectorimage').css('visibility','hidden')
    $(".thumbnailcellcontainer").css('top','0px')
    $('[data-index='+currentPhoto+']').css('top','-5px')
    $('.selectorimage'+currentPhoto+'').css('visibility','visible')


}






$('#rightarrow').click(() => {

    if (currentPhoto<(imagesData['length']-1)) {
    currentPhoto++
    }
     else {

    if (currentPhoto=(imagesData['length'])) {
        currentPhoto=0
     } else {
    
     }
     }
    
    loadPhoto(currentPhoto)
}
)

$('#leftarrow').click(() => {
    if (currentPhoto>0) {
        currentPhoto--
        }
         else {
            if (currentPhoto==0) {
                currentPhoto=(imagesData['length']-1)
            } else {             
            }
         }
    loadPhoto(currentPhoto)
}
)


imagesData.forEach((element, index) => {
    // $('div.thumbnailscontainer').append('<img class=thumbnailimage data-index='+index+' src='+element.photo+' alt=""></img>');



    $('div.thumbnailscontainer').append(' <div class=thumbnailcellcontainer data-index='+index+'><img class=thumbnailimage data-index='+index+' src='+element.photo+' alt=""><svg class="selectorimage selectorimage'+index+'" xmlns="http://www.w3.org/2000/svg" width="14.906" height="22.75" viewBox="0 0 14.906 22.75">  <defs>          <style>            .cls-1 {              fill: #ffffff;              fill-rule: evenodd;            }          </style>        </defs>        <path id="Shape_3_copy" data-name="Shape 3 copy" class="cls-1" d="M129.01,311.107a2.45,2.45,0,0,1-3.536,0L114.868,300.5l10.606-10.607a2.5,2.5,0,1,1,3.536,3.536l-7.071,7.071,7.071,7.071A2.449,2.449,0,0,1,129.01,311.107Z" transform="translate(-114.875 -289.125)"/>      </svg>    <div class=hoveringtitle>'+imagesData[index].phototitle+'</div> <div class="arrow-down"></div> </div>  ');





    // $('div.thumbnailscontainer').append('<span>'+index+'</span>');           ez csak arra kellett, hogy megnézzem működik-e


});

loadPhoto(currentPhoto);




// $('.thumbnailcellcontainer').hover((event) => {
//     let indexHovered = $(event.target).attr('data-index');
//     let numberHovered = parseInt(indexHovered)
//     $('.thumbnailcellcontainer[data-index='+numberHovered+']').hover(function(){
//         $('.thumbnailcellcontainer[data-index='+numberHovered+']').css('top','-5px');
//         }, function(){
//         $('.thumbnailcellcontainer[data-index='+numberHovered+']').css('top','0px');
//     });


// }
// )







$('.thumbnailcellcontainer').click((event) => {

    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);                                       //Elvileg ettől lesz szám jellegű az érték, merthogy eddig szöveges volt. 
                                                                                   //Azonban a betöltésnél nem sok haszna van szerintem, mert ugyanúgy működik mindkettő.
    // $('div.thumbnailscontainer').append('<span>'+numberIndex+'</span>')      ez csak arra kellett, hogy megnézzem működik-e
    currentPhoto = numberIndex    
    loadPhoto(currentPhoto)
    // $('[data-index]').css('top','0px')
    // $( ".thumbnailcellcontainer" ).hover(
    //     function() {
    //       $( this ).css('top','-5px');
    //     }, function() {
    //       $( this ).css('top','0px');
    //     }
    //   );














    // $(".thumbnailcellcontainer").onmouseover = function() 
    // {
    //     $(".thumbnailcellcontainer").css('top','-5px');
    // }
    


})












// Ez volt a működő!!
// $('.thumbnailimage').click((event) => {

//     let indexClicked = $(event.target).attr('data-index');
//     let numberIndex = parseInt(indexClicked);                                       //Elvileg ettől lesz szám jellegű az érték, merthogy eddig szöveges volt. 
                                                                                   //Azonban a betöltésnél nem sok haszna van szerintem, mert ugyanúgy működik mindkettő.
    // $('div.thumbnailscontainer').append('<span>'+numberIndex+'</span>')      ez csak arra kellett, hogy megnézzem működik-e
//     currentPhoto = numberIndex    
//     loadPhoto(currentPhoto)

// })




// imagesData.forEach((element, index) => {
//     $('div.thumbnailscontainer').append('<img class=thumbnailimage data-index='+index+' src='+element.photo+' alt=""></img>');
    // $('div.thumbnailscontainer').append('<span>'+index+'</span>');           ez csak arra kellett, hogy megnézzem működik-e


// });





