$(document).ready(function () {

	var color = 'white';

	var colors = 'white red blue green yellow'

	$('.box').on('hover', function() {
		$(this).removeClass(colors);
    	$(this).addClass(color);

  })
	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	})

	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	})

	//color pallette

	$('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })
  $('#white').on('click', function() {
    color = 'white';
  })
})