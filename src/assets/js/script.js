import $ from "jquery";


$(document).ready(function(){
    $(window).scroll(function() {
  
        var scroll = $(window).scrollTop();
    
  
          if(scroll > 25){
              $('#Navbar').removeClass('fixed')
          }else{
              $('#Navbar').addClass('fixed')
          }
      });
  });