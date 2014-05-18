   $(document).ready(function(){   
        

        $('#leftSide4').delay(5000).show("slide", { direction: "right" }, 300);
        $('#leftSide4').on ('mouseover',function(){  
  		$('#leftSide4').hide("slide", { direction: "right" }, 100); 
  	});

       $('#rightSide1').delay(7000).show("slide", { direction: "left" }, 400); 
         $('#rightSide1').on ('mouseover',function(){  
  		$('#rightSide1').hide("slide", { direction: "left" }, 200); 
  	});

        $('#rightSide3').delay(11000).show("slide", { direction: "left" }, 300);
        $('#rightSide3').on ('mouseover',function(){  
  		$('#rightSide3').hide("slide", { direction: "left" }, 100); 
  	});


     });

 