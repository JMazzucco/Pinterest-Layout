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
			var itemID;
			var imageID;

			if (searchWord){
				$.each (data.items, function(i, photo){
					imageID = "image-" + i;
					itemID = "item-" + i;

					photoHTML += '<div id="'+itemID+'" class="item">';
					photoHTML += '<img id="'+imageID+'" src="' + photo.media.m + '">';
					photoHTML += '<a href="' + photo.link + '">';
					photoHTML += '<div class="overlay">';
					photoHTML += '<h6>Taken on '+ photo.date_taken +'</h6>'
					photoHTML += '</div></a></div>';
					$('#photos').html(photoHTML);

				});

			$('#photos').imagesLoaded()
		  .done( function( instance ) {

		  	var items_array = $('#photos').children();
		  	$.each (items_array, function(i, item){
		  		$(item).css({
				  		 width: $('#image-' + i).width(),
	   					 height: $('#image-' + i).height()
				  });
		  	});


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