	$(".imgmargin").click(function(){
debugger;
		$(this).parent('a').attr("data-magnify","gallery").attr("data-caption", $(this).parent('a').attr("title"));
		$(this).parent('a').removeClass( "fancybox-buttons" )
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
