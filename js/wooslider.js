  // Can also be used with $(document).ready()
  $(window).load(function(){
  // Wistia handler.
  wistiaEmbed = document.getElementById( 'player_1' ).wistiaApi;
 
  // Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
  $( '.flexslider' )
    .fitVids()
    .flexslider({
      animation: 'slide',
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      start: function( slider ) {
        $('body').removeClass( 'loading' );
      },
      before: function ( slider ) {
        wistiaEmbed.pause();
      }
  });
 
  wistiaEmbed.bind( 'play', function() {
    jQuery( '.flexslider' ).flexslider( 'pause' );
  });
 
  wistiaEmbed.bind( 'end', function() {
    jQuery( '.flexslider' ).flexslider( 'play' );
  });
});