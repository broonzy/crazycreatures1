/* all animals have animated features and event handlers with variations in effects and timing */

   $(document).ready(function(){   
        $('#flamingo_bounce_right').on ('mouseover',function(){  
  		$('#flamingo_bounce_right').effect("bounce", { times: 5 }, 3000); 
  	});
   
});
 