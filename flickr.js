// http://api.flickr.com/services/feeds/photos_public.gne?format=json

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

		};

		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

	});


$('#photos').masonry({
			resize: true,
 		    columnWidth: 85,
		    itemSelector: '.item'
	  });

});