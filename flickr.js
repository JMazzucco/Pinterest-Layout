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

			if (searchWord){
				$.each (data.items, function(i, photo){
					console.log(photo);
					photoHTML += '<div class="item">';
					photoHTML += '<img src="' + photo.media.m + '">';
					photoHTML += '<div class="overlay">';
					photoHTML += '<h6>Taken on '+ photo.date_taken +'</h6>'
					photoHTML += '<a href="' + photo.link + '">Take a look</a>';
					photoHTML += '</div></div>';
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
		 }
		};

		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

	});

});