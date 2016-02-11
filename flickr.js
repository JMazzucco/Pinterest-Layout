// http://api.flickr.com/services/feeds/photos_public.gne?format=json

$(document).ready(function() {
	var initMasonry = function(){
		var container = document.querySelector('#photos');
	  var masonry = new Masonry(container, {
	    columnWidth: 50,
	    itemSelector: '.item'
	  });
	};

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
				photoHTML += '<a href="'+ photo.link +' ">'
				photoHTML += '<img src="'+photo.media.m+' "></a></div>';
				photoHTML += '';
				$('#photos').html(photoHTML);
			});

			initMasonry();

		};

		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

	});




});