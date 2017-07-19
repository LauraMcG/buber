$(document).ready(function () {

	console.log('toggle-button.js connected!');

	$('.button-wrap').on("click", function(){
	  $(this).toggleClass('button-active');
	});

});