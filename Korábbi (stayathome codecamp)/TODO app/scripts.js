

$('button').click(() => {
$('ul').append('<li> <span>'   + $('input').val() +    '<div class=torlesgomb><i class="fas fa-trash-alt"></i></div>     <div class=pipagomb><i class="fas fa-check-circle"></i></div>  </li>')


})
// $('button').click(() => {
//     $('ul').append('<li>a</li>')
    
    
//     })

// $('#torlesgomb').click(() => {
//     $('ul').append('<li class=a> <span>'   + $('input').val() +    '</span> <button id=torlesgomb>torles</button></li>')
    

// })























$('ul').on('click', '.torlesgomb', (event) => {
    event.preventDefault();
    $(event.target).text('This button was clicked');
    console.log('megnyomtad')
    $(event.target).closest('li').remove();
  });



  $('ul').on('click', '.pipagomb', (event) => {
    event.preventDefault();
    console.log('megnyomtad')
    $(event.target).closest('li').css('color','rgb(214, 214, 214)');
    $(event.target).css('color','rgb(50, 150, 80)');
    $(event.target).closest('li').css('text-decoration','line-through');

  });






// $( "ul" ).on( "click", "#torlesgomb", function( event ) {
//     event.preventDefault();
//     console.log('valami');
//     document.querySelectorAll('.a').forEach(function(a){
//         a.remove();
// })













// $('button').click(() => {
//     console.log('a')


// }
// )