$(document).ready(function() {

	$('form').submit(function(e){
		e.preventDefault();
		var $searchField = $('#search');

		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var searchWord = $searchField.val();
		var flickrOptions = {
			tags: searchWord,
			format: "json"
		};

		function displayPhotos(data){
			var photoHTML = '';
			$.each (data.items, function(i, photo){
				photoHTML += '<div class="item">';
				photoHTML += '<a href="' + photo.link + '">'
				photoHTML += '<img src="' + photo.media.m + '"></a></div>';
				$('#photos').html(photoHTML);
			});

			$('#photos').imagesLoaded()
		  .done( function( instance ) {
		    // all images successfully loaded
			  var container = document.querySelector('#photos');
			  var masonry = new Masonry(container, {
			    columnWidth: 50,
			    itemSelector: '.item'
			  });
		  });

		};

		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

	});

});