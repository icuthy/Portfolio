$(document).ready(function() {
    function smoothScroll() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function() {
                window.location.hash = target;
            });
        });
    }
    smoothScroll();
    
     function equalDivs(container, column) {
         // Select and loop the container element of the elements you want to equalise
        $(container).each(function(){ 
            var highestBox = 0; // Cache the highest
              
            // Select and loop the elements you want to equalise
            $(column, this).each(function(){
                // If this box is higher than the cached highest then store it
                if($(this).height() > highestBox) {
                    highestBox = $(this).height(); 
                }
            });  
                    
            // Set the height of all those children to whichever was highest 
            $(column,this).height(highestBox);
        });
     }
    // equalDivs('.resume','.box');
             
});