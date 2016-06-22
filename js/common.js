$(window).scroll(function() {

	var st = $(this).scrollTop();

	$(".text").css({
		"transform" : "translate(0%, " + st /4 + "%"
	})

	$(".sect_2 img").css({
		"transform" : "translate(0%, -" + st /40 + "%"
	});
});




