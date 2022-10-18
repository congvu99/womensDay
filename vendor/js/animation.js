$(document).ready(function(){
    $(".message").addClass('animate__animated animate__bounceInDown animate__delay-2s').one('webkitAnimationEnd', function(event) {
        $('.message').removeClass('animate__animated animate__bounceInDown animate__delay-2s').addClass('animate__animated animate__swing').one('webkitAnimationEnd', function(event) {
            $('.message').removeClass('animate__animated animate__swing');
        }) 
    })
  });