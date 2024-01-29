var main = function() {

	var paused = false

	$('.arrowR').click(function() {
		paused = true;
		$('#slideshow > div:first')
		.next(0)

		.end(0)
		.appendTo('#slideshow');
	});
		
	$('.arrowL').click(function() {
		paused = true;
		$('#slideshow > div:last')
		.prependTo('#slideshow')
		.next(0)

		.end(0);
	});


	
	setInterval(function() {
		if (paused === false) { 
			$('#slideshow > div:first')
			.next(0)
			.end(0)
			.appendTo('#slideshow');
		};
	},  5000);
   
	
};

$(document).ready(main);







  $("#barra").click(function(){
    $(".esconder").show(400);
  });

  $(".x").click(function(){
    $(".esconder").hide(400);
  });



  $(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) { 
            $('.imagen').attr('src','assets/img/logo4.png');
        }
        if ($(this).scrollTop() < 150) { 
            $('.imagen').attr('src','assets/img/logo2.png');
        }
    })
});