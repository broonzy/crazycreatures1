$(document).on("ready", function(){
	var score = 0
 
	$('body').append('<embed src="sounds/PT_66883_lowres.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
  /*function to allow only a specific piece of the puzzle to drop in the required div*/
	var droppable_option = {
		activeClass: 'ui-state-hover',
		hoverClass: 'ui-state-active',
		drop: function(event, ui) {		
			ui.draggable.draggable("disable", 1)
		
			$(this).addClass('ui-state-highlight');
			$("body").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
			
			score++;
			display_score();
			bonus_display();
		}		
	};
	
	/*will revert the piece of the puzzle to it's origin if not placed in the correct position */
	$( ".bird_heads, .bird_bodies, .bird_feet, .elephant_heads, .elephant_bodies, .elephant_feet, .dog_heads, .dog_bodies, .dog_feet" ).draggable({revert: 'invalid'});
		
	$(".bird_heads_slot").droppable($.extend({ accept: '.bird_heads'}, droppable_option));
	$(".bird_bodies_slot").droppable($.extend({ accept: '.bird_bodies'}, droppable_option));
	$(".bird_feet_slot").droppable($.extend({ accept: '.bird_feet'}, droppable_option));

	$(".elephant_heads_slot").droppable($.extend({ accept: '.elephant_heads'}, droppable_option));
	$(".elephant_bodies_slot").droppable($.extend({ accept: '.elephant_bodies'}, droppable_option));
	$(".elephant_feet_slot").droppable($.extend({ accept: '.elephant_feet'}, droppable_option));

	$(".dog_heads_slot").droppable($.extend({ accept: '.dog_heads'}, droppable_option));
	$(".dog_bodies_slot").droppable($.extend({ accept: '.dog_bodies'}, droppable_option));
	$(".dog_feet_slot").droppable($.extend({ accept: '.dog_feet'}, droppable_option));
		
	var display_score = (function (){ 
		$(".text_blk_22a").text(800 + score * 100);		
	});
	
	/*displays bonus round when score reaches 2000*/
	var bonus_display = (function() {
		
		if (score >= 9){
			$("#bonus").effect("shake",{  times: 6}, 5000).append('<embed src="sounds/kidcheer.wav" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
			$(".text_blk_22a").text(2000);
		}
		
	});
		
	display_score();		
});
