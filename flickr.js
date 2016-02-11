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
			var photoHTML = '<ul>';
			$.each (data.items, function(i, photo){
				photoHTML += '<li">';
				photoHTML += '<a href="'+ photo.link +' " class="">'
				photoHTML += '<img src="'+photo.media.m+' "></a></li>';
				photoHTML += '</ul>';
				$('#photos').html(photoHTML);
			});
		};

		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

	});

});