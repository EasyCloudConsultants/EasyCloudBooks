	$(".imgmargin").click(function(){

		$(this).closest('a').attr("data-magnify","gallery").attr("data-caption", $(this).closest('a').attr("title"));
		$(this).closest('a').removeClass( "fancybox-buttons" )
	}); 
 

$('[data-magnify]').magnify({
    headToolbar: [
      'minimize',
      'maximize',
      'close'
    ],
    footToolbar: [
      'prev',
      'next',
      'zoomIn',
      'zoomOut',
      'fullscreen',
      'actualSize',
      'rotateLeft',
      'rotateRight'
    ],
    modalWidth: 500,
    modalHeight: 500
  });
