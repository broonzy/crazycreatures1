   $(document).ready(function(){   
        

        $('#leftSide3').delay(3000).show("slide", { direction: "right" }, 300);
        $('#leftSide3').on ('mouseover',function(){  
  		$('#leftSide3').hide("slide", { direction: "right" }, 200); 
  	});

$('#leftSide1').delay(5000).show("slide", { direction: "right" }, 500);
        $('#leftSide1').on ('mouseover',function(){  
      $('#leftSide1').hide("slide", { direction: "right" }, 200); 
    });

       $('#rightSide1').delay(6000).show("slide", { direction: "left" }, 500); 
         $('#rightSide1').on ('mouseover',function(){  
  		$('#rightSide1').hide("slide", { direction: "left" }, 100); 
  	});

        $('#rightSide4').delay(7000).show("slide", { direction: "left" }, 400);
        $('#rightSide4').on ('mouseover',function(){  
  		$('#rightSide4').hide("slide", { direction: "left" }, 100); 
  	});



     });

 