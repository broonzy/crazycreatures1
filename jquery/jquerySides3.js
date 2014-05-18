   $(document).ready(function(){   

$('#leftSide2').delay(4300).show("slide", { direction: "right" }, 500);
        $('#leftSide2').on ('mouseover',function(){  
      $('#leftSide2').hide("slide", { direction: "right" }, 200); 
    });

       $('#rightSide2').delay(5000).show("slide", { direction: "left" }, 500); 
         $('#rightSide2').on ('mouseover',function(){  
  		$('#rightSide2').hide("slide", { direction: "left" }, 100); 
  	});

        $('#rightSide1').delay(8000).show("slide", { direction: "left" }, 300);
        $('#rightSide1').on ('mouseover',function(){  
  		$('#rightSide1').hide("slide", { direction: "left" }, 100); 
  	});


  $('#rightSide5').delay(10000).show("slide", { direction: "left" }, 300);
        $('#rightSide5').on ('mouseover',function(){  
      $('#rightSide5').hide("slide", { direction: "left" }, 100); 
    });

     });

 
//declare div
 //$("button").click(function(){
  //var div=$("div");
  //div.animate({left:'100px'},"slow");
  //div.animate({fontSize:'3em'},"slow");
//}); 