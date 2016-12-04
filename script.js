$( document ).ready(function() {
  $( "#submit" ).click(function( event ) {
  event.preventDefault();
    $( ".contact-form" ).fadeOut( 300, function() {
      $( ".thanks" ).fadeIn( 300, function() {
      });
    });

  });
});
