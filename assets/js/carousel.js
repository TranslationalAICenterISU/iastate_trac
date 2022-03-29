$(document).ready(function() {
	var slideCount = $('#slideshow .item').length;
	var randomSlide = Math.floor( Math.random() * slideCount ); // zero index of a slide

	$("#slideshow").carousel(randomSlide);
	$("#playButton").click();
});
