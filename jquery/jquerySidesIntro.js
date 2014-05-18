   $(document).ready(function(){   


        $('#leftSide3').delay(3000).show("slide", { direction: "right" }, 500);
        $('#leftSide3').on ('mouseover',function(){  
  		$('#leftSide3').hide("slide", { direction: "right" }, 100); 
  	});

       $('#rightSide1').delay(7000).show("slide", { direction: "left" }, 1000); 
         $('#rightSide1').on ('mouseover',function(){  
  		$('#rightSide1').hide("slide", { direction: "left" }, 100); 
  	});
   
       	$('#rightSide2').delay(11000).show("slide", { direction: "left" }, 500);
       	$('#rightSide2').on ('mouseover',function(){  
  		$('#rightSide2').hide("slide", { direction: "left" }, 200); 
  	});


 

     });

 