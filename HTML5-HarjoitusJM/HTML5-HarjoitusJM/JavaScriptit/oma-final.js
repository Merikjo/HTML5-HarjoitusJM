// oma JQuery JavaScript


$(document).ready(function(){
	$('.content').hide();
	$('#yks').bind('click', function(){
		$('.content').hide();
		$('#one').show('slow').addClass('laatikko');
	});
	$('#kaks').bind('click', function(){
		$('.content').hide();
		$('#two').show('slow').addClass('laatikko');;
	});
	$('#kol').bind('click', function(){
		$('.content').hide();
		$('#three').show('slow').addClass('laatikko');;
	});
});
