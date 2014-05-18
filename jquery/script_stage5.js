$(document).on("ready", function(){
$('body').append('<embed src="sounds/PT_66883_lowres.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');

// moveable divs have id
// when moved over correct matching id div to 'click in' 
// when all correct 3 are in place within 'holding div : slides5' 
// creature to bounce and appear at the bottom
// score added
	
var jigsaw1 = [
{"correct": "#drag_cat1","#drag_cat2","#drag_cat3"},
];

var score = 0

var validate_jigsaw = (function () {
	var winningGroup = "#drag_cat1","#drag_cat2","#drag_cat3";
	//var currentGroup = '';

		if ($(this).jigsaw1() == jigsaw1[score].correct) {
			score++;

				countdown = max_countdown;
			} else {
				$("#jigsaw1").text("Look a Cat!");
				
				$('#slides5').effect("bounce", { times:3 }, 2000);
				
				clearInterval(countdown_interval);
			}	
		} else display_score();

	});
	
	var display_score = (function (){ 
			$(".text_blk_25").text(score * 100);
		
			
	});
	
	var max_countdown = 10;
	var countdown = max_countdown;
	var display_countdown = (function() {
		$("#countdown").text(countdown);
	});
	
	var countdown_interval = setInterval(function() {
			display_countdown();
			countdown--;
			if(countdown < 0){
				display_error();
				}
			}, 1000);

	display_score();


});	
