//if(Meteor.isClient){
  Template.slideMenu.rendered = function () {
    $(document).ready(function () {
        // make sure multiple click handlers are not registered to this
        $('.slideout-menu-toggle').off('click');    
        $('.slideout-menu-toggle').on('click', function(event){
          event.preventDefault();
          event.stopPropagation();

          //console.log("SlideMenu - Click");

          // create menu variables
          var slideoutMenu = $('.slideout-menu');
          var slideoutMenuWidth = $('.slideout-menu').width();
          
          // toggle open class
          slideoutMenu.toggleClass("open");
          
          // slide menu Open
          if (slideoutMenu.hasClass("open")) { 
            slideoutMenu.animate({left: "0px"});
   
            // create a one-time event to close when a user clicks anywhere outside
            $(document).one('touchstart click', function(){
              if (slideoutMenu.hasClass("open")) {
                slideoutMenu.toggleClass("open");
              }
              slideoutMenu.animate({left: -slideoutMenuWidth}, 250); 
            });
          } else {
            // slide menu close
            slideoutMenu.animate({left: -slideoutMenuWidth}, 250);  
          }
        });
    });
  };

//}

