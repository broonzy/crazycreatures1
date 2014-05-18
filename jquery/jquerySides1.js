   $(document).ready(function(){   
        $('#leftSide1').delay(4500).show("slide", { direction: "right" }, 500); 
         $('#leftSide1').on ('mouseover',function(){  
  		$('#leftSide1').hide("slide", { direction: "right" }, 200); 
  	});
   
       	$('#leftSide2').delay(24000).show("slide", { direction: "right" }, 700);
       	$('#leftSide2').on ('mouseover',function(){  
  		$('#leftSide2').hide("slide", { direction: "right" }, 100); 
  	});

        $('#leftSide3').delay(13000).show("slide", { direction: "right" }, 1000);
        $('#leftSide3').on ('mouseover',function(){  
  		$('#leftSide3').hide("slide", { direction: "right" }, 200); 
  	});

       $('#rightSide1').delay(7000).show("slide", { direction: "left" }, 1000); 
         $('#rightSide1').on ('mouseover',function(){  
  		$('#rightSide1').hide("slide", { direction: "left" }, 100); 
  	});
   
       	$('#rightSide2').delay(11000).show("slide", { direction: "left" }, 500);
       	$('#rightSide2').on ('mouseover',function(){  
  		$('#rightSide2').hide("slide", { direction: "left" }, 200); 
  	});

        

        $('#rightSide4').delay(15000).show("slide", { direction: "left" }, 1000);
        $('#rightSide4').on ('mouseover',function(){  
  		$('#rightSide4').hide("slide", { direction: "left" }, 200); 
  	});

 

     });

 