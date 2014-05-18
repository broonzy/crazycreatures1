$(document).ready(function() {
	$('body').append('<embed src="sounds/PT_16709_lowres.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
	/* event handler for on click of the red button, display a random image */
	$('#red_button1').click(function(){
		$('body').append('<embed src="sounds/button-14.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
// this code from http://www.markinns.com/articles/full/simple_two_line_image_randomiser_script_with_jquery
var images = ['images/flamingo_1.png', 'images/cat_1.png', 'images/giraffe_1.png', 'images/rooster_1.png', 
  'images/meercat_1.png', 'images/chick_1.png','images/squirrel_1.png','images/sheep_1.png','images/peacock_1.png',
  'images/zebra_1.png', 'images/parrot_1.png'];
	$('#slides6_1').css({
		'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
	});
	//$('<img src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#slides6_1');
});

	$('#red_button2').click(function(){
		$('body').append('<embed src="sounds/button-9.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
var images = ['images/flamingo_2.png', 'images/cat_2.png', 'images/giraffe_2.png', 'images/rooster_2.png', 
  'images/meercat_2.png', 'images/chick_2.png','images/squirrel_2.png','images/sheep_2.png','images/peacock_2.png',
  'images/zebra_2.png', 'images/parrot_2.png'];
	$('#slides6_2').css({
		'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
	});
	//$('<img src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#slides6_1');
});

	$('#red_button3').click(function(){
		$('body').append('<embed src="sounds/button-1.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
var images = ['images/flamingo_3.png', 'images/cat_3.png', 'images/giraffe_3.png', 'images/rooster_3.png', 
  'images/meercat_3.png', 'images/chick_3.png','images/squirrel_3.png','images/sheep_3.png','images/peacock_3.png',
  'images/zebra_3.png', 'images/parrot_3.png'];
	$('#slides6_3').css({
		'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
	});
	//$('<img src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#slides6_1');
});
});