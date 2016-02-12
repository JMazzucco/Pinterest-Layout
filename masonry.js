  // var container = document.querySelector('#photos');
  // var masonry = new Masonry(container, {
  //   columnWidth: 50,
  //   itemSelector: '.item'
  // });

  $('#photos').masonry({
			resize: true,
 		    columnWidth: 85,
		    itemSelector: '.item'
	  });