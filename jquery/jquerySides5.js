   $(document).ready(function(){   
        

        $('#leftSide2').delay(4000).show("slide", { direction: "right" }, 200);
        $('#leftSide2').on ('mouseover',function(){  
  		$('#leftSide2').hide("slide", { direction: "right" }, 100); 
  	});



       $('#rightSide2').delay(7000).show("slide", { direction: "left" }, 400); 
         $('#rightSide2').on ('mouseover',function(){  
  		$('#rightSide2').hide("slide", { direction: "left" }, 100); 
  	});

        $('#rightSide3').delay(9000).show("slide", { direction: "left" }, 400);
        $('#rightSide3').on ('mouseover',function(){  
  		$('#rightSide3').hide("slide", { direction: "left" }, 100); 
  	});



     });

 