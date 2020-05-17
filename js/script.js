// $(function(){
// $('.ip_menu').click(function(){
// $('.ip_top_menu').fadeIn();
// });
// });

// $(function(){
//   $('.ip_menu').click(function(){
//     $('.ip_top_menu').fadeOut();
//   });


// });

$('.ip_menu').on('click',function(){
  // alert('クリックされたよ');
  $('.ip_top_menu').slideToggle();
});
