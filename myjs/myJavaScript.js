$(document).ready(function(){
	$('#carouselButtons>.btn-danger>.glyphicon-pause').parent().click(function(){
		$("carousel").carousel('pause');
	});

	$('#carouselButtons>.btn-danger>.glyphicon-play').parent().click(function(){
		$(".carousel").carousel('cycle');
	});

	$("#myLoginButton").click(function(){
		$("#login").modal('toggle');
	});
	$("#tableReservationButton").click(function(){
		$("#tableReservationButton").modal('toggle');
	});
});