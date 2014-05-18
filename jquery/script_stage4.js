/* see comments on stage 1 for explination of code */
$(document).on("ready", function(){
$('body').append('<embed src="sounds/PT_24323_lowres.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
	//$('#slides4_puzzle2').toggle(500);
	//$('#slides4_puzzle2').hide(1000);


	

  var questions = [
	{"text": "Who am I?", "answers": ["A Kangaroo", "A Penguin", "A Puppy", "A Fish"], "correct": "A Penguin"},
	
  ];
  
	var score = 0


	
	 
	var display_question = (function () {
		var question = questions[score];
		
		$("#question").text(question.text);
		$("#answer").empty();
		for( var i in question.answers) {
			var answer = question.answers[i]
			$("#answer").append("<li>" + answer + "</li>");
		}
		
		$("#answer li").on("click", validate_answer);
		//code below: source= http://codereview.stackexchange.com/questions/11948/randomize-a-jquery-object-list
		for (var $x=$("#answer li"), i=$x.length-1, j, temp; i>=0; i--) { j=Math.floor(Math.random()*(i+1)), temp=$x[i], $x[i]=$x[j], $x[j]=temp; }
		$x.each(function(i, li) { $("#answer").append(li);
		});
	});
	
	var validate_answer = (function () {
	
		if ($(this).text() == questions[score].correct) {
			score++;

		$('#slides4_' + score).slideDown(400);	
		$('body').append('<embed src="sounds/flamingo.wav" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
           		
			if (questions.length > score) {
				display_question();
				countdown = max_countdown;
			} else {
				$("#question").text("Look a Penguin! Now to Stage 5");
				
				$('#next_button').effect("shake", { times:2 }, 2000);
				$('#slides_penguin1').effect("bounce", { times:3 }, 2000);
				$("#answer").empty();
				clearInterval(countdown_interval);
			}	
		} else {
		  display_error();
		}
				display_score();

	});
	
	var display_error = (function() {
	
		display_question();
		$("#answer").fadeOut(500);
		$("#try").text("Try Again!").fadeIn(100).fadeOut(2000);

		  $("#answer").fadeIn(200);
		  countdown --;
	});
	
	var display_score = (function (){ 
			$(".text_blk_25").text(700 + score * 100);
		
			
	});
	
	var max_countdown = 10;
	var countdown = max_countdown;
	var display_countdown = (function() {
		$("#countdown").text(countdown);
	});
	
	var game_end = (function()  {
		$("#try").text("Try Again!").effect("shake",{  times: 4}, 3000);

		  countdown --;
	});
	
	var countdown_interval = setInterval(function() {
			display_countdown();
			countdown--;
			if(countdown < 0){
			$("#answer").empty();
			$("#question").text("out of time");
			clearInterval(countdown_interval);
			game_end();
			}
			}, 1000);
		
	display_question();
	display_score();


});	
