$(document).ready(function () {

	console.log('toggle-button.js connected!');

	// $( '.datepicker' ).datepicker();

	// // $( '#firstName' ).datepicker();


	$('.button-wrap').on("click", function(){
	  $(this).toggleClass('button-active');
	});




});